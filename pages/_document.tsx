import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */

            #__next {
              height: 100%;
              display: flex;
            }
            body {
              margin: 0px;
            }
          `}</style>
        </body>
      </html>
    );
  }
}