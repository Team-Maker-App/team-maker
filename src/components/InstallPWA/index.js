import { useEffect, useState } from "react";
import Button from "../Button";
import { ImDownload } from "react-icons/im";

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
    });

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener("transitionend", handler);
      window.removeEventListener("appinstalled", handler);
    };
  }, []);

  const handleInstall = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA || isInstalled) {
    return null;
  }
  return (
    <>
      <Button onClick={handleInstall}>
        <ImDownload size={20} color="#171F6D" />
      </Button>
    </>
  );
};

export default InstallPWA;
