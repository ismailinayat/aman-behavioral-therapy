import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SectionHeading from "../SectionHeading";
import { Resend } from "resend";
import { QueryEmail } from "../Email";
import Form from "./Form";
const resend: any = new Resend(process.env.NEXT_PUBLIC_RESEND);

export async function POST(
  userName: string,
  userEmail: string,
  userMessage: string
) {
  "use server";
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["contact@amanaba.com"],
      subject: "Query From Website",
      react: QueryEmail({ userName, email: userEmail, message: userMessage }),
    });
    console.log(data);
    return "success";
  } catch (error) {
    return "error";
  }
}
function ContactForm() {
  return (
    <div id="contact">
      <section className="section">
        <div className="row">
          <SectionHeading text="Contact Us" />
          <div className="book">
            <div className="book__form">
              <div className="form__title">
                <h2>
                  We are here to help. Whether you have questions, need more
                  information, or are ready to start the journey with Aman
                  Behavioral Agency, we invite you to reach out to us. Our team
                  is dedicated to providing the support and guidance you need.
                </h2>
                {/* <h4>Its easy. Just fill the form below.</h4> */}
              </div>
              <Form post={POST}></Form>
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
                      <p className="number__1">(669) 261-2600</p>
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

                  {/* <div className="info address">
                    <div className="icon address__icon">
                      <ApartmentIcon></ApartmentIcon>
                    </div>

                    <div className="address__address">
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div> */}
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
