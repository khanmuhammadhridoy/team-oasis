import React, { useEffect, useState } from "react";
import Teams from "../Teams/Teams";
import "./Home.css";

const Home = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, []);
  // console.log(teams);
  return (
    <div className="main">
      <div className="header d-flex">
        <h2 className="title">Team Oasis</h2>
      </div>
      <div className="container">
        <div className="row">
          {teams.map((team) => (
            <Teams key={team.idTeam} team={team}></Teams>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
