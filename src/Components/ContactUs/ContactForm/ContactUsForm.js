import React, { lazy, Suspense } from "react";
import { Formik, Form } from "formik";
import { ValidationSchema } from "./ValidationSchema";
import FormField from "./FormField";
import StandardDropdown from "./StandardDropdown";

const Swal = lazy(() => import("sweetalert2"));
const title = "GET IN TOUCH";
const subTitle = " Feel free to use the form below to share your business needs, questions, concerns, or consultation inquiries.";
const key = "e24f7ae3-a090-4125-9363-4d61d4ed139f";

const ContactUsForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", key);

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
          text: "Thanks for contacting us. You will receive a response within two hours. If you do not receive a response from us, please call '9442140768'.",
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
    "SERVICES","CAREERS"
  ];

  return (
    <section className="d-flex">
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobileNumber: "",
          purpose:"",
          subject: "",
          message: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-100">
            <p className="subtitle mb-2">{title}</p>
            <p>{subTitle}</p>

            <FormField name="name" label="Name" placeholder="Enter Your Name*" />
            <FormField name="email" label="Email Address (Optional)" type="email" placeholder="Enter Your Email Id" />
            <FormField name="mobileNumber" label="Mobile Number" placeholder="Enter Your Mobile Number*" />
            <StandardDropdown options={options} name="purpose" />
            <FormField name="subject" label="Subject" placeholder="Enter the Subject*" />
            <FormField name="message" label="Message (Optional)" as="textarea" placeholder="Your Message" style={{height:"200px",padding:"10px"}}/>

            <button
              type="submit"
              className="form-btn"
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
