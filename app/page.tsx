import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Offers from "@/components/Offers";

export default function Home() {
	return (
		<main className="w-full h-full">
			<Banner />
			<AboutUs />
			<Projects />
			<Offers />
		</main>
	);
}
