import Head from "next/head";
import Content from "../Components/Content";

export default function Home() {
  return (
    <>
      <Head>
        <title>رديف 01/06/2024 يوحد الله</title>
        <meta name="description" content="رديف 01 / 06 / 2024" />
        <link rel="icon" href="/nsr.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content />
      </main>
    </>
  );
}
