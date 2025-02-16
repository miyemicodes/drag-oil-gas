import TestimonialAll from "./Testi";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

export default function Testimonial() {
	return (
		<>
			<div className="grid md:grid-cols-[1fr] lg:grid-cols-[1fr_2fr] items-center justify-center gap-6 p-2 w-full md:p-10 m-4 md:m-10">
				<div className="flex flex-col items-start justify-start gap-3">
					<h2 className="font-semibold text-2xl text-blue-500  tracking-[0.15px] leading-[102%]">
						Testimonials
					</h2>
					<span className="bg-blue-700 w-[10%] h-1 divide-x-4 rounded-full"></span>
					<div className="flex flex-row gap-1">
						<span className="bg-blue-700 w-[15%] h-1 divide-x-4 rounded-full"></span>
						<span className="bg-blue-700 w-[15%] h-1 divide-x-4 rounded-full"></span>
						<span className="bg-blue-700 w-[15%] h-1 divide-x-4 rounded-full"></span>
					</div>
				</div>

				<div className="grid grid-cols-[auto_auto_auto] md:grid-cols-3">
					{TestimonialAll.map((item) => (
						<TestimonialCard
							key={item.id}
							{...item}
						/>
					))}
				</div>
			</div>
		</>
	);
}
