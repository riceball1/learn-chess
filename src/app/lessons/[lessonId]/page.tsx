import Link from "next/link";


export default function Lesson() {
    return (
        <main className="min-h-screen grid place-items-center p-8">
            <h1>Lesson</h1>
            <Link href="/lessons"> Back to Lessons</Link>
        </main>
    )
}