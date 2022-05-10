import Head from "next/head";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Login from "../components/Login";
import React from "react";
import Home from "../components/Home";

function Index() {
  const user = useSelector(selectUser);


  return (
    <div>
      <Head>
        <title>Taboo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!user ?
          <Login />
          :
          <Home />
      }
    </div>
  );
}
export default Index;
