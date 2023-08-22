import React from "react";

const CommentBox = ({ comments ,deletebox,editbox}) => {

    return (
        <div className="cmtbox">
            {comments[comments.length - 1]}
            <span><button className="deletebutton" onClick={deletebox}>Delete</button></span>
            <span><button className="editbutton" onClick={(i) => editbox(i)}>Edit</button></span>
        </div>
    )


}

export default CommentBox;