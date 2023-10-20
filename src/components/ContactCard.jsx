import React from "react";
import user from "../images/download.png";
import users from "../images/a.png";

const CardContact = (props) => {
  const { id, name, email } = props.contact;

  return (
    <>
      <h1>Contact list</h1>
      <div className="item">
        <div className="avatar-container">
          <img className="ui large avatar image" src={users} alt="user" />

          <div className="header">{name}</div>
        </div>
        <div className="contend">
          <div>{email}</div>
        </div>
        <i
          className="trash alternate outline icon big"
          id="trash-icon"
          style={{
            color: "red",
            position: "relative",
            left: "350px",
            bottom: "40px",
          }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </>
  );
};

export default CardContact;
