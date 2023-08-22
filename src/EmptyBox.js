import React from "react";

const EmptyBox = ({mail, click, empty}) => {
  if(empty(mail,click)){
    return (
      <div className="empty">Enter a valid input</div>
    )
  }
}

const EmptyName =({name , click , empty}) => {
  if(empty(name,click))
return(
  <div className="empty">Enter a valid input</div>
)
}

const Emptyuser =({user , click , empty}) => {
  if(empty(user,click))
return(
  <div className="empty">Enter a valid input</div>
)
}

const Emptyques = ({que , ans ,click}) =>{
  if(que(ans,click))
  return(
    <div className="emptyque">Enter a valid input</div>
  )
}
export {EmptyBox , EmptyName , Emptyuser ,Emptyques}