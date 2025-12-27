export default function InfoProject({ activeProject }) {
  return (
    <div className="infoProject w-full flex flex-col gap-4 bg-white rounded-xl p-2">
      <div
        key={activeProject._id}
        style={{
          backgroundImage: `url('${activeProject.image_url}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full aspect-[16/10]"
      ></div>
      <div className="w-full flex flex-col mt-4 gap-2">
        <h3 className="text-slate-700 text-lg md:text-xl font-semibold font-google-sans p-2 bg-slate-300">
          {activeProject.title}
        </h3>
        <p className="text-slate-500 text-xs md:text-sm font-google-san p-2">
          {activeProject.description}
        </p>
        <ul>
          {activeProject.technologies.map((t) => (
            <li
              key={t}
              className="inline-block bg-green-500 text-white text-xs md:text-sm font-google-sans font-semibold rounded-full px-2 py-1 mr-2 mb-2"
            >
              {t}
            </li>
          ))}
        </ul>
        <a
          href={`${activeProject.url}`}
          className="text-center text-white text-sm font-semibold font-google-sans bg-blue-500 hover:bg-blue-400 p-1 cursor-pointer rounded-lg transition duration-300 ease-in-out"
        >
          Kunjungi Website
        </a>
      </div>
    </div>
  );
}
