const Input = () => {
	return (
		<form className="flex h-14 w-max justify-center">
			<input
				className="w-8/12 rounded-lg rounded-tr-none rounded-br-none border border-gray-600 bg-darkgray p-5"
				placeholder="email address"
				required
			/>
			<button
				type="submit"
				className="w-4/12 rounded-lg rounded-tl-none rounded-bl-none border border-gray-400 bg-black px-4 text-white"
			>
				Try it free!
			</button>
		</form>
	);
};

export default Input;
