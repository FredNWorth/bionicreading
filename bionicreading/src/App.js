import "./App.css";
import { useRef } from "react";
import BionicWrapper from "./bionicwrapper/wrapper";

function App() {
  const bionicOn = useRef(true);

  const bionicHandler = () => {
    console.log("clicked");
    bionicOn.current = true;
  };
  return (
    <>
      <BionicWrapper bionicOn={bionicOn.current}>
        <p>This is a test</p>
        <p>This is another line</p>
        <button
          onClick={() => {
            bionicHandler();
          }}
        >
          doesn't count
        </button>
      </BionicWrapper>
    </>
  );
}

export default App;
