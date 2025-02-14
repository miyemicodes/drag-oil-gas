import Image from "next/image";

export default function TestimonialCard(props) {
	return (
		<div className="flex flex-col items-center justify-center gap-5">
			<div className="flex flex-row items-center justify-center gap-4">
				<div className="w-[60px] h-[60px] rounded-full">
					<Image
						className="w-[60px] h-[60px] rounded-full object-cover center"
						src={props.image}
						alt="picture"
					/>
				</div>
				<div className="flex flex-col">
					<p className="text-red-500 text-sm font-semibold">{props.name}</p>
					<span className="text-blue-500 text-xs font-semibold">
						{props.position}
					</span>
				</div>
			</div>

			<div>
				<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>

				<p className="text-xs text-red-500">{props.description}</p>
			</div>
		</div>
	);
}
