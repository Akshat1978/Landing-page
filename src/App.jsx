import React, { useState, useEffect } from "react";
import styles from "./styles";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <HashLoader
            color="#be153c"
            loading={loading}
            size={150}
            css="max-w-lg mx-auto bg-black"
          />
        </div>
      ) : (
        <div>
          <div className="w-full overflow-hidden bg-primary">
            <div className={`${styles.paddingX} ${styles.flexCenter} relative`}>
              <div
                className={`w-full z-50 bg-primary/0 backdrop-blur-xl fixed top-0 sm:px-32 px-12`}
              >
                <Navbar />
              </div>
            </div>

            <div className={`${styles.flexStart} sm:mt-10 mt-20 bg-primary`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>

            <div
              className={`${styles.flexStart} ${styles.paddingX} bg-primary`}
            >
              <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
