import React, { createElement, useEffect, useState } from "react";
import "./bioniccss.css";
export default function useBionicWrapper(bionicOn, children) {
  const [childReturn, setChildReturn] = useState();
  console.log("bionic On", bionicOn);
  function isString(value) {
    return typeof value === "string" || value instanceof String;
  }
  function convertChildren() {
    let newChildren = new Array();
    children.map((child, index) => {
      if (child.type == "p" || child.type == "br") {
        if (isString(child.props.children)) {
          newChildren.push(createElement(child.type));
          let pArray = child.props.children.split(" ");
          pArray.map((word) => {
            for (let i = 0; i < word.length; i++) {
              let newItem = "";
              if (i <= word.length / 2) {
                newItem = createElement("span", {
                  children: word[i] + "",
                  className: "bionicBold",
                });
              } else if (i == word.length) {
                newItem = createElement("span", {
                  children: word[i] + " ",
                  className: "bionic",
                });
              } else {
                newItem = createElement("span", {
                  children: word[i] + "",
                  className: "bionic",
                });
              }
              newChildren.push(newItem);
            }
            newChildren.push(" ");
          });
        }
      } else {
        newChildren.push(child);
      }
      newChildren.push(createElement("p"));
    });
    setChildReturn(newChildren);
  }

  useEffect(() => {
    convertChildren();
  }, [bionicOn]);

  return childReturn;
}
