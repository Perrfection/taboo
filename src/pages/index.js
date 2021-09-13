import Head from "next/head";
import Jumbotron from "../../components/Jumbotron";
import HeaderM from "../../components/HeaderM";
import Feed from "../../components/Feed";
import {useSelector} from "react-redux"
import {selectUser} from "../features/userSlice";
import Login from "../../components/Login"
import React from "react";

function Home() {

    const user = useSelector(selectUser);

  return (
    <div>
      <Head>
        <title>Taboo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {! user ? (
        <Login/>
        ) : (
        <main>
            <HeaderM />
            <Jumbotron />
            <Feed />
        </main>

    )}
</div>

  );
}
export default Home;
