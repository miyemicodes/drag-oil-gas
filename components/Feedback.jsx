import Link from "next/link";

export default function Feedback() {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-center p-2 w-full md:p-20 m-4 md:m-10 gap-8">
				<div className="flex flex-col items-start justify-start gap-3">
					<h2 className="text-blue-500 font-semibold text-3xl">Feedback</h2>
					<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>
				</div>

				<div className="">
					<p>
						We're always interested in new projects, big or small. Please don't
						hesitate to get in touch with us regarding your project.
					</p>
					<p>
						We're always interested in new projects,
						<a className=" underline text-blue-500 font-semibold"> 1 (000) 300 2374 </a>
						or big or small. Please don't hesitate to get
						<a className=" underline text-blue-500 font-semibold"> get a quote </a>
					</p>
				</div>
			</div>
		</>
	);
}
