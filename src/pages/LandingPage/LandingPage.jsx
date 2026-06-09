import { useEffect, useState } from "react";
import { getLandingData } from "../../api/landingApi";
import Loader from "../../components/Common/Loader";
import ErrorMessage from "../../components/Common/ErrorMessage";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Statistics from "../../components/Statistics/Statistics";
import Services from "../../components/Services/Services";
import Doctors from "../../components/Doctors/Doctors";
import Testimonials from "../../components/Testimonials/Testimonials";


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

const servicesdata = data.filter((item) => item.type === "service");
// console.log(servicesdata);

const doctordata=data.filter((item)=> item.type ==="doctor");
// console.log(doctordata);

const testimonialdata = data.filter((item) => item.type === "testimonial");
console.log(testimonialdata);

  return (
    <>
      <Header data={headerData} />
      <Hero data={herodata} />

      <About data={aboutdata} />

      <Statistics data={statdata} />
      <Services data={servicesdata} />

      <Doctors data={doctordata} />

      <Testimonials data={testimonialdata} />
    </>
  );
};

export default LandingPage;
