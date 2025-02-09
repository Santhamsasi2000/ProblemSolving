const Timings = () => {
  return (
    <section className='mb-5'>
      <p className='fw-bold fs-4 mb-4 text-success'>Opening Hours</p>
      <div className='p-3 border border-2 border-success rounded-4'>
        <div className=''>
          <p className='text-success'>Delivery & Caesarean</p>
          <div className='d-flex justify-content-between'>
            <p>Emergency</p>
            <p>24 Hours</p>
          </div>
        </div>
          <div className=''>
            <p className='text-success'>Maternity Consultation</p>
            <div className='d-flex justify-content-between'>
                <p>Monday-Saturday</p>
                <p>10.00 AM - 03.00 PM</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Sunday</p>
                <p>Closed</p>
            </div>
          </div>
          <div className=''>
            <p className='text-success'>Children Consultation</p>
            <p>(Monday-Sunday)</p>
            <div className='d-flex justify-content-between'>
                <p>Morning</p>
                <p>09.00 AM - 03.00 PM</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Evening</p>
                <p>06.00 PM - 09.00 PM</p>
            </div>
            <div className='d-flex justify-content-between'>
                <p>Emergency OP</p>
                <p>06.00 AM - 09.00 PM</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Timings;
