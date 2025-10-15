"use client";
import  Link from 'next/link'

export default function LessonsPage() {
	const categories = [
		{
			title: "Basics",
			description: "Learn the fundamentals of chess",
			lessons: [
				{ id: "pieces", title: "Chess Pieces", description: "Learn how each piece moves" },
				{ id: "board", title: "The Chess Board", description: "Understanding squares and coordinates" },
				{ id: "check", title: "Check and Checkmate", description: "Winning the game" },
				{ id: "stalemate", title: "Stalemate", description: "When the game ends in a draw" },
				{ id: "castling", title: "Castling", description: "Special king move for safety" },
				{ id: "en-passant", title: "En Passant", description: "Special pawn capture" },
			]
		},
		{
			title: "Opening Game",
			description: "Master the first moves",
			lessons: [
				{ id: "opening-principles", title: "Opening Principles", description: "Control center, develop pieces, castle" },
				{ id: "italian-game", title: "Italian Game", description: "Classic opening with rapid development" },
				{ id: "sicilian-defense", title: "Sicilian Defense", description: "Aggressive response to 1.e4" },
				{ id: "queens-gambit", title: "Queen's Gambit", description: "Strategic pawn sacrifice" },
				{ id: "kings-indian", title: "King's Indian Defense", description: "Flexible setup for black" },
				{ id: "french-defense", title: "French Defense", description: "Solid defensive opening" },
			]
		},
		{
			title: "Middle Game",
			description: "Navigate the complex middle phase",
			lessons: [
				{ id: "tactics", title: "Basic Tactics", description: "Forks, pins, skewers, and more" },
				{ id: "attacking", title: "Attacking the King", description: "How to launch successful attacks" },
				{ id: "defense", title: "Defensive Techniques", description: "Protecting your position" },
				{ id: "planning", title: "Strategic Planning", description: "Creating and executing plans" },
				{ id: "piece-activity", title: "Piece Activity", description: "Making your pieces work together" },
				{ id: "weaknesses", title: "Weaknesses", description: "Identifying and exploiting weaknesses" },
			]
		},
		{
			title: "End Game",
			description: "Finish the game strong",
			lessons: [
				{ id: "king-pawn", title: "King and Pawn Endings", description: "Basic pawn promotion techniques" },
				{ id: "rook-endings", title: "Rook Endings", description: "The most common endgame" },
				{ id: "queen-endings", title: "Queen Endings", description: "Mating with queen" },
				{ id: "minor-pieces", title: "Minor Piece Endings", description: "Bishop and knight endings" },
				{ id: "opposition", title: "Opposition", description: "Key concept in king endings" },
				{ id: "zugzwang", title: "Zugzwang", description: "When any move is a mistake" },
			]
		}
	];

	return (
		<main className="min-h-screen p-8">
			<div className="max-w-4xl mx-auto">
				<div className="mb-8">
					<h1 className="text-4xl font-bold mb-4">Chess Lessons</h1>
					<p className="text-lg text-gray-600 dark:text-gray-300">
						Master chess through structured lessons organized by game phase.
					</p>
				</div>

				<div className="space-y-12">
					{categories.map((category) => (
						<section key={category.title} className="space-y-6">
							<div className="border-b border-gray-200 dark:border-gray-700 pb-4">
								<h2 className="text-2xl font-semibold mb-2">{category.title}</h2>
								<p className="text-gray-600 dark:text-gray-300">{category.description}</p>
							</div>
							
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
								{category.lessons.map((lesson) => (
									<button
										key={lesson.id}
										className="p-4 text-left border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700"
										onClick={() => {
											window.location.href = `/lessons/${lesson.id}`;
										  }}
									>
										<h3 className="font-semibold text-lg mb-2">{lesson.title}</h3>
										<p className="text-sm text-gray-600 dark:text-gray-300">
											{lesson.description}
										</p>
									</button>
								))}
							</div>
						</section>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						href="/" 
						className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
					>
						← Back to Home
					</Link>
				</div>
			</div>
		</main>
	);
}
