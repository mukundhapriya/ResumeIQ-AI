
import Navbar from "../components/layout/Navbar";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          🚀 AI Powered Resume Platform
        </span>

        <h2 className="mt-8 max-w-4xl text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
          Build ATS-Friendly Resumes with AI
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Create professional resumes, analyze ATS compatibility, improve resume
          quality, generate project descriptions, summaries, and cover letters —
          all powered by AI.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-lg border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-700 hover:bg-slate-100">
            Analyze Resume
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;