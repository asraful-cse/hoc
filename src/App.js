import "bootstrap/dist/css/bootstrap.min.css";
import A from "./components/A";
import B from "./components/B";
function App() {
  return (
    <div className="App ">
      <h1 className="text-center pb-5">Higher order component</h1>
      <div className="d-flex justify-content-around g-4 align-content-center">
      <A name="A"/>
      <B name="B"/>
      </div>
 
    </div>
  );
}

export default App;
