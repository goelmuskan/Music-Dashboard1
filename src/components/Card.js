import React from "react";

const Card = ({id,name,type,date}) => {
  return (
    <>
      <div className="audio-card">
        <div className="layer-1">{id}</div>
        <div className="layer-2">
          <h3>
            <span>filename: </span>{name}
          </h3>
          <h3>
            <span>file type: </span>{type}
          </h3>
          <h3>
            <span>last modified: </span>{date}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Card;
