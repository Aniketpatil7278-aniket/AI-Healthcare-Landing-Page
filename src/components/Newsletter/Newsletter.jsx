import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Container, Paper, TextField, Typography, Button } from "@mui/material";

const Newsletter = () => {
  const initialValues = {
    email: "",
  };

  const newsletterValidation = Yup.object({
    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    alert("Newsletter subscribed successfully!");

    resetForm();
  };

  return (
    <section id="newsletter">
      <Container maxWidth="md">
        <Paper elevation={4}>
          <Typography variant="h4" align="center">
            Subscribe to Our Newsletter
          </Typography>

          <Typography align="center">
            Stay updated with the latest healthcare news and AI innovations.
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={newsletterValidation}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <Button type="submit" variant="contained" fullWidth>
                  Subscribe
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </section>
  );
};

export default Newsletter;
