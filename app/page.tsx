import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";

export default function Home() {
	return (
		<main className="w-full h-full">
			<Banner />
			<AboutUs />
			<Projects/>
		</main>
	);
}
