import "./styles.css";
import "./game";
import React from "react";
import ReactDOM from "react-dom";
import { AvatarEditorContainer } from "./react-components/AvatarEditorContainer";
import { dispatch } from "./dispatch";
import constants from "./constants";
import { IntlProvider } from "react-intl";

const finnishMessages = {
  uploadMessage: "Lataa mukautettu 3D-malli",
  appName: "Oppiversumi Avatargeneraattori",
  randomizeMessage: "Sekoita avatar",
  resetCameraMessage: "Nollaa kameranäkymä",
  exportMessage: "Tallenna avatar",
  copyrightMessage1: "Sovelluksessa käytettyjen 3D mallien tekijänoikeudet omistaa yksittäiset ",
  copyrightMessage2: " tekijät. Sisältö käytettävissä ",
  copyrightMessage3: "Creative Commons lisenssillä"
}

// Used externally by the generate-thumbnails script
window.renderThumbnail = (category, part) => {
  dispatch(constants.renderThumbnail, { thumbnailConfig: { category, part } });
};

let locale = navigator.language
let messages = finnishMessages;
if (locale !== "fi") {
  locale = "en-US"
  messages = null;
}

ReactDOM.render(<IntlProvider locale={locale} messages={messages} defaultLocale="en-US"><AvatarEditorContainer /></IntlProvider>, document.getElementById("root"));
