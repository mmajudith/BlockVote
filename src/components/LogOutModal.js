import { useDispatch } from 'react-redux';

import { logOut } from '../reduxtoolkit/actionsCreator/userActions';
import { toggleLogout } from '../reduxtoolkit/features/authReducer';
import { ReactComponent as ErrorIcon } from '../images/error.svg';
import { ReactComponent as CloseIcon } from '../images/close.svg';

const LogOutModal = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logOut());
		dispatch(toggleLogout());
	};

	return (
		<div className="w-screen h-screen m-auto flex flex-col justify-center items-center bg-black-opacity fixed inset-0 z-30">
			<div className="w-[400px] h-fit p-7 bg-white rounded-lg flex flex-col justify-center items-center">
				<CloseIcon
					onClick={() => dispatch(toggleLogout())}
					className="self-end cursor-pointer"
				/>
				<div className="w-full flex flex-col justify-center items-center gap-4 my-10">
					<ErrorIcon />
					<p className="font-bold text-black">Log Out?</p>
					<p className="text-sm text-[#606060]">
						Are you sure you want to logout?
					</p>
					<div className="w-full h-fit flex flex-row justify-between">
						<p
							onClick={() => dispatch(toggleLogout())}
							className="w-[150px] h-[45px] flex flex-col justify-center items-center rounded shadow-4xl text-sm cursor-pointer border border-solid border-green text-green font-bold"
						>
							No, Cancel
						</p>
						<p
							onClick={handleLogout}
							className="w-[150px] h-[45px] flex flex-col justify-center items-center rounded shadow-4xl text-sm text-white cursor-pointer bg-green font-bold hover:opacity-60"
						>
							Yes, Logout
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LogOutModal;
