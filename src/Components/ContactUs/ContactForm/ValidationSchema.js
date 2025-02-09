import * as Yup from "yup";

export const ValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .required("Your Name is required"),
  email: Yup.string().email("Invalid email address"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Please provide a valid 10-digit mobile number.")
    .required("Mobile number is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters long")
    .required("Subject is required"),
  message: Yup.string().max(500, "Message cannot exceed 500 characters"),
});
