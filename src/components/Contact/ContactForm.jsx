import { Formik ,Form } from "formik";

import {
  Container,
  Paper,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@mui/material";

import { ContactValidation } from "./ContactValidation";
const ContactForm =()=>{

    const initialValues ={
        fullName:"",
        email:"",
        phone:"",
        department:"",
        message:"",
    }

    const handleSubmit = (value, { resetForm }) => {
      console.log(value);
      alert("Contact Form Submitted Successfully");
      resetForm();
    };
    return (
      <section id="contact" className="py-20 bg-white">
        <Container maxWidth="lg">
          <div className="text-center mb-12">
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Contact Form{" "}
            </Typography>

            <Typography color="textSecondary">
              Get in touch with our healthcare team.
            </Typography>
          </div>

          <Paper elevation={4} className="p-8 rounded-5xl">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={ContactValidation}
            >
              {({ values, errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TextField
                      fullWidth
                      required
                      label="Full Name"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.fullName && Boolean(errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />

                    <TextField
                      fullWidth
                      required
                      label="Email Address"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />

                    <TextField
                      fullWidth
                      required
                      label="Phone Number"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={touched.phone && errors.phone}
                    />

                    <TextField
                      select
                      fullWidth
                      label="Department"
                      name="department"
                      value={values.department}
                      onChange={handleChange}
                    >
                      <MenuItem value="General Inquiry">
                        General Inquiry
                      </MenuItem>

                      <MenuItem value="Appointment Booking">
                        Appointment Booking
                      </MenuItem>

                      <MenuItem value="Telemedicine Support">
                        Telemedicine Support
                      </MenuItem>

                      <MenuItem value="Billing & Payments">
                        Billing & Payments
                      </MenuItem>

                      <MenuItem value="Technical Support">
                        Technical Support
                      </MenuItem>
                    </TextField>
                  </div>
                  <div className="mt-6">
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={5}
                      label="Message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && errors.message}
                    />
                  </div>

                  <div className="mt-8 text-center">
                    <Button
                      type="Submit"
                      variant="contained"
                      size="large"
                      sx={{
                        textTransform: "none",
                        borderRadius: "10px",
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Paper>
        </Container>
      </section>
    );
};
export default ContactForm;