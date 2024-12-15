import { useState } from "react";
const Accordian = ({id,title,content}) => {
    const [isActive, setIsActive] = useState(false);

    return (
      <>
        {
              <div className="accordian" key={id}>
                 <div className="accordian-item">
                 <div className="accordian-title d-flex justify-content-between align-items-center fw-semibold fs-4" onClick={()=> setIsActive(!isActive)}>
                       <div className="acc-title text-wrap">{title}</div>
                       <div className="fs-1 fw-bold text-success">{isActive?"-":"+"}</div>
                 </div>
                    {isActive && <div className="accordian-content mt-3 fs-5 lh-lg">{content}</div>}
                    <hr className="mt-4 border-1"/>
                 </div>
              </div>
        }
      </>
    )
}

export default Accordian
