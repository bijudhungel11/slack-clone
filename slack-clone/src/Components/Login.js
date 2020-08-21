import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../context/StateProvider";
import { actionTypes } from "../context/reducer";
/* Good level of the authentication because if we  use the authenctication with firebase then they will goes to their api and then it will be moved to the google and google will distrubute to the actual provider >>> At the end these is handle by the google and the security level is observe by the google. */
function Login() {
  const [state, dispatch] = useStateValue();
  console.log(state);
  /* we are adding the google authentication init  */
  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to Developer Gang</h1>
        <p>Developer.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
