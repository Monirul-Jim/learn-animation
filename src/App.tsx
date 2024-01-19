import "./App.css";
import RecapAnimation from "./RecapAnimation";
const App = () => {
  return (
    <>
      <div className="main">
        {/* <div className="box-1"></div>
      <div className="box-container-2">
        <div className="box-2"></div>
      </div> */}
        <button className="btn">Hover Me</button>
        <RecapAnimation />
      </div>
    </>
  );
};

export default App;
