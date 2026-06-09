import { Container, Typography } from "@mui/material";

import ServiceCard from "./ServiceCard";

const Services = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-20 bg-white">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Services
          </Typography>

          <Typography color="text.secondary">
            AI-powered healthcare services designed to improve patient care.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
