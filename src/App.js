import './App.scss';
import { FirstPage, SecondPage, ThirdPage } from './components/pages';
import { GoHome, Header } from './components';
import { useEffect, useState } from 'react';
import { scrollToTop } from './helpers/scrollToTop';

function App() {

  const [visibleGoHome, setVisibleGoHome] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) { setVisibleGoHome(true) }
      else { setVisibleGoHome(false) }
    })
  }, [])



  return (
    <div className="App">
      <Header />
      {visibleGoHome && <GoHome scrollToTop={scrollToTop} />}
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
