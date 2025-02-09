import { FaqData } from "../../Data/FaqData";
import "../../Styles/FAQ.css";

const FAQ = () => {
  return (
    <section className="common-bg p-3 p-sm-5">
      <p className="page-title mb-4">Frequently Asked Questions</p>
      <div className="mt-3">
        {
          FaqData.map(({id,title,content})=>(
            <div key={id}>
              <p className="subtitle text-capitalize fs-6 mb-2">{title}</p>
              <p>{content}</p>
              <hr style={{border:"1px  #a0752e solid"}}/>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default FAQ;
