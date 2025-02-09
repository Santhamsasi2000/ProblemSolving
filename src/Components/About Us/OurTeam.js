import React from "react";
import "../../Styles/OurTeam.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { OurTeamData } from "../../Data/OurTeamData";

const OurTeam = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <p className="page-title mb-1">Our Team</p>
       <p className="page-title-underline"></p>
        <div className="p-5 our-team row justify-content-center gap-5">
          {
            OurTeamData.map(({id,name,designation})=>(
              <div className="important-component card col-6 p-0 border-0">
                <img className="card-img-top" src="/Images/AboutUs/Team/No-Image2.jpg" alt="No-Image" />
                <div className="card-body">
                  <p className="subtitle text-center mb-2">{name}</p>
                  <p className="card-subtitle text-center">{designation}</p>
                </div>
            </div>
            ))
          }
        </div>
    </section>
   
  );
};

export default OurTeam;
