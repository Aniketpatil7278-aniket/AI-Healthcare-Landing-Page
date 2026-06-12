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
import Faq from "../../components/FAQ/Faq";
import ContactForm from "../../components/Contact/ContactForm";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLandingData();

        console.log(result);

        setData(result);
      } catch (error) {
        console.log(error);

        setErrorMessage("Something went wrong...");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  // Header
  const headerData = data.find((item) => item.type === "header");

  // Hero
  const heroData = data.find((item) => item.type === "hero");

  // About
  const aboutData = data.find((item) => item.type === "about");

  // Statistics
  const statData = data.filter((item) => item.type === "stat");

  // Services
  const servicesData = data.filter((item) => item.type === "service");

  // Doctors
  const doctorData = data.filter((item) => item.type === "doctor");

  // Testimonials
  const testimonialData = data.filter((item) => item.type === "testimonial");

  // FAQ
  const faqData = data.filter((item) => item.type === "faq");

  // Footer
  const footerData = data.find((item) => item.type === "footer");

  return (
    <>
      <Header data={headerData} />

      <Hero data={heroData} />

      <About data={aboutData} />

      <Statistics data={statData} />

      <Services data={servicesData} />

      <Doctors data={doctorData} />

      <Testimonials data={testimonialData} />

      <Faq data={faqData} />

      <ContactForm />

      <Newsletter />

      <Footer data={footerData} />
    </>
  );
};

export default LandingPage;
