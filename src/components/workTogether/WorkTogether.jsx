import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Vous cherchez un stagiaire motivé pour votre équipe ?
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          Étudiant en Master 2, je suis à la recherche d'un stage de fin
          d'études en développement logiciel. Discutons de votre projet et de
          la façon dont je peux y contribuer.
        </p>
        <a
          href="mailto:tinafaniry0802@gmail.com"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Contactez-moi
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
