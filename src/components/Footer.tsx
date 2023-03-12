import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="container mx-auto flex items-center justify-center px-4 text-white">
			<div className="flex w-full flex-col gap-4 border-t border-t-gray-500">
				<div className="flex items-center justify-between py-8">
					<Logo />
					<ul className="flex items-center justify-center gap-4">
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
							>
								social link 1
							</a>
						</li>
						<li>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
							>
								social link 2
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
