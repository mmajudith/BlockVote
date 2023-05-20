import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

// import { instance } from '../utils/kit';
import { logIn } from '../reduxtoolkit/actionsCreator/userActions';
import InputText from './InputText';
import PassWord from './PasswordInput';
import Button from './Button';

const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [userName, setUserName] = useState('');
	const [cardNumber, setCardNumber] = useState('');
	const [passWord, setPassWord] = useState('');
	const [disable, setDisable] = useState(false);
	const [buttonValue, setButtonValue] = useState('Sign Up');

	const handleSubmit = async (e) => {
		e.preventDefault();

		// if (!userName || !passWord) {
		// 	return toast.warn('both username and password field are required!');
		// }
		setDisable(true);
		setButtonValue('Signing Up');
		try {
			// let t = await instance.method.voters(
			// 	'0x517b2606d8E573D3C392eeA5004315A5b401C57F'
			// );
			// console.log('t', t);
			await dispatch(logIn('judith'));
			navigate('/');
			toast.success('Successfully signed up.');
		} catch (error) {
			toast('Error signing in please check your internet connect.');
			setDisable(false);
			setButtonValue('Sign Up');
			console.error('Error signing up', error);
		}
	};

	return (
		<div className="w-[560px] h-full bg-white rounded flex flex-col justify-center items-center">
			<p className="w-10/12 mx-auto mb-1 text-black text-3xl font-bold">
				Sign Up to Vote
			</p>
			<p className="w-10/12 mx-auto mb-10 text-gray text-sm font-medium">
				Please fill the information below
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
				<InputText
					type={'number'}
					placeholder={'Enter Your VIN'}
					value={cardNumber}
					onChangeHandler={(e) => setCardNumber(e.target.value)}
					forLabel={'cardNumber'}
				/>
				<PassWord
					value={passWord}
					onChangeHandler={(e) => setPassWord(e.target.value)}
				/>
				<Button text={buttonValue} type={'submit'} disable={disable} />
			</form>
			<p className="w-10/12 mx-auto mt-4 font-medium text-sm text-center">
				Already have an account?{' '}
				<Link to="/user" className="text-green cursor-pointer">
					Sign In
				</Link>
			</p>
		</div>
	);
};

export default SignUp;
