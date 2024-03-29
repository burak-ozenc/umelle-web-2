import React, { Suspense, useEffect, useState, lazy } from "react";

// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import retina from "retinajs";
import { AnimatePresence } from "framer-motion";
// import CookieConsent from "react-cookie-consent";

// Context
import GlobalContext from "./Context/Context";

// Components
import ScrollToTopButton from "./Components/ScrollToTop"
import {ScrollToAnchor} from "./Functions/Utilities";
import { HelmetProvider} from "react-helmet-async";

// Home
const UmelleHome = lazy(() => import("./Pages/Umelle/Home/Startup"))
const UmelleSolutions = lazy(() => import("./Pages/Umelle/Solutions/Startup"))
const UmelleServices = lazy(() => import("./Pages/Umelle/Services/Startup"))
const UmelleCompany = lazy(() => import("./Pages/Umelle/Company/Startup"))
const Contact = lazy(() => import("./Pages/Umelle/Contact/Contact"))
const ComingSoon = lazy(() => import("./Pages/Umelle/ComingSoon/ComingSoon"))
const UmelleInsurance = lazy(() => import("./Pages/Umelle/UmelleInsurance/UmelleInsurance"))

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customModal, setCustomModal] = useState({
    el: null,
    isOpen: false
  })
  const location = useLocation();

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
  // const domainGroupId = '4a2500a0-20d7-4f34-9f31-a701c8bb0b2f';
  // const [hasCookieBot, setHasCookieBot] = useState(undefined);
  
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
        {/*<CookieBot domainGroupId={domainGroupId} />*/}
      <div className="App" style={{ "--header-height": `${headerHeight}px` }}>
        {
          <main style={{ marginTop: headerHeight, marginBottom: footerHeight }}>
            <ScrollToTopButton />
            <AnimatePresence exitBeforeEnter>
              <Suspense fallback={<></>}>
                <Routes>
                  <Route path="/" element={<UmelleHome style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/solutions" element={<UmelleSolutions style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/services" element={<UmelleServices style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/company" element={<UmelleCompany style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/contact" element={<Contact style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/coming-soon" element={<ComingSoon style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/products" element={<ComingSoon style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/umelle-insurance" element={<UmelleInsurance style={{ "--base-color": "#27ae60" }} />} />
                  <Route path="/aw-stg-landingp" element={<UmelleInsurance style={{ "--base-color": "#27ae60" }} />} />
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