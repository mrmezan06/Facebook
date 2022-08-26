function App() {
  const get = async () => {
    const response = await fetch("http://localhost:8000/");

    console.log(response);
  };

  get();
  return <div>Welcome to frontend</div>;
}

export default App;
