import LocationIcon from '../images/location.png';
import UserIcon from '../images/user.svg';
import ConnectButton from './ConnectButton';

const Header = () => {
	return (
		<div className="max-w-[calc(1536px_-_15rem)] w-[calc(100%_-_15rem)] h-[65px] px-7 bg-white flex flex-row justify-between items-center shadow-3xl fixed">
			<div className="flex flex-row justify-center items-center gap-3">
				<img src={LocationIcon} alt="location icon" />
				<p>Ikeja LGA, Lagos State</p>
			</div>
			<div className="flex flex-row justify-center items-center gap-6">
				<ConnectButton />
				<div className="flex flex-row justify-between items-center gap-2">
					<img
						className="w-[35px] h-[35px]"
						src={UserIcon}
						alt="user profile icon"
					/>
					<p className="font-semibold text-xs">Adeniran Tobiloba</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
