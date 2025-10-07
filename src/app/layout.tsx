import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Learn Chess",
	description: "A minimal app to learn chess fundamentals.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				{children}
			</body>
		</html>
	);
}
