import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-xl">
      <p>Welcome! Click below to go to the Library.</p>
      <Link
        href="/library"
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Go to Library
      </Link>
    </div>
  );
}
