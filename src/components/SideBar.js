import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleLogout } from '../reduxtoolkit/features/authReducer';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as PollIcon } from '../images/polls.svg';
import { ReactComponent as AspirantIcon } from '../images/customers-inactive.svg';
import { ReactComponent as LogOutIcon } from '../images/logout.svg';

const SideBar = () => {
	const dispatch = useDispatch();

	return (
		<div className="w-60 h-[100vh] bg-white fixed">
			<div className="h-[65px] flex flex-col justify-center items-start pl-10">
				<Logo />
			</div>
			<ul className="w-full h-fit mt-12 flex flex-col justify-center items-center gap-7">
				<li className="w-full h-[37px] text-gray font-medium text-sm m-auto">
					<NavLink
						to={'/'}
						className={({ isActive }) => (isActive ? `active` : undefined)}
					>
						<div className="w-full h-full pl-10 flex flex-row justify-start items-center gap-3">
							<HomeIcon className="link-icon" />
							<p>Home</p>
						</div>
					</NavLink>
				</li>
				<li className="w-full h-[37px] text-gray font-medium text-sm m-auto">
					<NavLink
						to={'/polls'}
						className={({ isActive }) => (isActive ? `active` : undefined)}
					>
						<div className="w-full h-full pl-10 flex flex-row justify-start items-center gap-3">
							<PollIcon className="link-icon" />
							<p>Polls</p>
						</div>
					</NavLink>
				</li>
				<li className="w-full h-[37px] text-gray font-medium text-sm m-auto">
					<NavLink
						to={'/aspirant'}
						className={({ isActive }) => (isActive ? `active` : undefined)}
					>
						<div className="w-full h-full pl-10 flex flex-row justify-start items-center gap-3">
							<AspirantIcon className="link-icon-stroke" />
							<p>Aspirant Profiles</p>
						</div>
					</NavLink>
				</li>
				<li className="w-full h-[37px] text-gray font-medium text-sm m-auto">
					<div
						onClick={() => dispatch(toggleLogout())}
						className="w-full h-full pl-10 flex flex-row justify-start items-center gap-3 cursor-pointer"
					>
						<LogOutIcon />
						<p className="text-[#D70015]">LogOut</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
