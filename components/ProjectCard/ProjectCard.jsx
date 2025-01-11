import Image from "next/image";

export default function projectCard() {
	return (
		<>
			<div>
				<Image />
			</div>
			<h2 className="text-blue-500 text-lg">Our commitment </h2>
			<ul className="divide-x-2 ">
				<li>Ambition to become the responsible energy major</li>
				<li>Projecting People</li>
				<li> Responding to Environmnet Challenges</li>
				<li> Helping to foster swift development </li>
			</ul>
		</>
	);
}
