import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarOption from "./SidebarOption";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useStateValue } from "../context/StateProvider";
function Sidebar() {
  const [channels, setChannels] = useState([]);

  const [{ user }] = useStateValue();

  /* db.collection("rooms").onSnapshot((snapshot) => {
    console.log("value from the snapshots of the document", snapshot.docs);
  });
 */
  useEffect(() => {
    /*  here first we are going to our database which name is the rooms and whenver the data is changed then the snashot is clicked and store it in the short memory and the snapshot means the whole document of that collection and goes to whole small document as object and snapshot.data is the array . */
    db.collection("rooms").onSnapshot((snapshot) => {
      //console.log(db.collection("rooms").doc());
      /* here we are setting the return of the name and the id form the snapshot.data map method where the  snapshot.data means all the value or the small document which has the name and the id in it.*/
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id, //it gives the messy id which is attach to the document
          name: doc.data().name, // this will gives us the name of the document which is the collection name where the data() gives the whole data of the document and data().name will gives the value inside that specific name .name;
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Developer Gang</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <div className="sidebar__scroll">
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <SidebarOption Icon={InboxIcon} title="Mention & reactions" />
        <SidebarOption Icon={DraftsIcon} title="Saved items" />
        <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
        <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
        <SidebarOption Icon={AppsIcon} title="Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File browser" />
        <SidebarOption Icon={ExpandLessIcon} title="Show less" />
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        <hr />
        <SidebarOption Icon={AddIcon} title="Add Channels" addChannelOptions />
        {/* sidebar to db and list all the channels*/}
        {/* <SidebarOption.../> */}

        {console.log(channels)}
        {channels.map((channel, i) => (
          <SidebarOption title={channel.name} id={channel.id} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
