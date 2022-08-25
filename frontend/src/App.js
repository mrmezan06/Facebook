import { LiveVideo } from "./svg";

function App() {
  const get = async () => {
    const response = await fetch("http://localhost:8000/");

    console.log(response);
  };

  get();
  return (
    <div>
      welcome to frontend
      <LiveVideo color="red" />
    </div>
  );
}

export default App;
