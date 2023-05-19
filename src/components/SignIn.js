import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

// import { instance, initWeb3 } from '../utils/kit';
import { logIn } from '../reduxtoolkit/actionsCreator/userActions';
import InputText from './InputText';
import PassWord from './PasswordInput';
import Button from './Button';

const SignIn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [userName, setUserName] = useState('');
	const [passWord, setPassWord] = useState('');
	const [disable, setDisable] = useState(false);
	const [buttonValue, setButtonValue] = useState('Sign In');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!userName || !passWord) {
			return toast.warn('both username and password field are required!');
		}
		setDisable(true);
		setButtonValue('Signing In');
		try {
			await dispatch(logIn('judith'));
			navigate('/');
			toast.success('Successfully signed in.');
		} catch (error) {
			toast('Error signing in please check your internet connect.');
			setDisable(false);
			setButtonValue('Sign In');
			console.error('Error signing in', error);
		}
	};

	return (
		<div className="w-[560px] h-full bg-white rounded flex flex-col justify-center items-center">
			<p className="w-10/12 mx-auto mb-16 text-black text-3xl font-bold">
				Sign In to Vote
			</p>
			<form
				onSubmit={handleSubmit}
				className="w-10/12 h-auto mx-auto flex flex-col justify-center gap-9"
			>
				<InputText
					type={'text'}
					placeholder={'Enter Your Username'}
					value={userName}
					onChangeHandler={(e) => setUserName(e.target.value)}
					forLabel={'name'}
				/>
				<div className="w-full h-auto mx-auto flex flex-col justify-center gap-2">
					<PassWord
						value={passWord}
						onChangeHandler={(e) => setPassWord(e.target.value)}
					/>
					<span className="text-green text-sm font-medium text-right">
						Forgot password?
					</span>
				</div>
				<Button text={buttonValue} type={'submit'} disable={disable} />
			</form>
			<p className="w-10/12 mx-auto mt-4 font-medium text-sm text-center">
				Don’t have an account?{' '}
				<Link to="/user/signUp" className="text-green cursor-pointer">
					Sign Up
				</Link>
			</p>
		</div>
	);
};

export default SignIn;
