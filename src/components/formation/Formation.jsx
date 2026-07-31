import FormationItem from "./FormationItem";

const formationData = [
  {
    id: 1,
    period: "2024 – 2026",
    title: "Master II — Modélisation et Ingénierie Informatique",
    place: "EMIT Fianarantsoa",
  },
  {
    id: 2,
    period: "Mars 2026",
    title: "Formation UX/UI Design",
    place: "Orange Digital Center Madagascar",
  },
  {
    id: 3,
    period: "2021 – 2024",
    title: "Licence I – II — Automatisme et Informatique, Génie Logiciel",
    place: "Université de Vakinankaratra (anciennement IES-AV)",
  },
  {
    id: 4,
    period: "2023",
    title: "Arduino Project Programming",
    place: "TME Education",
  },
  {
    id: 5,
    period: "2018 – 2020",
    title: "Baccalauréat, série D",
    place: "Lycée privé Saint Joseph Antsirabe",
  },
];

const languageData = [
  { id: 1, name: "Malagasy", level: 100 },
  { id: 2, name: "Français", level: 50 },
  { id: 3, name: "Anglais", level: 30 },
];

const Formation = () => {
  return (
    <div
      className="content grid lg:grid-cols-2 gap-10 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-25"
      id="formation"
    >
      <div>
        <p className="section-title max-lg:text-center mb-8">
          Formation
        </p>
        <div className="flex flex-col gap-4">
          {formationData.map((item) => (
            <FormationItem item={item} key={item.id} />
          ))}
        </div>
      </div>

      <div className="lg:pt-16">
        <p className="section-title max-lg:text-center mb-8">Langues</p>
        <div className="flex flex-col gap-6">
          {languageData.map((lang) => (
            <div key={lang.id}>
              <div className="flex justify-between mb-2 text-[14px] sm:text-[16px] font-medium text-gray-700">
                <span>{lang.name}</span>
                <span>{lang.level}%</span>
              </div>
              <div className="w-full h-2.5 bg-[#EDD8FF80] rounded-full overflow-hidden">
                <div
                  className="h-full bg-picto-primary rounded-full"
                  style={{ width: `${lang.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formation;
