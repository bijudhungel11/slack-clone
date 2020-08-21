import React, { useState } from "react";
import "./ChatInput.css";

import { useStateValue } from "../context/StateProvider";
import db from "../firebase";
import firebase from "firebase";
function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        user: user.displayName,
        userImage: user.photoURL,
      });

      setInput("");
    }
  };

  /*  console.log(
    "the time should in these format but ",
    firebase.firestore.FieldValue.serverTimestamp()
  ); */
  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName?.toLowerCase()}`}
          value={input}
          onChange={handleChange}
        />

        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
