import { useRef, useState } from "react";

export default function Project({ portfolioData, projectRef }) {
  console.log(portfolioData);
  const projectData = (portfolioData?.portfolio_project_list).map(
    (project) => project.project_ref_id
  );

  console.log(`tipe project data adalah ${typeof projectData}`);
  const [activeProject, setActiveProject] = useState(projectData[0]);

  console.log(`aktif prject adalah ${activeProject}`);
  return (
    <div
      className="w-full relative bg-gradient-to-b from-slate-100 to-slate-500 flex flex-wrap p-4"
      ref={projectRef}
    >
      <span
        style={{
          backgroundImage: "url('f6.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-[30%] md:w-[20%] lg:w-[20%] xl:w-[15%] 2xl:w-[10%] aspect-[9/11] absolute -top-10 left-[50%] translate-x-[-50%]"
      ></span>
      <h2 className="min-w-full text-white text-4xl text-shadow-lg text-center text-shadow-green-700 font-bold font-google-sans z-10 mt-10">
        Project
      </h2>
      <div className="w-full flex flex-col lg:flex-row mt-24 md:mt-34 z-10 gap-4">
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
      </div>
    </div>
  );
}
