import { NavLink } from "react-router-dom";

const CaseStudyCard = ({ id, image, title, link }) => {
  return (
    <article className="card important-component w-100 border-4 h-100">
      <img
        src={image || "/Images/placeholder.jpg"}
        alt={title || "No Image Available"}
        className="casestudy-img"
      />
      <h2 className="mt-4 fw-bold fs-4 mx-3">{title}</h2>
      <NavLink to={link} className="m-2 btn-casestudy">
        Read the Case Study
      </NavLink>
    </article>
  );
};

export default CaseStudyCard;

