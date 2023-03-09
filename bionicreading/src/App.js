import "./App.css";
import { useState } from "react";
import BionicWrapper from "./bionicwrapper/wrapper";

function App() {
  const [bionicOn, setBionicOn] = useState(false);

  const bionicHandler = () => {
    setBionicOn(bionicOn ? false : true);
  };
  return (
    <>
      <BionicWrapper bionicOn={bionicOn}>
        <p>This is a test</p>
        <p>This is another line</p>
        <p>Text block is the primary control for displaying read-only text in apps. You can use it to display single-line or multi-line text, inline hyperlinks, and text with formatting like bold, italic, or underlined.</p>
        <button
          onClick={() => {
            bionicHandler();
          }}
        >
          Click to go bionic
        </button>
      </BionicWrapper>
    </>
  );
}

export default App;
