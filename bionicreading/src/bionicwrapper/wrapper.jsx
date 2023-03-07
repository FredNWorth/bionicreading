import React, { useEffect, useState } from "react";
import useBionicWrapper from "./useBionicWrapper";

export default function BionicWrapper({ children }) {
  const newChildren = useBionicWrapper(children);

  return <>{newChildren}</>;
}
