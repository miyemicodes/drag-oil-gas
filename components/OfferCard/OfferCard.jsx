import Image from "next/image";

export default function OfferCard(props) {
	return (
		<>
			<div className="flex flex-col items-start justify-start gap-2 px-4 py-8 ">
				<div>
					<Image
						src={props.image}
						className="w-[60px] h-[60px] object-cover"
					/>
				</div>
				<div className="flex flex-col items-start gap-2">
					<h2 className="font-semibold">{props.title}</h2>
					<span className=" bg-blue-500 w-[15%] h-1 divide-x-4 rounded-full"></span>
					<p> {props.description} </p>
				</div>
			</div>
		</>
	);
}
