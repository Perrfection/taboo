import React, { useEffect, useState } from "react";
import Image from "next/image";
import {auth, db} from "../../firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";

function Login() {
  const [fName, setFN] = useState("");
  const [lName, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPW] = useState("");
  const [pwp, setPWP] = useState("");
  const [dob, setDOB] = useState("");
  const dispatch = useDispatch();

  const LoginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pw)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const Register = () => {
    if (!fName) {
      return alert("Please enter your name");
    }
    if (pw !== pwp) {
      return alert("Passwords do not match");
    }
    if (!dob){
      return alert("Please enter your date of birth");
    }

    auth
      .createUserWithEmailAndPassword(email, pw)
      .then((userAuth) => {
        db.collection('users').doc(userAuth.user.uid).set({
          firstName: fName,
          lastName: lName,
          dateOfBirth: dob,
        }).then(()=>
            {LoginToApp}
        )
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="form1">
      <div className="form2">
        <Image
          src="/tabooLogo.png"
          alt="Taboo"
          width={300}
          height={75}
          layout="fixed"
        />
        <form className="form3">
          <input
            value={fName}
            onChange={(e) => setFN(e.target.value)}
            placeholder="First Name"
            type="text"
            className=" input "
          />
          <input
            value={lName}
            onChange={(e) => setLN(e.target.value)}
            placeholder="Last Name"
            type="text"
            className=" input "
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="input"
          />
          <input
            value={pw}
            onChange={(e) => setPW(e.target.value)}
            placeholder="Password"
            type="password"
            className=" input"
          />
          <input
            value={pwp}
            onChange={(e) => setPWP(e.target.value)}
            placeholder="Verify Password"
            type="password"
            className="input"
          />
          <div>
            <text className="pad">Date of Birth</text>
            <input
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              type="date"
              className=" input"
            />
          </div>
          <button className="b1" onClick={LoginToApp}>
            LogIn
          </button>
          <p>
            Not a member? <span onClick={Register}>Register Now</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
