import React from "react";
import { Button, Glyphicon } from "react-bootstrap";

export default props =>
  <Button
    className={`LoaderButton ${props.className}`}
    disabled={props.disabled || props.isLoading}
    {...props}
  >
    {props.isLoading && <Glyphicon glyph="refresh" className="spinning" />}
    {!props.isLoading ? props.text : props.loadingText}
  </Button>;
