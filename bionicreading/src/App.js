import React from "react";
import "./App.css";
import { useState } from "react";
import BionicWrapper from "./bionicwrapper/wrapper";

function App() {
  const [bionicOn, setBionicOn] = useState(false);

  const bionicHandler = () => {
    setBionicOn(bionicOn ? false : true);
  };

  return (<>

    <div style={{ margin: 30, width: "500px" }}>
      <BionicWrapper bionicOn={bionicOn}>
        Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points.<br />
        As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word.<br />
        In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.
      </BionicWrapper>
      <button
        as="a"
        variant='success'
        onClick={() => {
          bionicHandler();
        }}
      >
        Click to go bionic
      </button>
    </div>

  </>);
}

export default App;
