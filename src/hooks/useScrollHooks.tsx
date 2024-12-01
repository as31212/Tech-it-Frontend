import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollHooks = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there is a hash in the URL
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ block: "start", behavior:"smooth" });
      }
    } else {
      // If no hash, scroll to the top of the page
      window.scrollTo({ top: 0 });
    }
  }, [location]);
};

export default useScrollHooks;
