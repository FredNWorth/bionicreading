import "./App.css";
import { useState } from "react";
import BionicWrapper from "./bionicwrapper/wrapper";

function App() {
  const [bionicOn, setBionicOn] = useState(false);

  const bionicHandler = () => {
    setBionicOn(bionicOn === true ? false : true);
  };
  return (
    <>
      <BionicWrapper bionicOn={bionicOn}>
        <p>This is a test</p>
        <p>This is another line</p>
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
