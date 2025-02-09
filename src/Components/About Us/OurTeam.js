import React from "react";
import "../../Styles/OurTeam.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { OurTeamData } from "../../Data/OurTeamData";

const OurTeam = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <p className="page-title mb-4">Our Team</p>
        <div className="our-team row justify-content-center gy-4">
          {
            OurTeamData.map(({id,name,designation})=>(
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="important-component card p-0 border-0 h-100" >
                <img className="card-img-top" src="/Images/AboutUs/Team/No-Image2.jpg" alt="No-Image" />
                <div className="card-body">
                  <p className="subtitle text-center mb-2">{name}</p>
                  <p className="card-subtitle text-center">{designation}</p>
                </div>
            </div>
            </div>
            ))
          }
        </div>
    </section>
   
  );
};

export default OurTeam;
