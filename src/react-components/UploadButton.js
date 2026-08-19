import React from "react";
import { FormattedMessage } from "react-intl";

export function UploadButton({ onGLBUploaded }) {
  return (
    <label className="uploadButton" tabIndex="0">
      <FormattedMessage
        id="uploadMessage"
        defaultMessage="Upload custom part"
      />
      <input onChange={onGLBUploaded} type="file" id="input" accept="model/gltf-binary,.glb"></input>
    </label>
  );
}
