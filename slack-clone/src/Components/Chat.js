import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import "./Chat.css";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat(props) {
  const { roomId } = useParams(); // to find the url names which is just after the room/:roomId means room/Biju then roomId will be the Biju
  /*  console.log(roomId); */
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    console.log(roomId);
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")

      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log(roomDetails?.name);
  console.log("room messages ", roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header--left">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__header--right">
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>

      <div className="chat__messages">
        {roomMessages.map((data, i) => (
          <Message
            key={i}
            user={data.user}
            message={data.message}
            timestamp={data.timestamp}
            userImage={data.userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
