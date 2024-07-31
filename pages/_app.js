import "styles/base.css";
import config from "@config/config.json";
import Header from "@layouts/partials/Header";
import Footer from "@partials/Footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
