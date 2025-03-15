import SocialMedia from './SocialMedia';
import "./Footer.css";
import QuickLinks from './QuickLinks';
import FooterContact from './FooterContact';

const Footer = () => {
  return (
    <section className='mt-0 footer p-5 row gy-4 gy-sm-5 justify-content-between gx-0'>
       <div className='col-md-6 col-xl-4'>
        <p className='fw-bold fs-3 mb-1 mt-2 title-color'>FOLLOW US</p>
        <p className='fw-semibold'>Get Involved with Online</p>
        <SocialMedia/>
       </div>
       <div className='col-md-6 col-xl-4'>
         <QuickLinks/>
       </div>
       <div className='col-xl-4'>
         <FooterContact/>
       </div>
    </section>
  ) 
}

export default Footer
