import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "styles/stitches.config";
import { PlanetInfo } from "components";
const Home: NextPage = () => {
    return <PlanetInfo activePlanet="Mercury" />;
};

export default Home;
