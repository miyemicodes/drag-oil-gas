import OfferCard from "./OfferCard/OfferCard";
import OfferAll from "./Offer";

export default function Offers() {
	return (
		<div className="Offer grid grid-cols-1 md:grid-cols-[1fr] lg:grid-cols-[1fr_2fr] items-center gap-5 p-2 w-full md:p-10 m-4 md:m-10 ">
			<div className=" h-full flex flex-col items-start justify-between ">
				<div>
					<h2 className="font-bold text-3xl">
						What we <span className="text-blue-500"> can offer </span>
					</h2>
					<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>
				</div>
				<button className="bg-blue-500 rounded-full text-sm p-2 font-semibold">
					VIEW ALL SERVICES
				</button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-6">
				{OfferAll.map((items) => (
					<OfferCard
						key={items.id}
						{...items}
					/>
				))}
			</div>
		</div>
	);
}
