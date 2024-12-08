import Image from "next/image";
import gasFlare from "@/public/assets/one-blue-oil-platform.svg";

export default function Banner() {
	return (
		<>
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
						<span className="text-[9px]">Purifying Oil Services</span>
					</div>
				</div>

				<div className="hidden md:flex flex-row items-center justify-center gap-2">
					{" "}
					Ball
				</div>
				<div className="hidden md:flex flex-row items-center justify-center gap-2">
					{" "}
					Bag
				</div>
				<button className="px-6 py-3 text-sm font-bold text-blue-800 bg-slate-50 rounded-2xl"> REQUEST A CALL FOR FREE</button>
			</div>

			<div className="bannerDiv"></div>

			<ul className="bannerNav">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<button></button>
			</ul>
		</>
	);
}
