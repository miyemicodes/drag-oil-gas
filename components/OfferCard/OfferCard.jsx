import Image from "next/image";

export default function OfferCard(props) {
	return (
		<>
			<div className="flex flex-col items-center justify-start gap-2 px-4 py-8 rounded-md border-b-4 border-blue-500">
				<div>
					<Image
						src={props.image}
						className="w-[60px] h-[60px] object-cover"
					/>
				</div>
				<div>
					<h2>{props.title}</h2>
					<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>
					<p> {props.description} </p>
				</div>
			</div>
		</>
	);
}
