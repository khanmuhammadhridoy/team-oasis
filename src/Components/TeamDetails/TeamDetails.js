import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TeamDetails.css";
import Male from "../../images/male.png" 
import Female from "../../images/female.png" 
import {
  faFlag,
  faFutbol,
  faMapMarkerAlt,
  faMars,
  faSearchLocation,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [id]);
  console.log(team);

  const {
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
    strStadiumThumb,
    strTeamBadge,
    strFacebook,
    strInstagram,
    strTwitter,
    strYoutube,
  } = team;
  // const toggle = ()=>{
  //   if (strGender.toLowerCase() === male.toLowerCase()){
  //     male()
  //   }
  // }
  // console.log(team);
  // const {strTeam,intFormedYear}= team;
  // const teamData = Object.keys(team)
  // console.log(teamData)
  return (
    <div className="main">
      <div
        className="teamHeader d-flex"
        style={{ backgroundImage: `url(${strStadiumThumb})` }}
      >
        <div className="overlay"></div>
        <div className="logo ">
          <img src={strTeamBadge} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row teamDetails">
          <div className="col-md-6">
            <h3>{strTeam}</h3>
            <p>
              <FontAwesomeIcon icon={faSearchLocation} /> Founded on year{" "}
              {intFormedYear}
            </p>
            <p>
              <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
            </p>
            <p>
              <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
            </p>
            <p>
              <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
            </p>
            <p>
              <FontAwesomeIcon icon={faVenus} /> Gender: {strGender}
            </p>
          </div>
          <div className="col-md-6">
            <img src={Male} alt="" />
          </div>
        </div>
        {/* <button onClick={()=>toggle()}>Toggle</button> */}
        <div className="description">
          <p>{strDescriptionEN}</p>
          <div className="icon">
            <Link to={`/${strFacebook}`}>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <a target="_blank" href={strFacebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={strInstagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={strTwitter}>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a href={strYoutube}>
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
