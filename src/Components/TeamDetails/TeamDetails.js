import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TeamDetails.css";
import Male from "../../images/male.png";
import Female from "../../images/female.png";
import {
  faFlag,
  faFutbol,
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
// all import end

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams[0]));
  }, [id]);
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
  const gender = "female";
  let dynamicGender;
  if (strGender === undefined) {
    dynamicGender = "";
  } else {
    dynamicGender = strGender;
  }
  return (
    <div className="main">
      {/* teamDetails header */}
      <div
        className="teamHeader d-flex"
        style={{ backgroundImage: `url(${strStadiumThumb})` }}
      >
        <div className="overlay"></div>
        <div className="logo ">
          <img src={strTeamBadge} alt="" />
        </div>
      </div>
      {/* teamDeatils */}
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

            {gender.toLowerCase() === dynamicGender.toLowerCase() ? (
              <p>
                <FontAwesomeIcon icon={faVenus} /> Gender: {strGender}
              </p>
            ) : (
              <p>
                <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
              </p>
            )}
          </div>
          <div className="col-md-6">
            {gender.toLowerCase() === dynamicGender.toLowerCase() ? (
              <img src={Female} alt="" />
            ) : (
              <img src={Male} alt="" />
            )}
          </div>
        </div>
        <div className="description">
          <p>{strDescriptionEN}</p>
          {/* icons with dynamic link */}
          <div className="icon">
            <Link
              to={{
                pathname: `https://${strFacebook}`,
              }}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://${strInstagram}`}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a target="_blank" rel="noreferrer" href={`https://${strTwitter}`}>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a target="_blank" rel="noreferrer" href={`https://${strYoutube}`}>
              <FontAwesomeIcon icon={faYoutubeSquare} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
