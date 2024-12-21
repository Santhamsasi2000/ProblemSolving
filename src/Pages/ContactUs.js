import "../Styles/ContactUs.css";
import ContactUsForm from "../Components/ContactUs/ContactForm/ContactUsForm";
import Location from "../Components/ContactUs/Location";

const ContactUs = () => {
  return (
    <section>
        <div className="page-title">CONTACT US</div>
        <div className="contact-us  p-5 d-flex flex-column flex-md-row gap-5 justify-content-between">
          <Location/>
          <ContactUsForm/>
        </div>
    </section>
  )
}

export default ContactUs
