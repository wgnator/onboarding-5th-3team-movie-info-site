import { useEffect } from "react";
import { useState } from "react";
import Router from "./Router";
import AccessUserDB from "./models/AccessUserDB";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await AccessUserDB.getUsers();
    setData(data);
  }
  // return <Router />;

  return <>{JSON.stringify(data)}</>;
}

export default App;
