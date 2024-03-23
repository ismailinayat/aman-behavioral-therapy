import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SectionHeading from "../SectionHeading";

function ContactForm() {
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   e.target[3].innerText = 'Sending ...'
  //   e.target[3].style.backgroundColor = 'grey'

  //   emailjs.sendForm(
  //       "service_qqj5iq9",
  //       "template_5t041ed",
  //       e.target,
  //       "user_KGITFgaKwgk0uI96i7oZm"
  //     )
  //     .then(
  //       (result) => {
  //         e.target[3].innerText = 'Send Email';
  //         e.target[3].style.backgroundColor = '#EA3A60'
  //         toast.success("Email Sent!");
  //         e.target.reset();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  return (
    <div id="contact">
      {/* <ToastContainer></ToastContainer> */}

      <section className="section">
        <div className="row">
          <SectionHeading text="Contact Us" />
          <div className="book">
            <div className="book__form">
              <div className="form__title">
                <h2>Get in Touch with Aman Behavioral Therapy</h2>
                <h4>Its easy. Just fill the form below.</h4>
              </div>
              <form className="form">
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="name"
                    placeholder="Full Name"
                    name="Name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    id="email"
                    placeholder="Email address"
                    required
                    name="Email"
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group">
                  <textarea
                    // type="text"
                    className="form__input"
                    id="message"
                    rows={4}
                    placeholder="Write your message"
                    required
                    name="Message"
                  />
                  <label htmlFor="message" className="form__label">
                    Write your message
                  </label>
                </div>

                <button className="btn btn--green u-margin-top-medium">
                  Send Email
                </button>
              </form>
            </div>

            <div className="contact">
              <div className="contact__info">
                <div className="heading">
                  <h3>Contact Information</h3>
                  {/* <p>
                    You can contact us on the following contact information.
                  </p> */}
                </div>

                <div className="info__container">
                  <div className="info phone">
                    <div className="icon phone__icon">
                      <LocalPhoneIcon />
                    </div>

                    <div className="phone__number">
                      <p className="number__1">+1-111-1111111</p>
                    </div>
                  </div>

                  <div className="info email">
                    <div className="icon email__icon">
                      <EmailIcon></EmailIcon>
                    </div>

                    <div className="email__mail">
                      <p>contact@amanaba.com</p>
                    </div>
                  </div>

                  <div className="info address">
                    <div className="icon address__icon">
                      <ApartmentIcon></ApartmentIcon>
                    </div>

                    <div className="address__address">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
