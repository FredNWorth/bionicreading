import logo from "./logo.svg";
import "./App.css";
import BionicWrapper from "./bionicwrapper/wrapper";
function App() {
  return (
    <>
      <BionicWrapper>
        <p>This is a test</p>
        <p>This is another line</p>
        <button>doesn't count</button>
        <a>Also doesn't count</a>
      </BionicWrapper>
    </>
  );
}

export default App;
