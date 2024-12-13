import Image from "next/image";
import gasFlare from "@/public/assets/one-blue-oil-platform.svg";

export default function Banner() {
	return (
		<>
			<div className="banner w-full h-[100%]">
				<div className="bannerContact flex flex-row items-center justify-evenly py-8">
					<div className="flex flex-row items-center justify-center gap-2">
						<Image
							src={gasFlare}
							alt="Logo Image"
							className="w-[30px] h-[30px] object-cover rounded-full"
						/>
						<div className="flex flex-col items-start justify-center gap-0">
							<h1 className="text-lg font-bold text-blue-900 w-[22px] leading-[1.00]">
								OILDROP GLOBAL
							</h1>
							<span className="text-[8px]">Purifying Oil Services</span>
						</div>
					</div>

					<div className="hidden md:flex flex-col items-start justify-center gap-1 text-xs">
						<span>Locate us at 27/22</span>
						<span className="font-semibold">LOS ANGELOS,NC - 4502</span>
					</div>

					<div className="hidden md:flex flex-col items-start justify-center gap-1 text-xs">
						<span>Have a question call Now</span>
						<span className="font-semibold">1(800) 300 2234</span>
					</div>

					<button className="px-6 py-3 text-xs font-bold text-blue-800 bg-slate-50 rounded-2xl">
						REQUEST A CALL FOR FREE
					</button>
				</div>

				<div className="bannerDiv w-[40%] h-[500px] flex flex-col items-start justify-center gap-4 ml-20">
					<p className="text-xs font-semibold ">OUR PROJECT RELEVANCE</p>
					<h1 className="text-5xl font-semibold">
						Discover our most successful projects
					</h1>
					<p className=" text-sm">
						The industry gathering worldwide demand for energy while preparing
						for the future
					</p>
				</div>

				<ul className="bannerNav flex flex-row items-center justify-evenly p-2 ">
					<li>MAIN PAGE</li>
					<li>PAGES</li>
					<li>SERVICES</li>
					<li>FEATURES</li>
					<li>OUR BLOGS</li>
					<li>CONTACTS</li>
					<button>GET A QUOTE</button>
				</ul>
			</div>
		</>
	);
}
