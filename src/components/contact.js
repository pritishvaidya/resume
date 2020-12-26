import React from 'react';
import MailIcon from '../assets/mail.svg';
import MobileIcon from '../assets/mobile.svg';
import GlobeIcon from '../assets/globe.svg';
import LocationIcon from '../assets/location.svg';

const Contact = ({ field, value }) => (
  <div className="mb-6 md:mb-10">
    <h1 className="item-header md-5">{field}</h1>
    <span className="flex my-2 text-primary-900 tracking-widest items-center">
    {field === 'email' && (
      <>
        <MailIcon className="contact-icon" />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
      {field === 'phone' && (
        <>
          <MobileIcon className="contact-icon" />
          <a className="contact-link" href={`tel:${value}`} title="phone">
            {value}
          </a>
        </>
      )}
      {field === 'website' && (
        <>
          <GlobeIcon className="contact-icon" />
          <a
            className="contact-link"
            target="_blank"
            href={value}
            rel="noopener noreferrer"
            title="website"
          >
            Personal Site
          </a>
        </>
      )}
      {field === 'location' && (
        <>
          <LocationIcon className="contact-icon" />
          <a className="contact-link" target="_blank" rel="noreferrer" href={`http://www.google.com/maps/place/32.000240,76.307690`}>{value}</a>
        </>
      )}
  </span>
  </div>
);

export default Contact;
