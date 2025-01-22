import Image from "next/image";

export default function BlogCard(props) {
	return (
		<div className="flex flex-col items-center justify-start gap-2 border-b-4 bg-slate-200 border-blue-500">
			<div className="w-full">
				<Image
					src={props.image}
					className="w-[100%] h-[100%] object-cover "
				/>
			</div>
			<div className="px-4 py-8">
				<span className="text-blue-400 text-sm"> {props.subtitle} </span>
				<h2 className="text-blue-800 text-xl font-bold">{props.title} </h2>
				<p> {props.text} </p>
			</div>
		</div>
	);
}
