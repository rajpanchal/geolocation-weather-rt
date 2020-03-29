import './SeasonDisplay.css'
import React from 'react'


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const text = season==='winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
  // const icon = season==='winter' ? 'snowflake' : 'sun';

  const {text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon`} />
    </div>
  );
};

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burrr, it's chilly",
    iconName: "snowflake"
  }
};

const getSeason =(lat,month) => {
  if(month>2 && month<9){
    if(lat>0){
      return 'summer'
    }
    else{
      return 'winter'
    }
  }
  else{
    if(lat>0){
      return 'winter'
    }
    else{
      return 'summer'
    }
  }
}



export default SeasonDisplay;
