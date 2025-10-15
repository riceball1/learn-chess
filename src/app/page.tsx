import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen grid place-items-center p-8">
			<div className="max-w-xl w-full text-center space-y-6">
				<h1 className="text-3xl font-bold">Learn Chess</h1>
				<p className="text-base text-gray-600 dark:text-gray-300">
					Build chess fundamentals with short lessons and interactive boards.
				</p>
				<div className="flex items-center justify-center gap-3">
					<Link className="px-4 py-2 rounded-md border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" href="/lessons">Start</Link>
					<Link className="px-4 py-2 rounded-md border hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" href="#about">About</Link>
				</div>
			</div>
		</main>
	);
}
