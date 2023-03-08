import React, { useEffect } from "react";
import useBionicWrapper from "./useBionicWrapper";

export default function BionicWrapper({ bionicOn, children }) {
  const newChildren = useBionicWrapper(bionicOn, children);
  useEffect(() => {

  }, [bionicOn])
  return <>{bionicOn ? newChildren : children}</>;
}
