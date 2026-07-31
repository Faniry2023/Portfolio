import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 flex flex-col">
      {data?.image ? (
        <img
          className="w-full h-56 object-cover"
          src={data?.image}
          alt={`${data?.title} image`}
        />
      ) : (
        <div className="w-full h-56 bg-[#F6EBFE] flex items-center justify-center text-picto-primary text-3xl font-semibold">
          {data?.title?.charAt(0)}
        </div>
      )}
      <div className="p-4 xs:p-8 flex flex-col flex-1">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        {data?.tech && (
          <p className="text-picto-primary text-[11px] xxs:text-[13px] font-medium mt-3">
            {data.tech}
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          {data?.links?.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm hover:border-picto-primary hover:text-picto-primary bg-white text-xs xs:text-[14px] font-semibold hover:gap-3 transition-all duration-300"
            >
              {link.label}
              <span className="ms-1">
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
