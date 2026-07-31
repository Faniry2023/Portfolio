import Projects from "./Projects";
import san from "../../assets/images/projects/san-onn-orn.png";
import jerely from "../../assets/images/projects/jerely-digivita.png";
import jirama from "../../assets/images/projects/jirama-antsirabe.jpeg";
import commudesk from "../../assets/images/projects/commudesk-belazao.png";
import bookflix from "../../assets/images/projects/bookflix-logo.png";
import paysim from "../../assets/images/projects/paysim-logo.png";
import fav from "../../assets/images/projects/fav-logo.png";

const projectData = [
  {
    id: 1,
    image: bookflix,
    category: "PROJET PERSONNEL — 2026",
    title: "BookFlix — Bibliothèque en ligne",
    description:
      "Bibliothèque en ligne où les utilisateurs s'inscrivent et souscrivent à l'un des 4 niveaux d'abonnement. Les livres sont classés par niveaux, avec des droits d'accès à la lecture et au téléchargement selon l'abonnement. Paiement réel des abonnements intégré via PaySim.",
    tech: "Angular · ASP.NET Core (API) · SQL Server",
    links: [
      { label: "GitHub Front", url: "https://github.com/Faniry2023/BookFlix.git" },
      { label: "GitHub Back", url: "https://github.com/Faniry2023/BookFlix-api.git" },
      { label: "Démo", url: "https://youtu.be/uDf4KMWf_GQ" },
    ],
  },
  {
    id: 2,
    image: paysim,
    category: "PROJET PERSONNEL — 2025-2026",
    title: "PaySim — Plateforme de paiement en ligne",
    description:
      "Plateforme de paiement permettant d'effectuer des paiements en ligne via QR Code, avec suivi et gestion des transactions. Comprend un espace développeur pour créer des projets, générer des API et intégrer PaySim, ainsi qu'une application mobile pour utilisateurs et vendeurs.",
    tech: "Angular · ASP.NET Core (API) · Kotlin · SQL Server",
    links: [
      { label: "GitHub Front", url: "https://github.com/Faniry2023/paysim_v2_front.git" },
      { label: "GitHub Back", url: "https://github.com/Faniry2023/paysim_v2_api.git" },
      { label: "Démo", url: "https://youtu.be/UHIPbXc37t4" },
      { label: "Site en ligne", url: "https://paysim-yy8x.onrender.com/" },
    ],
  },
  {
    id: 3,
    image: fav,
    category: "PROJET DE FIN D'ÉTUDES (LICENCE III)",
    title: "FAV — Plateforme e-commerce",
    description:
      "Plateforme e-commerce multi-vendeurs, avec un logiciel dédié pour gérer produits et commandes, une répartition automatique des commandes entre vendeurs, la sélection du lieu de livraison sur une carte, et un système de paiement en simulation.",
    tech: "Développement web + logiciel desktop",
    links: [
      { label: "GitHub Site", url: "https://github.com/Faniry2023/FAV_Site.git" },
      { label: "GitHub Desktop", url: "https://github.com/Faniry2023/FAV-Logiciel.git" },
      { label: "Démo", url: "https://youtu.be/oS5Rf9uVmD4" },
    ],
  },
  {
    id: 4,
    image: san,
    category: "STAGE — ONN-ORN VAKINANKARATRA (2025-2026)",
    title: "SAN — Surveillance Alimentaire et Nutritionnelle",
    description:
      "Plateforme de centralisation et de visualisation des données de vulnérabilité et de situation des districts à Madagascar : carte interactive, différents niveaux de localisation, graphiques et intégration des données KoboToolbox. Projet réalisé seul, de la conception à la réalisation complète.",
    tech: "Angular · API Web ASP.NET Core · SQL Server",
    links: [],
  },
  {
    id: 5,
    image: jerely,
    category: "STAGE — DIGIVITA AGENCY (2025)",
    title: "Jerely — Créateur de plateformes en ligne",
    description:
      "Plateforme permettant aux clients de créer leur propre plateforme sans développeur : inscription, personnalisation du thème, des boutons et du logo. Chaque plateforme générée a ses propres utilisateurs et fonctionnalités, exportables si souhaité. Projet réalisé en équipe de deux ; responsable de la conception et du développement de la partie contrôleur.",
    tech: "PHP (CodeIgniter 4) · JavaScript (AJAX) · MySQL",
    links: [],
  },
  {
    id: 6,
    image: jirama,
    category: "STAGE — JIRAMA ANTSIRABE (OCT. 2024 - JANV. 2025)",
    title: "Plateforme documentaire interne — JIRAMA",
    description:
      "Plateforme interne permettant aux employés de consulter et partager des documents sans se déplacer, avec un chat privé et un espace de publications pour les annonces et réunions. Projet réalisé seul, de la conception à la réalisation complète.",
    tech: "Développement web interne",
    links: [],
  },
  {
    id: 7,
    image: commudesk,
    category: "STAGE — COMMUNE DE BELAZAO (2023)",
    title: "CommuDesk — Gestion de la population",
    description:
      "Application desktop dédiée à la gestion des données de la population de la commune de Belazao : ajout, consultation, modification et filtrage des habitants (sexe, âge...) pour faciliter la recherche et l'analyse. Projet réalisé seul.",
    tech: "WPF · SQL Server",
    links: [],
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Voici mes stages et projets personnels, réalisés seul ou en équipe,
            du web au desktop en passant par le mobile.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
