import { Outlet } from 'react-router-dom';
import VoteBox from '../images/voting-box.png';
import { ReactComponent as Logo } from '../images/BlockVote.svg';

const User = () => {
	return (
		<div
			className="w-[100vw] h-[100vh] bg-no-repeat bg-cover bg-center"
			style={{ backgroundImage: `url(${VoteBox})` }}
		>
			<div
				className="w-0 h-0 border-b-[100vh] border-b-green border-l-[17vw] border-l-transparent 
							border-r-[33vw] border-r-green border-solid absolute inset-y-0 right-0 z-0"
			></div>
			<div className="w-full h-full m-auto bg-black-opacity relative z-10">
				<div className="max-w-screen-2xl w-11/12 h-full m-auto py-16 flex flex-row justify-between items-center absolute inset-0">
					<div className="self-start">
						<Logo />
					</div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default User;
