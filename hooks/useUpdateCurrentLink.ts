import { useEffect, useState } from "react";

function useUpdateCurrentLink() {
  const [currentLink, setCurrentLinkState] = useState<string>("");

  const setCurrentLink = (newLink: string) => {
    setCurrentLinkState(newLink);
    if (window.location.hash !== newLink) {
      window.history.replaceState(null, "", newLink);
    }
  };

  useEffect(() => {
    if (window.location.hash) {
      setCurrentLinkState(window.location.hash);
    }
  }, [currentLink]);

  return { currentLink, setCurrentLink };
}

export default useUpdateCurrentLink;
