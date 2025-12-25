export default function Nav({ scrollTo, home, about, project }) {
  return (
    <div className="nav w-full flex flex-wrap lg:flex-col gap-4 p-4 relative z-10">
      <h3 className="inline w-full text-lg xl:text-xl text-slate-300 text-shadow-md text-shadow-slate-800 font-bold font-google-sans">
        Navigation
      </h3>
      <ul className="text-sm lg:text-base xl:text-lg">
        <li
          key="home"
          onClick={() => scrollTo(home)}
          className=" text-slate-800 font-google-sans cursor-pointer hover:text-green-500 transition duration-300 ease-in-out"
        >
          Home
        </li>
        <li
          key="about"
          onClick={() => scrollTo(about)}
          className=" text-slate-800 font-google-sans cursor-pointer hover:text-green-500 transition duration-300 ease-in-out"
        >
          About
        </li>
        <li
          key="project"
          onClick={() => scrollTo(project)}
          className=" text-slate-800 font-google-sans cursor-pointer hover:text-green-500 transition duration-300 ease-in-out"
        >
          Project
        </li>
      </ul>
    </div>
  );
}
