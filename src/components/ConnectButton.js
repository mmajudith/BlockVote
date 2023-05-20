import { initWeb3 } from '../utils/kit';

const ConnectButton = () => {
	return (
		<p
			className="w-[142px] h-[40px] flex flex-col justify-center items-center text-white 
					font-semibold cursor-pointer bg-green hover:opacity-60 rounded-md text-sm"
		>
			Connect Wallet
		</p>
	);
};

export default ConnectButton;
