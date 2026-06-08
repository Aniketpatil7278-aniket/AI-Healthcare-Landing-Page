import { useEffect, useState } from "react";
import { getLandingData } from "../../api/landingApi";
import Loader from "../../components/Common/Loader";
import ErrorMessage from "../../components/Common/ErrorMessage";
import Header from "../../components/Header/Header";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoanding]= useState(true);
  const [errormessage, setErroormessage] = useState("");

  const fetchData = async () => {
    try {
      const result = await getLandingData();
      setData(result);
      console.log(result);
    } catch (error) {
        setErroormessage("Something went wrong...");
      console.error("Error fetching landing data:", error);
    }finally{
        setLoanding(false);
        // <ErrorMessage message={errormessage} />
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <Loader />

  if(errormessage) return <ErrorMessage message={errormessage} />

  // Find header data from API response
  const headerData = data.find((item) => item.type === "header");
  console.log(headerData);

  return (
    <>
      <Header data={headerData} />
    </>
  );
};

export default LandingPage;
