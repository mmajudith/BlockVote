const InputText = ({ type, placeholder, value, onChangeHandler, forLabel }) => {
	return (
		<div className="w-full h-[50px] relative">
			<input
				className="w-full h-full text-black pl-3 outline-none border-gray border-solid border rounded
						peer focus:border-green"
				type={type}
				value={value}
				onChange={onChangeHandler}
				placeholder=""
				id={forLabel}
				required
			/>
			<label
				htmlFor={forLabel}
				className=" bg-white absolute left-3 top-3 z-10 cursor-text text-gray peer-focus:top-[-8.4px]
								peer-focus:text-xs peer-focus:text-green peer-focus:px-1 transition-all ease-linear
								peer-valid:top-[-8.4px] peer-valid:text-xs peer-valid:text-black peer-valid:px-1"
			>
				{placeholder}
			</label>
		</div>
	);
};

export default InputText;
