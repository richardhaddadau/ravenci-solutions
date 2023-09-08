import AnimatedText from "@/components/AnimatedText";

export default function Home() {
  return (
    <main className="relative flex h-screen min-h-fit w-full flex-col items-center bg-secondary">
      <div className="relative flex flex-col flex-grow w-windowed max-w-full">
        <nav className="absolute py-4 px-4 flex items-center justify-center md:justify-start w-full">
          <img className="h-8 md:h-10" src="/logo-light.svg" />
        </nav>
        <section className="flex flex-col items-center justify-center flex-grow w-full">
          <h1 className="text-3xl md:text-5xl text-primary font-sans font-bold text-center">
            <AnimatedText />
            with RAVENCI.
          </h1>
          <h3 className="pt-12 text-lg md:text-xl tracking-widest text-primary font-sans font-light">
            Launching Soon.
          </h3>
        </section>
        <footer className="absolute p-2 bottom-0 flex items-center justify-center w-full">
          <p className="text-xs font-sans font-light tracking-wider uppercase text-stone-400 opacity-75">
            &copy; 2023. RAVENCI Group
          </p>
        </footer>
      </div>
    </main>
  );
}
