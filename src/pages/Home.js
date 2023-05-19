import ConnectButton from '../components/ConnectButton';
import { ReactComponent as BallotBox } from '../images/ballot-box.svg';

const Home = () => {
	return (
		<div className="w-full h-fit px-7 mt-[118px] mb-[53px]">
			<h1 className="font-bold text-xl">Welcome, Adeniran</h1>
			<div className="w-full h-fit mt-5 p-5 bg-white rounded-lg flex flex-row justify-between gap-5">
				<div className=" flex flex-col justify-start gap-3">
					<h2 className="font-bold text-lg">Connect your wallet</h2>
					<p className="text-sm text-gray font-medium">
						You need to connect your metamask wallet before you can vote for an
						aspirant in any poll on BlockVote
					</p>
					<ConnectButton />
				</div>
				<BallotBox />
			</div>
		</div>
	);
};

export default Home;
