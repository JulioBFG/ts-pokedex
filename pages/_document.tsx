import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            /* Other global styles such as 'Html, body' etc... */
            html {
              @import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');
            }
            #__next {
              height: 100%;
              display: flex;
              margin: 0px;
            }
            body {
              margin: 0px;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}