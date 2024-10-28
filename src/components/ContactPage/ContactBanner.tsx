import Image from "next/image";
import React from "react";

const ContactBanner = ({
  TitleIcon,
  titleText,
  bannerInfo,
}: {
  TitleIcon: any;
  titleText: string;
  bannerInfo?: string;
}) => {
  return (
    <div className="contact__banner">
      <div className="title">
        <div className="title__icon">
          <TitleIcon />
        </div>
        <div className="title__text">
          <h3>{titleText}</h3>
        </div>
      </div>

      {bannerInfo ? (
        <div className="info">
          <p>{bannerInfo}</p>
        </div>
      ) : (
        <div className="info">
          <div className="info__inner">
            <p>Mon to Fri:</p>
            <p>09:00AM - 06:00PM</p>
          </div>
          <div className="info__inner">
            <p>Saturday:</p>
            <p>09:00AM - 04:00PM</p>
          </div>
          <div className="info__inner">
            <p>Sunday:</p>
            <p>09:00AM - 02:00PM</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactBanner;
