export default function AboutUs() {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] items-center p-2 w-full md:p-20 m-4 md:m-10 gap-8">
				<div className="flex flex-col items-start justify-start gap-4">
					<h2 className="font-bold text-3xl">About us</h2>
					<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>
					<button className="bg-blue-500 rounded-full text-sm p-2 font-semibold">
						MORE INFORMATION
					</button>
				</div>

				<div className="flex flex-col items-start justify-start gap-4">
					<p className="font-bold">
						We help intresting companies create and improve industry products
						and services through long lasting and mutually rewarding
						relationships.
					</p>
					<p>
						We the companies help analyze and create lasting solutions for your
						industries and improve industry products and services through long
						lasting and mutually rewarding relationships services through long
						lasting and mutually rewarding relationships.
					</p>
				</div>

				<div className="flex flex-col items-start justify-start gap-2">
					<h2 className="font-bold text-sm">Sheldon Moreno</h2>
					<span className="text-sm font-semibold">HEAD OF DEPARTMENT</span>
					<span className="bg-blue-500 w-[10%] h-1 divide-x-4 rounded-full"></span>
				</div>
			</div>
		</>
	);
}
