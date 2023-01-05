import React from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { TbSortAscending2 } from "react-icons/tb";
import { BiCategory, BiFileFind, BiPhoneCall } from "react-icons/bi";
import { BsUiChecks } from "react-icons/bs";

import "./AboutUs.css";
import useTitle from "../../hooks/useTitle";
const AboutUs = () => {
  useTitle("About Us");
  return (
    <div>
      <div className="banner py-5">
        <p>Our mission is to find the best </p>
        <p>property for you.</p>
      </div>
      <div className="d-flex justify-content-center my-5">
        <div className="style"></div>
        <p className="text-center about-header px-2">Reason to Choose us </p>
        <div className="style"></div>
      </div>
      <div className="container">
        <div className="feature-container">
          <div className="feature-styling">
            <BiMessageSquareAdd className="about-section-icon" />
            <p>Owner can easily add their property</p>
            <span>
              "By using this website property owner can easily add their
              property with property specification and details."
            </span>
          </div>
          <div className="feature-styling">
            <TbSortAscending2 className="about-section-icon" />
            <p>Renter Can sort property Easily</p>
            <span>
              Renter can easily sort their desire property based on the property
              specification and details."
            </span>
          </div>
          <div className="feature-styling">
            <BiCategory className="about-section-icon" />
            <p>Categorized property in different category</p>
            <span>
              "All the property are categorized in their respective category for
              easily foundable by renter."
            </span>
          </div>
          <div className="feature-styling">
            <BiFileFind className="about-section-icon" />
            <p>Help to find best property in your desire area</p>
            <span>
              "It will help renters to found their desire property in their
              selected area or where they want to rent."
            </span>
          </div>
          <div className="feature-styling">
            <BiPhoneCall className="about-section-icon" />
            <p>Communication between property owner & renter</p>
            <span>
              "The renter can easily communicate with the property owner through
              phone call, email and messaging."
            </span>
          </div>
          <div className="feature-styling">
            <BsUiChecks className="about-section-icon" />
            <p>Choose your desire property & save your time</p>
            <span>
              "This application will help you to choose your desire property
              from your home and save your time."
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
