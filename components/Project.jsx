import Image from "next/image";

export default function projectMission() {
	return (
		<>
			<div>
				<div className="flex flex-col items-start justify-start gap-4">
					<h2 className="font-bold text-3xl">
						Our projects <span className="text-blue-500">& missions </span>
					</h2>
					<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>
					<div>
						<div>
							<Image />
						</div>
						<div>
							<span className="text-blue-500">3560</span>
							<span className="font-semibold">COMPLETED PROJECTS</span>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-2 border border-b-2 border-blue-500"></div>
			</div>
		</>
	);
}
