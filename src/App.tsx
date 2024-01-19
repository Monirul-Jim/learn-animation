import "./App.css";
import LoadingAnimation from "./Loading";
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
        <LoadingAnimation />
      </div>
    </>
  );
};

export default App;
