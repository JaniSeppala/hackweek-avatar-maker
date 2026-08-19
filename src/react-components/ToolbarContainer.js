import React from "react";
import { Toolbar } from "./Toolbar";
import { UploadButton } from "./UploadButton";
import { MoreMenu } from "./MoreMenu";
import { dispatch } from "../dispatch";
import constants from "../constants";
import { FormattedMessage } from "react-intl";
import euLogo from "../../assets/eu-logo.png"

function dispatchResetView() {
  dispatch(constants.resetView);
}

function dispatchExportAvatar() {
  dispatch(constants.exportAvatar);
}

export function ToolbarContainer({ onGLBUploaded, randomizeConfig }) {
  return (
    <Toolbar>
      <div className="toolbarContent">
        <span className="appName">
          <FormattedMessage
            id="appName"
            defaultMessage="Oppiversumi Avatar Generator"
          />
        </span>
        <MoreMenu
          items={
            <>
              <UploadButton onGLBUploaded={onGLBUploaded} />
              <a href="https://github.com/mozilla/hackweek-avatar-maker" target="_blank">
                GitHub
              </a>
            </>
          }
        ></MoreMenu>
        <button onClick={randomizeConfig}>
          <FormattedMessage
            id="randomizeMessage"
            defaultMessage="Randomize avatar"
          />
        </button>
        <button onClick={dispatchResetView}>
          <FormattedMessage
            id="resetCameraMessage"
            defaultMessage="Reset camera view"
          />
        </button>
        <button onClick={dispatchExportAvatar} className="primary">
          <FormattedMessage
            id="exportMessage"
            defaultMessage="Export avatar"
          />
        </button>
      </div>
      <div className="toolbarNotice">
        <span>
          <FormattedMessage
            id="copyrightMessage1"
            defaultMessage="The 3D models used in this app are ©2020-2022 by individual "
          />
          <a href="https://www.mozilla.org" target="_blank" noreferrer>mozilla.org</a>
          <FormattedMessage
            id="copyrightMessage2"
            defaultMessage=" contributors. Content available under a "
          />
          <a href="https://www.mozilla.org/en-US/foundation/licensing/website-content/" target="_blank" noreferrer>
            <FormattedMessage
              id="copyrightMessage3"
              defaultMessage="Creative Commons license"
            />
          </a>.
        </span>
      </div>
      <div className="toolbarLogos">
          <img src={euLogo} alt="EU-lippu, jonka vieressä teksti 'Euroopan unionin osarahoittama'"></img>
      </div>
    </Toolbar>
  );
}
