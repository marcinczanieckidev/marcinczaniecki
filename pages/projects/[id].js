import Link from "next/link";
import Head from "next/head";
import Footer from "@/organisms/Footer/Footer";

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Front End Developer Marcin Czaniecki</title>
        <meta name="description" content="Strona front end Developera" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article>
          <header>
            <h1>{data.name}</h1>
            <Link href="/">back</Link>
          </header>
          <iframe src={data.page} width="768" height="700" />
        </article>
      </main>
      <Footer>Marcin Czaniecki</Footer>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch("http://159.89.177.40/cards");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const res = await fetch(`http://159.89.177.40/cards/${context.params.id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default Home;
