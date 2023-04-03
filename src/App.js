import logo from './logo.svg';
import './App.css';
import { Helmet } from "react-helmet";
import Header from './components/Header';
import BannerSection from './pages/BannerSection';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>
      <Helmet>
        <title>Biotec</title>
        <meta
          name="description"

        />
        <meta
          name="keywords"

        />

      </Helmet>
      <Header />
      <div>
        <BannerSection />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
