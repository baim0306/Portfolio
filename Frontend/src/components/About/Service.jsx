export default function Service() {
  return (
    <div
      className="service mt-10 flex flex-wrap gap-4 justify-evenly"
      id="service"
    >
      <h3 className="text-lg font-semibold font-google-sans text-green-400 text-shadow-md mb-2 bg-slate-500 px-4 rounded-lg w-full mb-6">
        Saya melayani :
      </h3>
      <div className="relative w-[40%] lg:w-[30%] xl:w-[25%] rounded-xl bg-white p-4 mb-6">
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="material-symbols-outlined text-slate-700 absolute -top-8"
        >
          computer
        </span>
        <p className="text-slate-700 text-lg xl:text-xl font-semibold font-google-sans">
          Frontend Web Developer
        </p>
      </div>
      <div className="relative w-[40%] lg:w-[30%] xl:w-[25%] rounded-xl bg-white p-4 mb-6">
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="material-symbols-outlined text-slate-700 absolute -top-8"
        >
          brush
        </span>
        <p className="text-slate-700 text-lg xl:text-xl font-semibold font-google-sans">
          UI/UX Designer
        </p>
      </div>
      <div className="relative w-[40%] lg:w-[30%] xl:w-[25%] rounded-xl bg-white p-4 mb-6">
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="material-symbols-outlined text-slate-700 absolute -top-8"
        >
          shield
        </span>
        <p className="text-slate-700 text-lg xl:text-xl font-semibold font-google-sans">
          Cybersecurity
        </p>
      </div>
      <div className="relative w-[40%] lg:w-[30%] xl:w-[25%] rounded-xl bg-white p-4 mb-6">
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="material-symbols-outlined text-slate-700 absolute -top-8"
        >
          accessibility
        </span>
        <p className="text-slate-700 text-lg xl:text-xl font-semibold font-google-sans">
          Web Accessibility
        </p>
      </div>
      <div className="relative w-[40%] lg:w-[30%] xl:w-[25%] rounded-xl bg-white p-4 mb-6">
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="material-symbols-outlined text-slate-700 absolute -top-8"
        >
          settings
        </span>
        <p className="text-slate-700 text-lg xl:text-xl font-semibold font-google-sans">
          Communication and Explanation
        </p>
      </div>
      <div className="relative w-[40%] lg:w-[30%] xl:w-[25%] rounded-xl bg-white p-4 mb-6">
        <span
          style={{ fontSize: 50, fontWeight: "bold" }}
          className="material-symbols-outlined text-slate-700 absolute -top-8"
        >
          upgrade
        </span>
        <p className="text-slate-700 text-lg xl:text-xl font-semibold font-google-sans">
          Legacy Modernization
        </p>
      </div>
    </div>
  );
}
