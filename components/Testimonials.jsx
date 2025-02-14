import TestimonialAll from "./Testi";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

export default function Testimonial() {
	return (
		<>
			<div className="grid md:grid-cols-[1fr] lg:grid-cols-[1fr_2fr] text-blue-300 items-center justify-center gap-6">
				<div>
					<h2 className="font-semibold text-2xl  tracking-[0.15px] leading-[102%]">
						Testimonials
					</h2>
					<span className="bg-blue-700 w-[10%] h-1 divide-x-4 rounded-full"></span>
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
