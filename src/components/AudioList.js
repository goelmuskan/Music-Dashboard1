import React from "react";
import Card from "./Card";



const AudioList = (props) => {
  const fileList = props.data;

  return (
    <>
      <div className="audiolist">
        {
        fileList?.audioList?.length > 0
          ? Array.from(fileList.audioList).map((file,index) => (
              <>
                <Card key={index} id={index+1} name={file.name} type={file.type} date={String(file.lastModifiedDate)} />
              </>
            ))
          : <>
              <div className="alert alert-info">No files are Selected</div>  
          </>
          }
      </div>
    </>
  );
};

export default AudioList;
