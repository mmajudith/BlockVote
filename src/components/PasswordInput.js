import { useState } from 'react';
import { ReactComponent as EyeInVisible } from '../images/eye-invisible.svg';
import { ReactComponent as EyeVisible } from '../images/visible-eye.svg';

const PassWord = ({ value, onChangeHandler }) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleShowHidePass = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<div className="w-full h-[50px] relative">
			<input
				className="w-full h-full pl-3 text-black outline-none border-gray border-solid border rounded
								peer focus:border-green"
				type={`${!isVisible ? 'password' : 'text'}`}
				value={value}
				onChange={onChangeHandler}
				id="password"
				required
			/>
			<label
				htmlFor="password"
				className="bg-white absolute left-3 top-3 cursor-text text-gray z-10 peer-focus:top-[-8.4px]
					peer-focus:text-xs peer-focus:text-green peer-focus:px-1 transition-all ease-linear
					peer-valid:top-[-8.4px] peer-valid:text-xs peer-valid:text-black peer-valid:px-1"
			>
				Password
			</label>

			<p
				className="absolute right-3 top-4 cursor-pointer"
				onClick={handleShowHidePass}
			>
				{!isVisible ? <EyeInVisible /> : <EyeVisible />}
			</p>
		</div>
	);
};

export default PassWord;
