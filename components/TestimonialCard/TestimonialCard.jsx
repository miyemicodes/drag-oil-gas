import Image from "next/image";

export default function TestimonialCard(props) {
	return (
		<div className="flex flex-col items-start justify-start gap-3">
			<div className="flex flex-row items-center justify-center gap-2">
				<div className="w-[40px] h-[40px] rounded-full">
					<Image
						className="w-[40px] h-[40px] rounded-full object-cover center"
						src={props.image}
						alt="picture"
					/>
				</div>
				<div className="flex flex-col">
					<p className="text-black text-sm font-semibold">{props.name}</p>
					<span className="text-blue-500 text-xs font-semibold">
						{props.position}
					</span>
				</div>
			</div>
			<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>

			<div>
				<p className="text-xs text-black">{props.description}</p>
			</div>
		</div>
	);
}
