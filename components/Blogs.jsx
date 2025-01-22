import BlogCard from "./BlogCard/BlogCard";
import { BlogAll } from "./Blog";

export default function Blogs() {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-5 p-2 w-full md:p-10 m-4 md:m-10 ">
				<div className="flex flex-col items-start justify-between gap-6">
					<h2 className="font-bold text-3xl">Our blog</h2>
					<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>

					<ul className="w-full divide-y-2 py-2 flex flex-col items-start list-disc">
						<li className="py-2">Chemicals & Retrieving</li>
						<li className="py-2">International Trade</li>
						<li className="py-2">Petroleum Engineering </li>
						<li className="py-2">Projects & Acheivements</li>
						<li className="py-2">Explore & Produce</li>
						<li className="py-2">Transform & Develop</li>
					</ul>

					<button className="bg-blue-500 text-white rounded-full text-sm px-6 py-3 font-semibold mt-8">
						VIEW ALL BLOGS
					</button>
				</div>

				<div className=" grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-6 w-full ">
					{BlogAll.map((item) => (
						<BlogCard
							key={item.id}
							{...item}
						/>
					))}
				</div>
			</div>
		</>
	);
}
