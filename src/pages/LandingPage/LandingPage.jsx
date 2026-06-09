import { useEffect, useState } from "react";
import { getLandingData } from "../../api/landingApi";
import Loader from "../../components/Common/Loader";
import ErrorMessage from "../../components/Common/ErrorMessage";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Statistics from "../../components/Statistics/Statistics";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoanding]= useState(true);
  const [errormessage, setErroormessage] = useState("");

//   const fetchData = async () => {
//     try {
//       const result = await getLandingData();
//       setData(result);
//       console.log(result);
//     } catch (error) {
//         setErroormessage("Something went wrong...");
//       console.error("Error fetching landing data:", error);
//     }finally{
//         setLoanding(false);
//         // <ErrorMessage message={errormessage} />
//     }
//   };

 useEffect(() => {
   const fetchData = async () => {
     try {
       const result = await getLandingData();
       console.log(result);
       setData(result);
     } catch (e) {
        console.log(e);
       setErroormessage("Something went wrong...");
     } finally {
       setLoanding(false);
     }
   };

   fetchData();
 }, []);

  if(loading) return <Loader />

  if(errormessage) return <ErrorMessage message={errormessage} />

  // Find header data from API response
  const headerData = data.find((item) => item.type === "header");
//   console.log(headerData);

  const herodata= data.find((item) =>item.type ==="hero" );
//   console.log(herodata); 

const aboutdata=data.find((item)=>item.type ==="about");
// console.log(aboutdata);

const statdata = data.filter((item) => item.type === "stat");
// console.log(statdata);

console.log(data.about);

  return (
    <>
      <Header data={headerData} />
      <Hero data={herodata} />

      <About data={aboutdata} />

      <Statistics data={statdata} />
    </>
  );
};

export default LandingPage;
