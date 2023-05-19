import { useSelector } from 'react-redux';
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import LogOutModal from '../components/LogOutModal';

const LoginSuccess = ({ children }) => {
	const { isLogout } = useSelector((state) => state.authSlice);
	return (
		<div className="max-w-screen-2xl h-full m-auto relative">
			<div className="w-full h-full flex flex-row justify-between relative">
				<SideBar />
				<div className="w-[calc(100%_-_15rem)] h-auto absolute right-0">
					<Header />
					{children}
				</div>
			</div>
			{isLogout && <LogOutModal />}
		</div>
	);
};

export default LoginSuccess;
