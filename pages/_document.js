import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import styledNormalize from "styled-normalize";

const globalStyles = `
    ${styledNormalize}

    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    body {
      margin: 0 auto;
      background-color: #ff9999;
      font-family: 'Avenir Next', 'Arial', sans-serif;
    }
`;

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(
      <App {...props} />
    ));
    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags
    };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Bulletin Board Next.js</title>
          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
