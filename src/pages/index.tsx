import { Bears } from "@/components/Bears";
import { Pokemon } from "@/components/Pokemon";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Bears />
        <Pokemon />
      </main>
    </div>
  );
};

export default Home;
