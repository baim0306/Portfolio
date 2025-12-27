import { useRef, useState } from "react";
import InfoProject from "./infoProject";
import ListProject from "./ListProject";

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
        <InfoProject activeProject={activeProject} />
        <ListProject
          projectData={projectData}
          setActiveProject={setActiveProject}
        />
      </div>
    </div>
  );
}
