import "../Styles/FAQ.css";
import Accordian from '../Components/FAQ/Accordian'

const FAQ = () => {
  return (
    <section>
      <div className="page-title">
        FAQ
        <p className='text-white fs-4'>Frequently Asked Questions</p>
      </div>
       <Accordian/>
    </section>
  )
}

export default FAQ
