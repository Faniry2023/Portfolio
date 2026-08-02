import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Développement Web",
    description:
      "Je conçois et développe des applications web complètes (front & back) avec Angular, ASP.NET Core, CodeIgniter et Spring Boot, connectées à des bases de données SQL Server ou MySQL.",
  },
  {
    id: 2,
    title: "Développement Mobile & Desktop",
    description:
      "Je développe aussi des applications desktop (WPF) et j'apprends le développement mobile (Kotlin), pour proposer des solutions logicielles complètes, du poste de travail au smartphone.",
  },
  {
    id: 3,
    title: "Conception & Bases de données",
    description:
      "Je modélise les besoins avec UML et Figma, puis je conçois des bases de données fiables (SQL Server, MySQL) pour garantir des applications robustes et bien structurées.",
  },
  {
    id: 3,
    title: "Déploiement & DevOps",
    description:
      "Je déploie moi-même mes projets (ASP.NET Core, Angular, Spring Boot) via GitHub et Docker, sur des hébergeurs comme Railway, Render, MonsterASP.NET et SmarterASP.NET, avec mise en production de bases MySQL et SQL Server.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Ce que je fais</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Je suis développeur logiciel : je conçois et je code des
            applications web, desktop et mobile, en prenant en charge aussi
            bien la conception que le développement jusqu'à la mise en
            production.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Actuellement en Master 2, je cherche un stage de fin d'études où
            je pourrai mettre à profit ces compétences et continuer à
            apprendre.
          </p>
        </div>
        <a
          href="mailto:tinafaniry0802@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Contact
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
