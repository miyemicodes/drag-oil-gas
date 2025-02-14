import Image from "next/image";
import ProjectsAll from "./Project";
import ProjectCard from "./ProjectCard/ProjectCard";
import Pic1 from "../public/assets/pic1.png";

export default function Projects() {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[1fr_2fr] items-center gap-5 p-2 w-full md:p-10 m-4 md:m-10 ">
				<div className="flex flex-col items-start justify-start gap-4">
					<h2 className="font-bold text-3xl">
						Our projects <span className="text-blue-500">& missions </span>
					</h2>
					<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>
					<div className="flex flex-col gap-3">
						<div>
							<Image src={Pic1} />
						</div>
						<div>
							<span className="text-blue-500 font-semibold">3560</span>
							<span className="font-semibold">COMPLETED PROJECTS</span>
						</div>
					</div>
				</div>

				<div className=" grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-6 w-full ">
					{ProjectsAll.map((item) => (
						<ProjectCard
							key={item.id}
							{...item}
						/>
					))}
				</div>
			</div>
		</>
	);
}
