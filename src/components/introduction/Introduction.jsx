import person from "../../assets/images/person.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Stages effectués",
    description: "4",
  },
  {
    id: 2,
    title: "Projets réalisés",
    description: "7",
  },
  {
    id: 3,
    title: "Langages maîtrisés",
    description: "5",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Bonjour, je suis
            <span className="text-nowrap shrink-0 inline-block w-full">
              Faniry Rafanomezantsoa
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Étudiant en <span className="bg-highlight">Master 2 Informatique</span>{" "}
            (Modélisation et Ingénierie Informatique) et{" "}
            <span className="bg-highlight">Développeur Logiciel</span> passionné
            par le développement d'applications web, mobiles et desktop. Je
            souhaite contribuer au développement de solutions innovantes et
            participer à la transformation digitale dans des secteurs
            essentiels.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:tinafaniry0802@gmail.com"
            >
              Dites Bonjour !
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="Faniry Rafanomezantsoa"
        />
      </div>
    </div>
  );
};

export default Introduction;
