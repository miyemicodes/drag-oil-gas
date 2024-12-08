import Image from "next/image";
import teamImage2 from "@/public/assets/teamImage2.jpg";

export default function Testimonial() {
	return (
		<>
			<div className="bg-gray-950 text-white flex flex-col md:flex-row items-center justify-center gap-6">
				<div>
					<h2 className="font-semibold text-2xl text-white tracking-[0.15px] leading-[102%]">
						Testimonials
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3">
					<div className="flex flex-col items-center justify-center gap-5">
						<div className="flex flex-row items-center justify-center gap-4">
							<div className="w-[60px] h-[60px] rounded-full">
								<Image
									className="w-[60px] h-[60px] rounded-full object-cover center"
									src={teamImage2}
									alt="picture"
								/>
							</div>
							<div className="flex flex-col">
								<p className="text-white text-sm font-semibold">
									Sheldon Oreosdi
								</p>
								<span className="text-blue-500 text-xs font-semibold">
									Head of Operations
								</span>
							</div>
						</div>

						<div>
							<div className="bg-blue-500 text-sm w-[10px] "></div>

							<p className="text-xs">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
								natus explicabo odit, sed.
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center gap-5">
						<div className="flex flex-row items-center justify-center gap-4">
							<div className="w-[60px] h-[60px] rounded-full">
								<Image
									className="w-[60px] h-[60px] rounded-full object-cover center"
									src={teamImage2}
									alt="picture"
								/>
							</div>
							<div className="flex flex-col">
								<p className="text-white text-sm font-semibold">
									Sheldon Oreosdi
								</p>
								<span className="text-blue-500 text-xs font-semibold">
									Head of Operations
								</span>
							</div>
						</div>

						<div>
							<div className="bg-blue-500 text-sm w-[10px] "></div>

							<p className="text-xs">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
								natus explicabo odit, sed.
							</p>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center gap-5">
						<div className="flex flex-row items-center justify-center gap-4">
							<div className="w-[60px] h-[60px] rounded-full">
								<Image
									className="w-[60px] h-[60px] rounded-full object-cover center"
									src={teamImage2}
									alt="picture"
								/>
							</div>
							<div className="flex flex-col">
								<p className="text-white text-sm font-semibold">
									Sheldon Oreosdi
								</p>
								<span className="text-blue-500 text-xs font-semibold">
									Head of Operations
								</span>
							</div>
						</div>

						<div>
							<div className="bg-blue-500 text-sm w-[10px] "></div>

							<p className="text-xs">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
								natus explicabo odit, sed.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
