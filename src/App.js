import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";

// Context
import GlobalContext from "./Context/Context";

// Components
import ScrollToTopButton from "./Components/ScrollToTop"
import {ScrollToAnchor} from "./Functions/Utilities";
import { HelmetProvider} from "react-helmet-async";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga4";

// Home
const UmelleHome = lazy(() => import("./Pages/Umelle/Home/Startup"))
const UmelleSolutions = lazy(() => import("./Pages/Umelle/Solutions/Startup"))
const UmelleServices = lazy(() => import("./Pages/Umelle/Services/Startup"))
const UmelleCompany = lazy(() => import("./Pages/Umelle/Company/Startup"))
const Contact = lazy(() => import("./Pages/Umelle/Contact/Contact"))
const ComingSoon = lazy(() => import("./Pages/Umelle/ComingSoon/ComingSoon"))
const UmelleInsurance = lazy(() => import("./Pages/Umelle/UmelleInsurance/UmelleInsurance"))
const ContactSuccess = lazy(() => import("./Pages/Umelle/ContactSuccess/ContactSuccess"))
const ContactSuccessCustom = lazy(() => import("./Pages/Umelle/ContactSuccess/ContactSuccessCustom"))

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();

    const advancedMatching = { em: 'test@umelle.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
    const options = {
        autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
        debug: true, // enable logs
    };

    ReactPixel.init(process.env.REACT_APP_FACEBOOK_PIXEL_ID, advancedMatching, options);
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_LANDING_MEASUREMENT_ID);
  // RetinaJS
  useEffect(() => {
    window.addEventListener('load', retina(document.querySelectorAll('img')));
  }, [])

  useEffect(() => {
    setTimeout(() => {
      import("./Functions/Utilities").then(module => {
        module.SetHeaderMenuPos()
        module.setDocumentFullHeight()
      })
    }, 1000);
  }, [location])

  useEffect(() => {
    if (isModalOpen === true) {
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  }, [isModalOpen]);

  // Get the current location and set the window to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    setFooterHeight(0);
    setCustomModal({
      ...customModal,
      el: null,
      isOpen: false
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const helmetContext = {};

  ScrollToAnchor();
    
  return (
    <GlobalContext.Provider
      value={{
        headerHeight,
        setHeaderHeight,
        footerHeight,
        setFooterHeight,
        isModalOpen,
        setIsModalOpen,
        customModal,
        setCustomModal,
      }}
      >
      <HelmetProvider context={helmetContext}>
        
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
        {
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton />
            <AnimatePresence exitBeforeEnter>
              <Suspense fallback={<></>}>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" replace />}/>
                  <Route path="/home" element={<UmelleHome style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/solutions" element={<UmelleSolutions style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/services" element={<UmelleServices style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/company" element={<UmelleCompany style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/contact" element={<Contact style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/coming-soon" element={<ComingSoon style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/products" element={<ComingSoon style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/umelle-insurance" element={<UmelleInsurance style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/aw-stg-landingp" element={<UmelleInsurance style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/contact-success" element={<ContactSuccess style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/contact-success-custom" element={<ContactSuccessCustom style={{ "--base-color": "#27ae60" }} />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>
        }
      </div>
      </HelmetProvider>
    </GlobalContext.Provider>
  )
}

export default App;