import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="MERN STACK Developer looking for a job" />
          <meta name="keywords" content="FullStack Web Developer, Freelancer, MERN Develover" />
        </Head>
        <body className="bg-fixed font-urbanist bg-gradient-to-br from-primary to-gray-300 dark:from-dark dark:to-dark-50 dark:text-gray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
