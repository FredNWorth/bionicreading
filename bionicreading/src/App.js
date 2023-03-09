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
        This is a test<br />
        This is another line<br />
        Text block is the primary control for displaying read-only text in apps.<br />
        You can use it to display single-line or multi-line text, inline hyperlinks,<br />
        and text with formatting like bold, italic, or underlined.
      </BionicWrapper>
      <button
        onClick={() => {
          bionicHandler();
        }}
      >
        Click to go bionic
      </button>
    </>
  );
}

export default App;
