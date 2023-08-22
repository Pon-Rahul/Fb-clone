import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CommentSection = ({ data , deletecomment, editcomment}) => {

    const { index } = useParams();

    const navigate = useNavigate()

    return (
        <div>
            <div className="rectbox">
                <button className="backbtn" onClick={() => navigate(-1)}>Back</button>
                {data[index]?.comment.map((o,i) =>
                    <div className="cmtsection">{o}
                        <span><button className="deletebutton" onClick={() => deletecomment(index,i)}>Delete</button></span>
                        <span><button className="editbutton" onClick={() => editcomment(index,i)}>Edit</button></span>
                    </div>

                )}
            </div>
        </div>

    )
}

export default CommentSection;