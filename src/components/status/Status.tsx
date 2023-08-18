import React from "react";
import "./Status.css";
type StatusPropTypes = {
  label: string;
};

const Status: React.FC<StatusPropTypes> = ({ label }) => {
  return (
    <div className={`status-container ${label}`} data-testid="status-test">
      <span data-testid="status-component">{label}</span>
    </div>
  );
};

export default Status;
