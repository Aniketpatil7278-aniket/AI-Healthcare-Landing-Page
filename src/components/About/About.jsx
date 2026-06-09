import { Container, Typography, Paper } from "@mui/material";

const About = ({ data }) => {
  if (!data) return null;

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <Container maxWidth="lg">
        <Paper elevation={3} className="rounded-3xl p-6 md:p-12">
          <div className="text-center">
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              {data.heading}
            </Typography>

            <div className="w-100 h-1 bg-blue-600 mx-auto rounded-full my-6"></div>

            <Typography
              variant="body1"
              color="text.secondary"
              className="max-w-4xl mx-auto leading-8 text-base md:text-lg"
            >
              {data.description}
            </Typography>
          </div>
        </Paper>
      </Container>
    </section>
  );
};

export default About;
