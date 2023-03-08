import React from "react";
import useBionicWrapper from "./useBionicWrapper";

export default function BionicWrapper({ bionicOn, children }) {
  const newChildren = useBionicWrapper(bionicOn, children);

  return <>{bionicOn ? newChildren : children}</>;
}
