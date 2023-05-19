import bvote from './bVote.json';
import { ethers } from 'ethers';
let instance;

const initWeb3 = async () => {
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	instance = new ethers.Contract(
		'0x517b2606d8E573D3C392eeA5004315A5b401C57F',
		bvote,
		provider
	);

	return provider;
};

export { instance, initWeb3 };
