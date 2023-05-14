import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen grid place-content-center place-item-center prose-xl text-white font-[karla]">
      <h1>Loguesser</h1>
      <br />

      <Link
        href="/quiz"
        className="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring-2 ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent text-center"
      >
        Start
      </Link>
    </div>
  );
}
