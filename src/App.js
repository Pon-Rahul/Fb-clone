import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import newimg from './Post/img/wolverine-2560x1600.jpg'
import './App.css';
import Login from './Login/Login';
import CreateNewAcc from './CreateNewAcc/CreateNewAcc';
import Questions from './Questions/Questions';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import ForgetPasswordQues from './ForgetPassword/ForgetPasswordQues';
import ResetPassword from './ForgetPassword/ResetPassword';
import CommentSection from './Post/CommentSection';
import PostFeed from './Post/PostFeed';
import Post from './Post/Post';
import UploadPicture from './UploadPicture';
import axios from 'axios';

const App = () => {

  const url = "https://64b17958062767bc482642bb.mockapi.io/newaccount"
  const [postdata, setPostData] = useState(Post);
  const [cmt, setCmt] = useState([])
  const [hardCodeComment, setHardCodeComment] = useState("")
  const [account, setAccount] = useState({});
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const saveAccountData = async (enteredAccountData) => {
    const a = { ...account, ...enteredAccountData }
    setAccount(a)
    if (a.questionone) {
      await axios.post(url, a)
    }

  }


  const likeHandler = (i) => {
    const postDataCopy = [...postdata];
    if (postDataCopy[i].dislike === false) {
      postDataCopy[i].numoflike++
      postDataCopy[i].dislike = true;
      setPostData(postDataCopy)

    }
    else if (postDataCopy[i].dislike === true) {
      postDataCopy[i].numoflike--
      postDataCopy[i].dislike = false;
      setPostData(postDataCopy)
    }
  }

  const commentHandler = (event, i) => {
    const copyCommentArray = [...cmt]
    copyCommentArray[i] = event.target.value
    setCmt(copyCommentArray)
  }

  const clickcmtHandler = (i) => {
    const clickcommentCopy = [...postdata]
    if (cmt[i] === "" || cmt[i] === undefined) {
      return;
    }
    clickcommentCopy[i].comment.push(cmt[i])
    setPostData(clickcommentCopy)
    cmt[i] = ""
    setCmt(cmt)
  }

  const deleteHandler = (index, i) => {
    const deleteCommentCopy = [...postdata]
    deleteCommentCopy[index]?.comment.splice(i, 1)
    setPostData(deleteCommentCopy)
  }

  const editHandler = (index, i) => {
    const editCommentCopy = [...postdata]
    cmt[index] = editCommentCopy[index].comment[i];
    setCmt(cmt)
    editCommentCopy[index]?.comment.splice(i, 1)
    setPostData(editCommentCopy)
    navigate(-1)
  }

  const deleteboxHandler = (i) => {
    const deleteboxCopy = [...postdata]
    deleteboxCopy[i]?.comment.pop()
    setPostData(deleteboxCopy)
  }

  const editboxHandler = (i) => {
    const editBoxCopy = [...postdata]
    cmt[i] = editBoxCopy[i]?.comment[editBoxCopy[i].comment.length - 1]
    setCmt(cmt)
    editBoxCopy[i]?.comment.pop()
    setPostData(editBoxCopy)
  }


  const handleFileChange = (event) => {
    const fileobj = event.target.files && event.target.files[0];
    setFile(URL.createObjectURL(event.target.files[0]))

    if (!fileobj) {
      return;
    }
    event.target.value = null;
  }

  const hardCodeCommentHandler = (event) => {
    setHardCodeComment(event.target.value)
  }

  const post = {
    profilepicture: newimg,
    profilename: "Ravi",
    discription: hardCodeComment,
    postpicture: file,
    likes: "likes",
    numoflike: 0,
    dislike: false,
    comment: []
  }

  const postHandler = () => {
    const pushdata = [...postdata]
    pushdata.push(post)
    setPostData(pushdata)
    navigate(-1)
  }

  return (
    <Routes>
      <Route path='' element={<Login />}></Route>
      <Route path='create-new-account' element={<CreateNewAcc onAccountData={saveAccountData} />}></Route>
      <Route path='create-new-account/questions' element={<Questions onAccountData={saveAccountData} />}></Route>
      <Route path='forget-password' element={<ForgetPassword />}></Route>
      <Route path='forget-password-questions/:index' element={<ForgetPasswordQues />}></Route>
      <Route path='reset-password/:index' element={<ResetPassword obj={account.password} />}></Route>
      <Route path='feed' element={<PostFeed
        data={postdata}
        cmt={cmt}
        like={likeHandler}
        eventcomment={commentHandler}
        clickcmt={clickcmtHandler}
        deletebox={deleteboxHandler}
        editbox={editboxHandler}
      />}></Route>
      <Route path='commentsection/:index' element={<CommentSection
        data={postdata}
        deletecomment={deleteHandler}
        editcomment={editHandler}
      />}></Route>
      <Route path='uploadpicture' element={<UploadPicture
        handleFileChange={handleFileChange}
        file={file}
        commenthandle={hardCodeCommentHandler}
        commentvalue={hardCodeComment}
        postclick={postHandler}
      />}></Route>
    </Routes>
  );
}

export default App;
