import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";
import db from "../firebase";
function SidebarOption({ Icon, title, id, addChannelOptions }) {
  /* useHistory is one of the best hook which will solve our headache for changing the url by props.history.push()  
  
  it simply add the title to the url and the make the url combination with the string or the content which we had add to the history.push(`/room/anything`)*/
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelName = prompt("please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOptions ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
