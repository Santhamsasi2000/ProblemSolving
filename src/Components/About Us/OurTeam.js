import React from "react";
import "../../Styles/OurTeam.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { OurTeamData } from "../../Data/OurTeamData";

const OurTeam = () => {
  return (
    <section>
      <div className="page-title">OUR TEAM</div>
        <div className="p-5 our-team row justify-content-center gap-5">
          {
            OurTeamData.map(({id,name,designation})=>(
              <div className="card col-6 p-0 border-0">
                <img className="card-img-top" src="/Images/AboutUs/Team/No-Image1.jpg" alt="No-Image" />
                <div className="card-body">
                  <p className="card-title fw-bold text-uppercase fs-5 text-center">{name}</p>
                  <p className="card-subtitle fw-semibold text-uppercase text-center">{designation}</p>
                </div>
            </div>
            ))
          }
        </div>
    </section>
   
  );
};

export default OurTeam;
