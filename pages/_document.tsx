import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Adi Munawar</title>
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
