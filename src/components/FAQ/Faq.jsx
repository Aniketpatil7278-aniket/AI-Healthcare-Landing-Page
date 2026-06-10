import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <Container maxWidth="lg">
        {/* Heading */}
        <div className="text-center mb-12">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Frequently Asked Questions
          </Typography>

          <Typography color="text.secondary">
            Find answers to common questions about our healthcare platform.
          </Typography>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {data.map((faq) => (
            <Accordion key={faq.id} elevation={2} className="mb-4 rounded-xl">
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>{faq.question}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography  color="textSecondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Faq;
