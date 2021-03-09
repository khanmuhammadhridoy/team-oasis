import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TeamDetails.css"
import {
  faFlag,
  faFutbol,
  faMapMarkerAlt,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetails = () => {
  const { id } = useParams();
  const [team, setTeam] = useState();
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
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
  } = team;
  // console.log(team);
  // const {strTeam,intFormedYear}= team;
  return (
    <div>
      <div className="teamHeader">
        <img src={strTeamBadge} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>{strTeam}</h4>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}
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
          <div className="col-md-6"></div>
        </div>
        <div className="description">
          <p>{strDescriptionEN}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
