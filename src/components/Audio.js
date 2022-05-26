import React from "react";
import { useState,useEffect } from "react";
import AudioList from "./AudioList";
import { addFileToStore } from "../actions";
import { useDispatch, useSelector } from "react-redux";


const Audio = () => {



  const [audioFileList, setAudioFile] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  
  useEffect(() =>
  {
    const data=localStorage.getItem("audio_list");
    const parseData=JSON.parse(data);
    if(audioFileList?.length ==0 && parseData?.length > 0){
      dispatch(addFileToStore(parseData));
      setAudioFile(parseData);
      console.log("hello effect",parseData);
    }

    console.log("effect in use");
  },[]);

  const audioUpload = (e) => {
     
    const file = e.target.files; 
    const arr = []
    Array.from(file).map((item) => {
       
       arr.push({name:item.name,type:item.type,date:item.lastModifiedDate}) 

    })


    setAudioFile(prevState => {

       console.log("prev",prevState);
       return arr.concat(prevState) 

    } );
  
  
  };

  const addFile = () => {
    if (audioFileList.length > 0) {
      dispatch(addFileToStore(audioFileList));
    } else {
      alert("Please Select the files");
    }
  };

  return (
    <>
      <div className="audio">
        <input
          type="file"
          placeholder="choose File from "
          name="audioFile"
          id="audioFile"
          onChange={audioUpload}
          multiple
        />
        <button className="btn audio-btn" onClick={addFile}>
          {" "}
          Upload
        </button>
      </div>

      <AudioList data={user} />
    </>
  );
};

export default Audio;
