import { Container, Paper, Typography } from "@mui/material";

const Statistics = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <section className="py-20 bg-slate-100">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Our Healthcare Impact
          </Typography>

          <Typography color="text.secondary">
            Trusted by thousands of patients and healthcare professionals.
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <Paper
              key={item.id}
              elevation={6}
              className="p-8 text-center rounded-3xl"
            >
              <Typography variant="h4" color="primary" fontWeight="bold">
                {item.value}
              </Typography>

              <Typography variant="h6" className="mt-2">
                {item.label}
              </Typography>
            </Paper>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
