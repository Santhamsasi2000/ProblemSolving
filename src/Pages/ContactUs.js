import "../Styles/ContactUs.css";
import ContactUsForm from "../Components/ContactUs/ContactForm/ContactUsForm";
import Location from "../Components/ContactUs/Location";

const ContactUs = () => {
  return (
    <section className="m-5 d-flex flex-column flex-md-row gap-5 justify-content-between ">
       <Location/>
       <ContactUsForm/>
    </section>
  )
}

export default ContactUs
