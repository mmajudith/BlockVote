//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";

contract Voting {
    using Counters for Counters.Counter;
   Counters.Counter public candidateId;
   Counters.Counter public votersId;

    // Define a struct to hold voter information
    struct Voter {
        uint256 voterId;
        address voteraddress;
        uint256 weight;
        bool authorized;    // True if the voter is authorized to vote
        bool voted;         // True if the voter has already voted
        uint256 vote;          // Index of the voted proposal
    }

    //Define a struct to hold candidate's information
    struct  Candidate {
     uint256 candidateId;
     uint256 voteCount;
     address candidateAddress;
     string candidateName;
    }
    
    //Define an event that will be emitted when candidate and voter log in
    event LogCandidate(
      uint256 candidateId,
      address candidateAddress,
      string candidateName,
      uint256 voteCount
      
    );

    event LogVoter(
        bool voted,
        address voteraddress,
        uint256 vote,
        uint256 weight
    );
 address public chairperson;          // Address of the chairperson who deploys the contract
    mapping(address => Voter) public voters;   // Map of voters
    address[] public votedVoters;
    address[] public votersAddresses;
    uint256 private votingStartTime;
    uint256 private votingEndTime;
    address[] public candidateAddress;

    address[] public candidateAddresses;
   mapping(address => Candidate) public candidates;


    modifier votingStatus {
        require(block.timestamp >= votingStartTime, "Voting Ongoing");
        require(block.timestamp <= votingEndTime, "Voting has ended");
        _;
    }
     modifier onlyOwner {
       require(msg.sender == chairperson, "You are not the chairperson");
       _;
   }

      //register candidates
      function registerCandidate(string memory _name, address _candidateAddress) public  votingStatus {
       require(candidates[_candidateAddress].candidateAddress == address(0), "candidate already registered");
       require(_candidateAddress != chairperson, "Chairperson cannot be a candidate");

       candidateId.increment();
       uint256 id = candidateId.current();
       Candidate storage candidate = candidates[_candidateAddress];
       candidate.candidateId = id;
       candidate.candidateAddress = _candidateAddress;
       candidate.candidateName = _name;
       candidate.voteCount = 0;
       candidateAddresses.push(_candidateAddress);
       emit LogCandidate(id, _candidateAddress, _name, 0);
   }



    // Define an event that will be emitted when a vote is cast
    event Vote(address indexed voter, uint indexed proposalIndex);

    function vote(address _candidateAddress, uint256 _candidateId) public votingStatus {
        Voter storage voter = voters[msg.sender];
        require(!voter.voted, "You have already voted");
        require(voter.weight !=0, "You don't have the right to vote");
         require(candidates[_candidateAddress].candidateAddress != address(0), "Candidate does not exist");

        voter.voted = true;
        voter.vote = _candidateId;

        votedVoters. push(msg.sender);

        candidates[_candidateAddress].voteCount += voter.weight;
        emit LogVoter(voter.voted, msg.sender, voter.vote, voter.weight);
    }

    // Function to authorize a voter
    function authorize(address voter) public {
        require(msg.sender == chairperson, "Only the chairperson can authorize voters.");
        require(!voters[voter].voted, "The voter has already voted.");
        require(!voters[voter].authorized, "The voter is already authorized.");
        voters[voter].authorized = true;
    }
    
  // Get winner address and voterCount
   function getWinner() public  view returns (address _winningCandidate, uint256 _voteCount ) {
       require(votingEndTime < block.timestamp, "Please wait for voting to end to see the result");
       uint voteCount = 0;
       address winnerAddress;
       for(uint256 i=0; i<candidateAddresses.length; i++) {
           if(candidates[candidateAddresses[i]].voteCount > voteCount) {
               voteCount = candidates[candidateAddresses[i]].voteCount;
               winnerAddress = candidateAddresses[i];
           }
       }
       return (winnerAddress, voteCount);
   }

    
}