import React from "react";
import ReactDOMServer from "react-dom/server";
import Logo from "../../components/Logo";
import html2canvas from "html2canvas";
import { dataURLtoFile } from "../../helpers";

export const generateShareImage = async (component) => {
  const canvas = await html2canvas(component, {
    allowTaint: true,
    removeContainer: true,
    backgroundColor: "#171f6d",
    height: component.offsetHeight + 70,
    x: 0,
    y: 0,
    scrollX: 0,
    scrollY: -50,
    windowWidth: 650,
    width: 666,
    scale: 1,

    onclone: (clone) => {
      const content = clone.querySelector(".screenshot");

      content.classList.add("shared");

      const logo = (
        <div className="shared__header">
          <Logo width={200} dark />
        </div>
      );
      const stringComponent = ReactDOMServer.renderToString(logo);

      return content.insertAdjacentHTML("afterbegin", stringComponent);
    },
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.6);
  const file = dataURLtoFile(imgData, "photo.jpg");

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Team Maker",
        text: "Compartido desde Team Maker",
        url: "https://teammaker.app/",
        files: [file],
      });
    }
  } catch (e) {
    console.log("Error sharing list.");
  }
};
