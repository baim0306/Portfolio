export default function ListProject({ projectData, setActiveProject }) {
  return (
    <div className="listProject w-full flex flex-col bg-white rounded-xl p-2">
      <h3 className="inline-block text-white text-2xl text-shadow-lg text-shadow-green-700 font-bold font-google-sans bg-green-500 p-2 rounded-xl shadow-md shadow-green-700">
        Daftar Project
      </h3>
      <ul className="flex flex-col gap-2 mt-4">
        {projectData.map((project) => (
          <li
            key={project._id}
            onClick={() => setActiveProject(project)}
            className="bg-white p-2 rounded-lg flex gap-4 cursor-pointer hover:bg-slate-300 transition duration-300 ease-in-out  shadow-md shadow-green-700"
          >
            <div
              style={{
                backgroundImage: `url('${project.image_url}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="min-w-[20%] aspect-[4/2]"
            ></div>
            <div>
              <p className="text-slate-700 text-lg md:text-xl font-semibold font-google-sans">
                {project.title}
              </p>
              <ul className="mt-2">
                {project.technologies.map((t) => (
                  <li
                    key={t}
                    className="inline-block bg-green-500 text-white text-xs md:text-sm font-google-sans font-semibold rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
