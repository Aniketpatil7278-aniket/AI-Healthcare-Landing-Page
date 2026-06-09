
import { Container, Typography } from "@mui/material";
import DoctorCard from "./DoctorCard";

const Doctors =({data})=>{

    if(!data || data.length === 0){
        return null;
    }
    return (
      <section id="doctors" className="py-20 bg-slate-50">
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Featured Doctor
            </Typography>

            <Typography color="text.secondary">
              Meet our experienced healthcare professionals.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </Container>
      </section>
    );

}
export default Doctors;