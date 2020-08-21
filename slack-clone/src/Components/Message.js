import React from "react";
import "./Message.css";
/* optional chaining in the javascript is the new feature which will check the try and catch instantly with in the sing line just for the example 
let we have the variable name person but if we try to get the property of it wether it has or not that property then our code will not frek out or we don't get error if we use the optional chaning 

normal 
person.name // may cause error if the person doesn't has the property name 

person?.name // doesn't cause error because it will use the try catch if the person?.name has the value then work if not then make that undefined but don't freak out the code

 */
function Message({ message, user, timestamp, userImage }) {
  /*  console.log(
    /* just we are taking the timestamp from the database and making it's new date and converted it to the toDate and to the string which will show the actual timestamp */
  /*  "value from the timestamp",
    new Date(timestamp.toDate()).toUTCString()
  ); */

  console.log(userImage);
  return (
    <div className="message">
      <img src={userImage} alt="userImage" />

      <div className="message__info">
        <h4>
          {user}
          <span className="message__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
