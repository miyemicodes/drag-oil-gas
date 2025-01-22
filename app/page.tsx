import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import Projects from "@/components/Projects";
import Offers from "@/components/Offers";
import Blogs from "@/components/Blogs";
import Feedback from "@/components/Feedback";

export default function Home() {
	return (
		<main className="w-full h-full">
			<Banner />
			<AboutUs />
			<Projects />
			<Offers />
			<Blogs />
			<Feedback/>
		</main>
	);
}
