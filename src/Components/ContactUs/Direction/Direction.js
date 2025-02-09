import "./Direction.css";
const Direction = () => {
  return (
    <>
      <p className="fw-bold fs-4 text-success">DIRECTIONS</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.0118384322!2d78.48430727322655!3d9.84937207561217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00fac5569d6235%3A0x9714223140ab9f2c!2sSabari%20Maternity%20And%20Children%20Hospital!5e0!3m2!1sen!2sin!4v1737106136953!5m2!1sen!2sin" className='direction w-100' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Direction
