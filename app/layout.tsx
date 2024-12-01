import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Drags-oils",
	description: "Built by LDH",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
