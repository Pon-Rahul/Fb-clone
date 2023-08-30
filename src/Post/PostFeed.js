import React from "react";
import './PostFeed.css';
import CommentBox from "./CommentBox";
import { useNavigate } from "react-router-dom";



const PostFeed = ({ data, like, eventcomment, clickcmt, cmt , deletebox ,editbox , entercomment}) => {
   const navigate = useNavigate()



   return (
      <>
      <div>
         <button className="postpicture" onClick={() => navigate('/uploadpicture')}>Post Picture</button>
         <button type="button" className="signout" onClick={() => navigate('/')}>Signout</button>
      {data.map((o, i) =>
         <div key={i} className="rectbox">
            <div>
               <span><img src={o.profilepicture} alt="Dark Knight" className="picture" /></span>
               <span className="name">{o.profilename}</span>
            </div>
            <div className="about">{o.discription}</div>
            <div>
               <img src={o.postpicture} alt="spider" className="postpic" />
            </div>
            <span className="totallikes">{o.numoflike}</span>   <span >{o.likes}</span>
            <hr />
            <div>
               <span className="like" onClick={() => like(i)}>Like</span>
               <span className="comments" onClick={() => navigate(`/commentsection/${i}`)}>Comments</span>
               <span className="noofcomments">{data[i].comment.length}</span>
            </div>
            <hr />
            <div onKeyDown={(e) => entercomment(e,i)}>
               <input placeholder="Add a comment"  type="text" className="cmdbox" value={cmt[i]} onChange={(e)=>eventcomment(e,i)} />
               <span><button className="cmtbtn" onClick={() => clickcmt(i)}>Comment</button></span>
            </div>
            {data[i].comment.length > 0 && <CommentBox 
                                            comments={data[i].comment} 
                                            deletebox={() => deletebox(i)} 
                                            editbox = {() => editbox(i)}/>}
         </div>
      )}
      </div>
      </>
   )
}

export default PostFeed;
