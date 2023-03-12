/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Footer from "~/components/Footer";
import Input from "~/components/Input";
import Nav from "~/components/Nav";

const Home: NextPage = () => {
	const clients = new Array(11).fill(null);

	return (
		<div className="bg-lightgray">
			<Head>
				<title>DAO Exchange</title>
			</Head>
			<Nav />
			<main className="text-white">
				<section className="flex flex-col items-center justify-center gap-4 bg-lightgray py-20 text-center tracking-tighter">
					<div className="container mx-auto flex flex-col items-center justify-center gap-8">
						<div className="mb-8 flex flex-col items-center justify-center gap-8">
							<h1 className="w-10/12 text-4xl font-bold lg:text-8xl">
								Understand, engage, and grow your web 3
								community.
							</h1>
							<p className="w-9/12 text-base text-gray-300 md:w-1/3 lg:text-2xl">
								The all-in-one tool for managing and growing
								your web3 community
							</p>
							<Input />
						</div>
						<img
							src="https://via.placeholder.com/1080x720?text=Image"
							alt="hero"
							className="h-full w-11/12 object-cover object-center"
						/>
						<div className="flex w-11/12 flex-col items-center justify-center gap-4 py-16 px-8 md:flex-row">
							<p className="w-40">
								Join other top DAOs pushing boundaries
							</p>
							<div className=" flex flex-wrap items-center justify-evenly gap-8">
								{clients.map((_, i) => {
									return (
										<div
											key={i}
											className="h-11 w-11 overflow-hidden rounded-full transition-all duration-75 ease-in-out hover:scale-125"
										>
											<img
												src="https://via.placeholder.com/1080x720?text=Image"
												alt="client"
												className="h-full w-full object-cover object-center"
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				<section className="flex flex-col items-center justify-center gap-4 bg-lightgray pb-20">
					<div className="container mx-auto">
						<div className="flex flex-col items-center justify-center gap-8">
							<h2 className="w-9/12 text-center text-3xl font-bold lg:text-7xl">
								Web 3 community managers are flying blind
							</h2>
							<div className="grid w-9/12 grid-cols-1 gap-6 md:grid-cols-2">
								<div className="flex flex-col gap-4 rounded-lg bg-darkgray p-10 shadow">
									<h3 className="text-2xl font-bold">
										Minimal understanding of members
									</h3>
									<p>
										No directory with more member details
										than discord usernames. Zero bridge
										between on and off chain data.
									</p>
								</div>
								<div className="flex flex-col gap-4 rounded-lg bg-darkgray p-10 shadow">
									<h3 className="text-2xl font-bold">
										Minimal understanding of members
									</h3>
									<p>
										No directory with more member details
										than discord usernames. Zero bridge
										between on and off chain data.
									</p>
								</div>
								<div className="flex flex-col gap-4 rounded-lg bg-darkgray p-10 shadow">
									<h3 className="text-2xl font-bold">
										Minimal understanding of members
									</h3>
									<p>
										No directory with more member details
										than discord usernames. Zero bridge
										between on and off chain data.
									</p>
								</div>
								<div className="flex flex-col gap-4 rounded-lg bg-darkgray p-10 shadow">
									<h3 className="text-2xl font-bold">
										Minimal understanding of members
									</h3>
									<p>
										No directory with more member details
										than discord usernames. Zero bridge
										between on and off chain data.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="flex flex-col items-center justify-center gap-8 bg-darkgray py-32">
					<div className="container mx-auto">
						<div className="flex flex-col gap-6 md:w-2/3">
							<h2 className="text-3xl lg:text-7xl">
								Whether you&apos;re an NFT community, DAO, or a
								Web2 dinosaur - we&apos;ve got you covered.
							</h2>
							<p className="text-2xl">
								Commune is the all-in-one web3 Community
								Relationship Management platform enabling you to
								understand, engage, grow, manage, and operate
								your web3 community.
							</p>
						</div>
					</div>

					<div className="grid w-10/12 grid-cols-3 gap-8">
						<div className="sticky top-1/4 col-span-2 flex h-max justify-center">
							<div className="h-1/4 w-8/12">
								<img
									src="https://via.placeholder.com/1080x720?text=Image"
									alt="hero"
									className="h-full w-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="col-span-1 my-32 flex flex-col gap-64">
							<div className="flex flex-col gap-4">
								<div>icon</div>
								<h3 className="text-2xl font-bold">
									Create a Referral Program
								</h3>
								<p>
									Create unique referral links for your
									members and affiliates to create the web3
									give/get for incentivizing on or off chain
									actions.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<div>icon</div>
								<h3 className="text-2xl font-bold">
									Create a Referral Program
								</h3>
								<p>
									Create unique referral links for your
									members and affiliates to create the web3
									give/get for incentivizing on or off chain
									actions.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<div>icon</div>
								<h3 className="text-2xl font-bold">
									Create a Referral Program
								</h3>
								<p>
									Create unique referral links for your
									members and affiliates to create the web3
									give/get for incentivizing on or off chain
									actions.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<div>icon</div>
								<h3 className="text-2xl font-bold">
									Create a Referral Program
								</h3>
								<p>
									Create unique referral links for your
									members and affiliates to create the web3
									give/get for incentivizing on or off chain
									actions.
								</p>
							</div>
							<div className="flex flex-col gap-4">
								<div>icon</div>
								<h3 className="text-2xl font-bold">
									Create a Referral Program
								</h3>
								<p>
									Create unique referral links for your
									members and affiliates to create the web3
									give/get for incentivizing on or off chain
									actions.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-lightgray py-32">
					<div className="container mx-auto flex flex-col items-center justify-center gap-4">
						<div className="flex w-11/12 flex-col gap-8 pb-16 text-center">
							<h2 className="text-3xl font-bold lg:text-7xl">
								Easily create rewards
							</h2>
							<p className="text-2xl">
								Without ever leaving Discord.
							</p>
						</div>
						<div className="w-11/12">
							<img
								src="https://via.placeholder.com/1080x720?text=Image"
								alt="hero"
								className="h-full w-full object-cover object-center"
							/>
						</div>
					</div>
				</section>

				<section className="bg-lightgray py-32">
					<div className="container mx-auto flex flex-col items-center justify-center gap-20">
						<div className="flex w-11/12 flex-col gap-6">
							<h2 className="text-3xl font-bold lg:text-7xl">
								Our users love us
							</h2>
							<p className="text-2xl">
								Without ever leaving Discord.
							</p>
						</div>

						<div className="py-8">- sliding grid here -</div>
					</div>
				</section>

				<section className="bg-lightgray py-32 pb-64">
					<div className="container mx-auto flex flex-col items-center justify-center gap-8">
						<div className="flex w-11/12 flex-col gap-6 text-center">
							<h2 className="text-3xl font-bold lg:text-7xl">
								So, what are you waiting for?
							</h2>
							<p className="text-xl">
								Sign up for our closed-beta.
							</p>
						</div>
						<Input />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
