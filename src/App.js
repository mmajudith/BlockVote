import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import User from './pages/User';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import LoginSuccess from './pages/LoginSuccess';
import Home from './pages/Home';
import Polls from './pages/Polls';
import AspirantProfile from './pages/AspirantProfile';

const App = () => {
	const { currentUser } = useSelector((state) => state.authSlice);

	const RequireAuth = ({ children }) => {
		return currentUser ? children : <Navigate to="/user" />;
	};

	return (
		<div className="w-full h-full m-auto text-black font-normal text-base">
			<Routes>
				<Route path="/">
					<Route path="user" element={<User />}>
						<Route index element={<SignIn />} />
						<Route path="signUp" element={<SignUp />} />
					</Route>
					<Route
						index
						element={
							<RequireAuth>
								<LoginSuccess>
									<Home />
								</LoginSuccess>
							</RequireAuth>
						}
					/>
					<Route
						path="polls"
						element={
							<RequireAuth>
								<LoginSuccess>
									<Polls />
								</LoginSuccess>
							</RequireAuth>
						}
					/>
					<Route
						path="aspirant"
						element={
							<RequireAuth>
								<LoginSuccess>
									<AspirantProfile />
								</LoginSuccess>
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default App;
