import * as Yup from "yup";

export const ContactValidation = Yup.object({
  fullName: Yup.string().required("Full Name is required"),

  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone Number is required"),

  subject: Yup.string(),

  department: Yup.string(),
  
  message: Yup.string().required("Message is required"),
});
