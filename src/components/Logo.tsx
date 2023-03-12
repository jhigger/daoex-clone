import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/">
			{/* <Image
				src={logo}
				alt="logo"
				width={516}
				height={104}
				className="max-w-[10rem] sm:max-w-sm lg:max-w-full"
			/> */}
			<h1 className="text-lg text-white">Logo</h1>
		</Link>
	);
};

export default Logo;
