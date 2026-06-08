
import {  useEffect } from "react"
import { getLandingData } from "./api/landingApi";
function App() {



  const fetchdata = async () => {
    try {
      const data = await getLandingData();
      
      console.log(data);
    } catch (e) {
      console.log("error to fetch the data ", e);
    }
  };
    useEffect(() => {
      fetchdata();
    }, []);

  return (
    <>
      <h1>anipatil</h1>

    </>
  )
}

export default App
