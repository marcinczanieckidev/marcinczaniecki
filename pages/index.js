import Head from "next/head";
import Link from "next/link";
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
          {data.map((card) => {
            return (
              <article key={card.name + card.id}>
                <h3>{card.name}</h3>
                <img
                  src={`http://159.89.177.40${card.image.url}`}
                  alt="alt-text"
                  width="300"
                />
                <Link href={`/projects/${card.id}`}>details</Link>
              </article>
            );
          })}
        </article>
      </main>
      <Footer>Marcin Czaniecki</Footer>
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`http://159.89.177.40/cards`);
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
