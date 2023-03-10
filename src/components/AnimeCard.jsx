import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate } from "react-router-dom";

function AnimeCard(props) {

  const navigate = useNavigate();

  function genreLoader(){
    let genres = (props.genres).map((item)=>{
      return(item.name + ', ');
    })
    return genres;
  }

  function clickHandler(){
    if(props.switch_command === "anime"){
      navigate(`/anime/${props.mal_id}`);
    }
    else{
      navigate(`/manga/${props.mal_id}`);
    }
  }
  
  return (
    <div className="anime--card" onClick={()=>{
      clickHandler();
    }}>
        <div className="anime--card--img" style={{backgroundImage:`url(${props.image})`}}>
        </div>
        <h3>{props.title} </h3>
        <p>{props.season} -- {props.year}</p>
        <hr style={{width: "100%"}}/>
        <div className="anime--card--info">
          <div>Type - {props.type} </div>
          <div>Genre - {genreLoader()}</div>
        </div>
    </div>
  );
}

export default AnimeCard;
