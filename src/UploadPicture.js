import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

 const UploadPicture = ({ handleFileChange , file , commenthandle , commentvalue , postclick , clickhandle}) =>{
   
   const inputRef = useRef(null);

   const navigate = useNavigate();
   

   const uploadHandler = () =>{
    inputRef.current.click()
   }


    return(
      <>
      <button className="postpicture" onClick={() => navigate(-1)}>Back</button>
    <div className="postbox" onKeyDown={(e) => clickhandle(e)}>
      <input type="text" placeholder = "Write a discription" className="description" value={commentvalue} onChange={commenthandle}></input>
       <button className="uploadbutton" onClick={uploadHandler}>Upload Picture</button>
       <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
      <img src= {file}  className="postpic"></img>
      <button className="postbtn" onClick={postclick}>Post</button>
    </div>
    </>
    )
 }


 export default UploadPicture