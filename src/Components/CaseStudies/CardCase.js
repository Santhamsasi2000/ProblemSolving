import { NavLink } from "react-router-dom";

const CaseStudyCard = ({ id, image, title, link }) => {
  return (
    <article className="card common-bg casestudy-card">
      <img
        src={image || "/Images/placeholder.jpg"}
        alt={title || "No Image Available"}
        className="casestudy-img"
      />
      <p className="subtitle text-capitalize p-3 mb-0">{title}</p>
      <NavLink to={link} className="p-2 btn-casestudy">
        Read the Case Study
      </NavLink>
    </article>
  );
};

export default CaseStudyCard;

