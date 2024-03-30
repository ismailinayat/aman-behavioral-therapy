import React from "react";
import Form from "../contact/Form";
import { POST } from "../contact/ContactForm";
import ContactPageForm from "./ContactPageForm";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import ContactBanner from "./ContactBanner";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
const ContactPage = () => {
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <SectionHeading text="Contact Us" />
        <div className="contact__container">
          <div className="contact__image">
            <Image src="/team/hero-4.jpg" width={1000} height={1000} alt="" />
          </div>
          <div className="contact__form">
            <ContactPageForm post={POST} />
          </div>
        </div>

        <div className="banners">
          <ContactBanner
            titleText="Call Us"
            TitleIcon={LocalPhoneIcon}
            bannerInfo="(669) 261-2600"
          />

          {/* <ContactBanner
            titleText="Location"
            TitleIcon={FmdGoodIcon}
            bannerInfo="121 Rock Sreet, 21 Avenue, New York, NY 92103-9000"
          /> */}

          <ContactBanner
            titleText="Hours"
            TitleIcon={QueryBuilderIcon}
            bannerInfo="Mon to Fri …… 9:00 am to 5:00 pm, Sat …… By appointment, Sun …… Closed"
          />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
