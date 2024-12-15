import "../Styles/FAQ.css";
import Accordian from '../Components/FAQ/Accordian'
import { FaqData } from "../Data/FaqData";

const FAQ = () => {
  return (
    <section>
      <div className="page-title">
        FAQ
        <p className='text-white fs-4 fw-bold'>Frequently Asked Questions</p>
      </div>
      <div className="p-5 common-bg">
        {
          FaqData.map(({id,title,content})=>(
              <Accordian id={id} title={title} content={content}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQ
