import Logo from "../Logo";

const Nav = () => {
	return (
		<nav className="container mx-auto flex items-center justify-center p-4">
			<div className="flex w-full items-center justify-between">
				<Logo />

				<button className="rounded-full bg-black px-4 py-2 text-white">
					Sign Up
				</button>
			</div>
		</nav>
	);
};

export default Nav;
