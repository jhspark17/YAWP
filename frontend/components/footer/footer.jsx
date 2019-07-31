import React from 'react'

const Footer = () => {
  return (
    <div className="wrap">
      <div className="link-wrap">
        <a className="link-color-footer" href="https://github.com/jhspark17">
          <i className="fab fa-github fa-2x" />
        </a>
      <a className="link-color-footer"
        href="https://www.linkedin.com/in/joseph-park-94b234111/"
      >
        <i className="fab fa-linkedin fa-2x" />
      </a>
     
    
      <a
        className="link-color-footer"
        href="https://angel.co/jhspark17?public_profile=1"
      >
        <i className="fab fa-angellist fa-2x" />
      </a>
      </div>
      <img src="https://biz.yelp.com/landing/static/footer_cityscape-573fa19c843556eac5a998fc6d1f80f8.png" />
    </div>
    // </div>

       // <div className="footer"> // 100% width // flex 
    //   <div className="footer-spread">
    //     <a>
    //       <i></i>
    //     </a>
    //     <a>
    //       <i></i>
    //     </a>
    //   </div> // flex 

    // </div>
  );
};

export default Footer;