import React from "react";
import "./Teams.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Leagues = (props) => {
  const history = useHistory();
  const teamButtonCLick = (id) => {
    history.push(`/team/${id}`);
  };
  const { idTeam, strSport, strTeamBadge, strTeam } = props.team;
  return (
    <div className="teams col-lg-4">
      <div className="team">
        <img src={strTeamBadge} alt="" />
        <h4>{strTeam}</h4>
        <p>Sport Type: {strSport}</p>
        <button onClick={() => teamButtonCLick(idTeam)}>
          Explore <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Leagues;
