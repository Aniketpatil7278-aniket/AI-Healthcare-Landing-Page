import { useEffect, useState } from "react";
import { getLandingData } from "../../api/landingApi";
import Header from "../../components/Header/Header";

const LandingPage = () => {
  const [landingData, setLandingData] = useState([]);

  const fetchData = async () => {
    try {
      const result = await getLandingData();
      setLandingData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching landing data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Find header data from API response
  const headerData = landingData.find((item) => item.type === "header");
  console.log(headerData);

  return (
    <>
      <Header data={headerData} />
    </>
  );
};

export default LandingPage;
