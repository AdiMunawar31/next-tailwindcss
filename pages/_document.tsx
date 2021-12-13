import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Urbanist&display=swap" rel="stylesheet" />
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
