import Nav from "./Nav";
import FooterInfo from "./FooterInfo";

export default function Footer({ homeRef, aboutRef, projectRef }) {
  const scrollTo = (ref) => {
    if (!ref?.current) return;
    const top = ref.current.offsetTop;
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <footer className="relative lg:flex w-full bg-slate-300 pb-20">
      <span
        style={{
          backgroundImage: "url('f1.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-[25%] md:w-[15%] lg:w-[12%] xl:w-[10%] 2xl:w-[5%] aspect-[9/16] absolute bottom-4 right-0"
      ></span>
      <Nav
        scrollTo={scrollTo}
        home={homeRef}
        about={aboutRef}
        project={projectRef}
      />
      <FooterInfo />
      <p className="text-center text-sm text-slate-800 font-semibold font-google-sans p-2 bg-white absolute bottom-0 w-full z-10">
        &copy; {new Date().getFullYear()} Baim. All Right Reserved.
      </p>
    </footer>
  );
}
