import React, {useState} from "react";
import Image from "next/image";
import "../src/styles/Login.module.css"
import {auth} from "../firebase";
import {useDispatch} from "react-redux";
import {login} from "../src/features/userSlice";

function Login() {

  const[fName,setFN] = useState("");
  const[lName,setLN] = useState("");
  const[email,setEmail] = useState("");
  const[pw,setPW] = useState("");
  const[pwp,setPWP] = useState("");
  const[dob,setDOB] = useState("");
  const dispatch = useDispatch();

  const LoginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,pw)
        .then(userAuth => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          }))
        }).catch(error => alert(error));
  };
  const Register = () => {
    if (!fName ){
      return alert("Please enter Name")
    }
    if (pw != pwp ){
      return alert("Passwords do not match")
    }

    auth.createUserWithEmailAndPassword(email, pw)
        .then((userAuth) => {
          userAuth.user.updateProfile({
            displayName: fName + " " + lName,


          }).then(() => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: fName + " " + lName
            }) )
          })
    }).catch((error) => alert(error))
  };

  return <div className="login">

    <Image src="/tabooLogo.png"
           width={400}
           height={100}
           layout="fixed" />
    <form className="grid">
      <input value={fName} onChange={(e) => setFN((e.target.value))} placeholder="First Name" type="text"/>
      <input value={lName} onChange={(e) => setLN((e.target.value))} placeholder="Last Name" type="text"/>
      <input value={email} onChange={(e) =>setEmail((e.target.value))} placeholder="Email" type="email"/>
      <input value={pw} onChange={(e) => setPW((e.target.value))} placeholder="Password" type="password" />
      <input value={pwp} onChange={(e) => setPWP((e.target.value))} placeholder="Verify Password" type="password" />
      <input value={dob} onChange={(e) => setDOB((e.target.value))}placeholder="Birth Day" type="date"/>
      <button type="Submit" onClick={LoginToApp}>LogIn</button>
    </form>
    <p>
      Not a member? {" "}
      <span onClick={Register}>Register Now</span>
      <text > welcome {fName} {lName} </text>
    </p>
  </div>;
}

export default Login;
