import Image from "next/image";

export default function projectCard(props) {
	return (
		<div className="flex flex-col items-center justify-start gap-2 px-4 py-8 rounded-md border-b-4 bg-blue-200 border-blue-500">
			<div>
				<Image
					src={props.image}
					className="w-[60px] h-[60px] object-cover rounded-full"
				/>
			</div>
			<h2 className="text-blue-500 text-xl font-bold">{props.title} </h2>
			<ul className="w-full divide-y-2 py-2 flex flex-col items-center">
				<li className="py-3">{props.list1}</li>
				<li className="py-3">{props.list2}</li>
				<li className="py-3">{props.list3}</li>
				<li className="py-3"> {props.list4} </li>
			</ul>
		</div>
	);
}
