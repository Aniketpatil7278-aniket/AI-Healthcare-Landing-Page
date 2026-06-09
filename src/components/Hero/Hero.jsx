import { Button, Container, Typography } from "@mui/material";

const Hero = ({ data }) => {
  if (!data) return null;

  return (
    <section className="bg-slate-50 py-20">
      <Container maxWidth="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side */}
          <div>
            <Typography
              variant="h2"
              
              sx={{
                fontWeight: "bold",
                mb: 3,
              }}
            >
              {data.title}
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              {data.subtitle}
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
              }}
            >
              {data.buttonText}
            </Button>
          </div>

          {/* Right Side */}
          <div>
            <img
              src={data.image}
              alt={data.title}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
