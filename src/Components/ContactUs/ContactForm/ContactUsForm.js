import React, { lazy, Suspense } from "react";
import { Formik, Form } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import FormField from "./FormField";
import StandardDropdown from "./StandardDropdown";

const Swal = lazy(() => import("sweetalert2"));

const ContactUsForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", "9afd317d-caf1-43f7-82ed-c9719737eff7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        const { default: Swal } = await import("sweetalert2");
        Swal.fire({
          title: "MESSAGE SENT !",
          text: "Thanks for contacting us. You will receive a response within two hours. If you do not receive a response from us, please call '6382174912'.",
          icon: "success",
        });
        resetForm();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      const { default: Swal } = await import("sweetalert2");
      Swal.fire({
        title: "Error",
        text: error.message || "Network error. Please try again.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const options = [
    "Business","Careers"
  ];

  return (
    <section className="d-flex justify-content-center">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobileNumber: "",
          standard: "",
          subject: "",
          message: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-100">
            <p className="title fs-4 fw-bold mb-1">GET IN TOUCH</p>
            <p className="fw-semibold fs-6 mb-3 text-secondary">
            Feel free to use the below form to share your experience, questions, concerns, or Admission Enquiry.
            </p>

            <FormField name="firstName" label="First Name" placeholder="Enter First Name*" />
            <FormField name="lastName" label="Last Name" placeholder="Enter Last Name*" />
            <FormField name="email" label="Email Address" type="email" placeholder="Enter Your Email ID" />
            <FormField name="mobileNumber" label="Mobile Number" placeholder="Enter Your Mobile Number*" />
            <StandardDropdown options={options} name="Purpose" />
            <FormField name="subject" label="Subject" placeholder="Enter the Subject*" />
            <FormField name="message" label="Message (Optional)" as="textarea" placeholder="Your Message" style={{height:"200px",padding:"10px"}}/>

            <button
              type="submit"
              className="btn-common border-0 px-5 py-2 fw-bold rounded-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactUsForm;
