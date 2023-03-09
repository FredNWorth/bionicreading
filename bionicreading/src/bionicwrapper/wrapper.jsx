import React, { Suspense } from "react";
import useBionicWrapper from "./useBionicWrapper";

export default function BionicWrapper({ bionicOn, children }) {
  const newChildren = useBionicWrapper(bionicOn, children);

  return (<><Suspense fallback="...Loading"><p>{bionicOn ? newChildren : children}</p></Suspense></>);
}
