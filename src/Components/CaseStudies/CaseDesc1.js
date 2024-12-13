const CaseDesc1 = () => {
  return (
   <section>
      <div className="row">
          <div className="col-sm-6 casestudy-separate p-3">
            <p className="text-white">CASE STUDY : 1</p> 
            <p>Business Process Optimization and Growth Strategy for a Manufacturing Company</p>
          </div>
          <div className="col-sm-6 p-0">
              <img src="/Images/Casestudies/Case-1.jpeg" alt="No-Image" className="w-100" style={{height:"300px"}}/>
          </div>
      </div>
      <div className="p-3 p-sm-5">
        <p className="fw-bold fs-5">About Client:</p>
        <ul>
          <li>A mid-sized manufacturing company seeking to streamline operations and identify opportunities for growth.</li>
        </ul>
        <p className="fw-bold fs-5">Services Utilized:</p>
        <ul className="lh-lg">
            <li>Existing Business Analysis: Conducted an in-depth analysis of the company’s operations, identifying inefficiencies in the supply chain and production process.</li>
            <li>Lean Layout Preparation in 2D: Designed a new floor layout in 2D, optimizing production flow and minimizing bottlenecks.</li>
            <li>Power BI Report Preparation: Developed a comprehensive Power BI dashboard to monitor production data, track KPIs, and make data-driven decisions.</li>
            <li>New Business Development Data Analysis: Provided market analysis and growth projections based on their target market, helping the company expand into new geographic areas.</li>
        </ul>
        <p className="fw-bold fs-5">Outcome:</p>
        <ul className="lh-lg">
            <li>Reduced operational costs by 15% due to process optimizations.</li>
            <li>Improved production efficiency by 20% through layout redesign.</li>
            <li>Identified key growth opportunities leading to an expansion plan for new products and markets.</li>
        </ul>
      </div>
   </section>
  )
}

export default CaseDesc1
