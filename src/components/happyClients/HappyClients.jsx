import Marquee from "react-fast-marquee";

const techStack = [
  "C#",
  "PHP",
  "Java",
  "TypeScript",
  "Kotlin",
  "Angular",
  "ASP.NET Core",
  "WPF",
  "CodeIgniter",
  "Spring Boot",
  "SQL Server",
  "MySQL",
  "UML",
  "Figma",
  "GitHub",
  "Docker (notions)",
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Technologies & Outils</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          Les langages, frameworks et outils que j'utilise au quotidien pour
          concevoir et développer mes projets.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={60} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {techStack?.map((tech, index) => (
            <span
              className="ms-5 sm:ms-8 md:ms-12 px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-200 text-gray-500 text-xs sm:text-base font-medium text-nowrap"
              key={index}
            >
              {tech}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
