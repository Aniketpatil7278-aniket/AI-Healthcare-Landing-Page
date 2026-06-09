
import TestimonialsCard from "./TestimonialsCard";
import { Container, Typography } from "@mui/material";
const Testimonials =({data})=>{

    if(!data || data.length === 0){
        return null;
    }
    return (
      <section id="testimonials" className="py-20 bg-white">
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              What Our Patients Say
            </Typography>

            <Typography color="textSecondary">
              Trusted by thousands of patients across the country.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </Container>
      </section>
    );
}
export default Testimonials;
