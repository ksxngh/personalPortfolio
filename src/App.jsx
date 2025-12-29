export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <img src="/logo.png" alt="Karanveer Singh" className="h-10 w-auto" />

          <ul className="flex gap-8 text-sm font-medium">
            <li><a href="#education" className="hover:text-gray-500">Education</a></li>
            <li><a href="#projects" className="hover:text-gray-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-40">
        <h1 className="max-w-3xl text-5xl font-extrabold leading-tight">
          Hi, I’m Karanveer.<br />
          I build software systems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Computer Science student at Simon Fraser University focused on
          building real-world software and clean engineering systems.
        </p>

        <div className="mt-10 flex gap-4">
          <a href="#projects" className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
            View Projects
          </a>
          <a href="#contact" className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100">
            Contact Me
          </a>
        </div>
      </section>

      {/* EDUCATION */}
<section id="education" className="mx-auto max-w-6xl px-6 pb-32">
  <h2 className="text-center text-4xl font-bold">
    Education & Certifications
  </h2>

  <div className="mt-14 overflow-hidden rounded-2xl border border-gray-200 shadow-sm md:flex">

    {/* LEFT LOGO PANEL */}
    <div className="flex items-center justify-center bg-gray-900 p-10 md:w-1/3">
      <img
        src="/sfulogo.png"
        alt="Simon Fraser University"
        className="h-44 w-44 object-contain"
/>

    </div>

    {/* RIGHT CONTENT */}
    <div className="p-8 md:w-2/3">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <h3 className="text-2xl font-semibold">
            Bachelor of Science in Computing Science
          </h3>
          <p className="mt-1 text-gray-600">
            Simon Fraser University
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-4 py-1 text-sm">
          2024 – Present
        </span>
      </div>

      <div className="mt-6">
        <p className="font-medium">Relevant Courses</p>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Data Structure and Algorithm</li>
          <li>Software Engineering</li>
          <li>OOP</li>
        </ul>
      </div>
    </div>

  </div>
</section>


      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-6xl px-6 pb-32">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">

          <div className="rounded-xl border border-gray-200 p-6 transition hover:shadow-md">
            <h3 className="text-lg font-semibold">Myopia Progression Model</h3>
            <p className="mt-2 text-sm text-gray-600">
              Data-driven model analyzing environmental and genetic
              factors influencing myopia progression.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded bg-gray-100 px-2 py-1">Python</span>
              <span className="rounded bg-gray-100 px-2 py-1">Pandas</span>
              <span className="rounded bg-gray-100 px-2 py-1">ML</span>
            </div>
            <a
              href="https://github.com/Myopia-model/Myopia-progression-model"
              target="_blank"
              className="mt-4 inline-block text-sm font-medium underline"
            >
              View on GitHub
            </a>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 transition hover:shadow-md">
            <h3 className="text-lg font-semibold">Haunted Hotel Game</h3>
            <p className="mt-2 text-sm text-gray-600">
              Java-based 2D game built with object-oriented design,
              collision handling, and enemy AI.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded bg-gray-100 px-2 py-1">Java</span>
              <span className="rounded bg-gray-100 px-2 py-1">OOP</span>
              <span className="rounded bg-gray-100 px-2 py-1">Game Dev</span>
            </div>
            <a
              href="https://github.com/ksxngh/Haunted-Hotel"
              target="_blank"
              className="mt-4 inline-block text-sm font-medium underline"
            >
              View on GitHub
            </a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-40">
        <h2 className="text-3xl font-bold">Contact</h2>

        <form
            action="https://formspree.io/f/xvzpvbnp"
            method="POST"
            className="mt-8 max-w-xl space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="5"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            ></textarea>

            <button
              type="submit"
              className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>

      </section>

    </div>
  );
}
