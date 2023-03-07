import React, { createElement, useEffect, useState } from "react";

export default function useBionicWrapper(children) {
  const [newChildren, setNewChildren] = useState(children);
  function isString(value) {
    return typeof value === "string" || value instanceof String;
  }
  function convertChildren() {
    children.forEach((item, index) => {
      let newPara = "";
      if (isString(item.props.children)) {
        console.log(item.props.children);
        const words = children[index].props.children.split(" ");
        words.forEach((word) => {
          newPara += createElement("b", word);
        });
        setNewChildren([
          ...newChildren.slice(0, index),
          newPara,
          ...newChildren.slice(index + 1),
        ]);
      }
    });
  }

  useEffect(() => {
    convertChildren();
  }, []);
  console.log(newChildren);

  return newChildren;
}
