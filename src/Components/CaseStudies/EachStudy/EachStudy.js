const EachStudy = ({ title, aboutClient, services, outcome, image }) => {
    return (
      <section className="common-bg p-3 p-sm-5">
        <p className="title mb-4">{title}</p>
        <div>
          <h2 className="subtitle">About Client:</h2>
          <ul className="lh-lg justify-text">
            <li>{aboutClient}</li>
          </ul>
  
          <h2 className="subtitle">Services Utilized:</h2>
          <ul className="lh-lg justify-text">
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
  
          <h2 className="subtitle">Outcome:</h2>
          <ul className="lh-lg justify-text">
            {outcome.map((result, idx) => (
              <li key={idx}>{result}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default EachStudy;
  
