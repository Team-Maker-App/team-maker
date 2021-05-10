import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

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

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
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
    <Button
      aria-label="Install app"
      title="Install app"
      text="Instalar"
      className="py-2 px-4 font-sans text-center text-xl text-primary"
      action={onClick}
    />
  );
};

export default InstallPWA;
