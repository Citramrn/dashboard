import React from "react";
import Head from "next/head";
import Homes from "./view/home/homes";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Homes />
    </React.Fragment>
  );
}

export default Home;
