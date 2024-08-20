import './App.scss';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/main/Navbar/Navbar';
import Footer from './Components/main/Footer/Footer';
import ThemeProvider from './Components/main/Theme/ThemeProvider'; 
import Loading from './Components/main/Loading/Loading';

import Aos from 'aos';
import "aos/dist/aos.css";

import { IntlProvider } from 'react-intl';
import { translate } from './translate/translate';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('./pages/pages/Home/Home'));
const MainLayout = lazy(() => import('./pages/pages/About/MainLayout'));
const Apply = lazy(() => import('./Components/pages/Apply/Apply'));


function App() {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    Aos.init({
      duration: 1250,
      once: true
    });
  }, []);

  return (
    <ThemeProvider>
      <IntlProvider locale={language} messages={translate[language]}>
        <Router>
          <Suspense fallback={<Loading />}>
            <div className="app">
              <Navbar />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<MainLayout />} /> 
                <Route path='/apply' element={<Apply />} /> 
        
              </Routes>
              <Footer />
            </div>
          </Suspense>
        </Router>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
