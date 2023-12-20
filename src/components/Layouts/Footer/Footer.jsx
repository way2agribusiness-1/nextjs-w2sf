import {
  Agriculture,
  Business,
  Call,
  FacebookRounded,
  Grass,
  Instagram,
  LinkedIn,
  LocalGroceryStore,
  Pinterest,
  LocationOn,
  Mail,
  PhoneAndroid,
  Psychology,
  WorkspacePremium,
  YouTube,
  Twitter,
  Yard,
  StoreMallDirectory,
  WhatsApp,
  Apple,
} from '@mui/icons-material';
import './footer.module.css';
import React from 'react';
import SpaIcon from '@mui/icons-material/Spa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      {/* name & links */}
      <div>
        <div className="footerHeadingBox">
          <h3 className="footerHeading">Way2SmartFarmer</h3>
          <div>
            <div className="followUsBox">
              <h4 className="mr-2">Follow Us</h4>
              <ul className="footerSocialLink">
                <li className="mr-2">
                  <Link
                    href="https://www.facebook.com/way2agribusiness/"
                    title="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookRounded className="socialIcon" />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href={'https://wa.me/9449004956'}
                    title="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsApp className="socialIcon" />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href="https://www.instagram.com/way2agribusiness/"
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="socialIcon" />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href="https://www.linkedin.com/feed/?trk=homepage-basic_signin-form_submit"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn className="socialIcon" />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href="https://twitter.com/Way2agribusines"
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="socialIcon" />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href="https://www.youtube.com/channel/UCEpkh59M-MDOj0TH6lxRpMg"
                    title="Youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <YouTube className="socialIcon" />
                  </Link>
                </li>
                <li className="mr-2">
                  <Link
                    href="https://in.pinterest.com/Way2Agritech/_saved/"
                    title="Pinterest"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Pinterest className="socialIcon" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* main box */}
      <div className="footerMain">
        {/* contact us box */}
        <div className="footerContact">
          <h6 className="footerMainHeading">Contact Us</h6>
          <div className="flex flex-row mb-3 ">
            <LocationOn className="contactUsIcons" />
            <div>
              <span className="footerLink text-justify">
                <Link
                  href="https://www.google.com/maps/place/Way2Agribusiness+India+Pvt+Ltd/@13.015956,77.54541,15z/data=!4m6!3m5!1s0x3bae234a43de2765:0x4dc2c8416831cc0!8m2!3d13.0159559!4d77.5454099!16s%2Fg%2F11b6llkwn7?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ಕೃಷಿ ಉದ್ದಿಮೆ ಕೇಂದ್ರ/ Agribusiness Center # 636, BDA Block 2,
                  APMC (RMC) Yard, Yeshwanthpura, Bengaluru - 560022
                </Link>
              </span>
            </div>
          </div>
          <div className="flex flex-row mb-3 ">
            <Call className="contactUsIcons" />
            <div>
              <span className="footerLink">
                <Link href="tel:9449004956">9449004956</Link>
              </span>
              <br />
              <span className="footerLink">
                <Link href="tel:8277078435">8277078435</Link>
              </span>
              <br />
              <span className="footerLink">
                <Link href="tel:8995000388">8095000388</Link>
              </span>
              <br />
              <span className="footerLink">
                <Link href="tel:080 24484173">080-24484173</Link>
              </span>
            </div>
          </div>
          <div className="flex flex-row mb-3">
            <Mail className="h-5 w-5 text-yellow-100 mr-2" />
            <div>
              <span className="footerLink footerMails">
                <Link href="mailto:dr.prasannad@way2agribusiness.com">
                  dr.prasannad@way2agribusiness.com
                </Link>
              </span>
              <br />
              <span className="footerLink footerMails">
                <Link href="mailto:way2agritech@way2agribusiness.com">
                  way2agritech@way2agribusiness.com
                </Link>
              </span>
              <br />
              <span className="footerLink footerMails">
                <Link href="mailto:way2agritech@gmail.com">
                  way2agritech@gmail.com
                </Link>
              </span>
            </div>
          </div>
        </div>
        {/* location box */}
        <div className="locationBox">
          <h6 className="footerMainHeading">Location</h6>
          <div className="overflow-auto locationFrame">
            {/* Embedded location iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.618881252434!2d77.54541!3d13.015956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae234a43de2765%3A0x4dc2c8416831cc0!2sWay2Agribusiness%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1686564913140!5m2!1sen!2sus"
              width="400"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="google maps link"
            ></iframe>
          </div>
        </div>
        {/* online services */}
        <div className="footerServiceBox">
          <h6 className="footerMainHeading">Our Online Services</h6>
          <div className="footerServiceLinks">
            <div className="footer-service-web">
              <div className="mr-1">
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <Business className="contactUsIcons" />
                    <Link
                      href="https://www.way2agribusiness.com"
                      title="https://www.way2agribusiness.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Corporate Website
                    </Link>
                  </div>
                  <Link
                    href="https://www.way2agribusiness.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.way2agribusiness.com
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <LocalGroceryStore className="contactUsIcons" />
                    <Link
                      href="https://www.way2agritech.com"
                      title="https://www.way2agritech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agri Input Brand
                    </Link>
                  </div>
                  <Link
                    href="https://www.way2agritech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.way2agritech.com
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <Apple className="contactUsIcons" />
                    <Link
                      href="https://www.way2foods.in"
                      title="https://www.way2foods.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agri Output Brand
                    </Link>
                  </div>
                  <Link
                    href="https://www.way2foods.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.way2foods.in
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <LocalGroceryStore className="contactUsIcons" />
                    <Link
                      href="https://www.karnatakaagribusiness.com"
                      title="https://www.karnatakaagribusiness.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Social Media Web
                    </Link>
                  </div>
                  <Link
                    href="https://www.karnatakaagribusiness.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.karnatakaagribusiness.com
                  </Link>
                </div>
              </div>
              <div className="mr-1">
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <Agriculture className="contactUsIcons" />
                    <Link
                      href="https://powertiller.in"
                      title="https://powertiller.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Farm Machinery
                    </Link>
                  </div>
                  <Link
                    href="https://powertiller.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.powertiller.in
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <Grass className="contactUsIcons" />
                    <Link
                      href="https://drsoilhealth.com"
                      title="https://drsoilhealth.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PGR & PPP Products
                    </Link>
                  </div>
                  <Link
                    href="https://drsoilhealth.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.drsoilhealth.com
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <Yard className="contactUsIcons" />
                    <Link
                      href="https://urbanagriculture.in"
                      title="https://urbanagriculture.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terrace Gardening
                    </Link>
                  </div>
                  <Link
                    href="https://urbanagriculture.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.urbanagriculture.in
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    {/* <FontAwesomeIcon
                      icon={faCarrot}
                      className="contactUsIcons"
                    /> */}
                    <SpaIcon className="contactUsIcons" />
                    <Link
                      href="https://way2vegetables.com"
                      title="https://way2vegetables.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vegetables Online
                    </Link>
                  </div>
                  <Link
                    href="https://way2vegetables.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.way2vegetables.com
                  </Link>
                </div>
              </div>
              <div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <LocalGroceryStore className="contactUsIcons" />
                    <Link
                      href="https://way2groceries.in"
                      title="https://way2groceries.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Groceries Online
                    </Link>
                  </div>
                  <Link
                    href="https://way2groceries.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.way2groceries.in
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <WorkspacePremium className="contactUsIcons" />
                    <Link
                      href="https://way2smartfarmer.com"
                      title="https://way2smartfarmer.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Compare & Select
                    </Link>
                  </div>
                  <Link
                    href="https://way2smartfarmer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.way2smartfarmer.com
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <StoreMallDirectory className="contactUsIcons" />
                    <Link
                      href="https://www.farmneedz.com/"
                      title="https://www.farmneedz.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IndiaMart Platform
                    </Link>
                  </div>
                  <Link
                    href="https://www.farmneedz.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.farmneedz.com
                  </Link>
                </div>
                <div className="footer-icon-link">
                  <div className="serviceLinkBox footerLink">
                    <Psychology className="contactUsIcons" />
                    <Link
                      href="https://way2agriintel.com"
                      title="https://way2agriintel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Agri Intelligence
                    </Link>
                  </div>
                  <Link
                    href="https://way2agriintel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.way2agriintel.com
                  </Link>
                </div>
              </div>
            </div>
            {/* mobile apps */}
            <div className="footer-service-mobile">
              <div className="footer-icon-link">
                <div className="serviceLinkBox footerLink">
                  <PhoneAndroid className="contactUsIcons" />
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.wayagritech.way2agritech"
                    title="https://play.google.com/store/apps/details?id=com.wayagritech.way2agritech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agri Input Mobile App
                  </Link>
                </div>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.wayagritech.way2agritech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  play.google.com/store/apps/...
                </Link>
              </div>
              <div className="footer-icon-link">
                <div className="serviceLinkBox footerLink">
                  <PhoneAndroid className="contactUsIcons" />
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.way2abi.way2abi"
                    title="https://play.google.com/store/apps/details?id=com.way2abi.way2abi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agri FBI Mobile App
                  </Link>
                </div>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.way2abi.way2abi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  play.google.com/store/apps/...
                </Link>
              </div>
              <div className="footer-icon-link">
                <div className="serviceLinkBox footerLink">
                  <PhoneAndroid className="contactUsIcons" />
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.ionicframework.way2market617518"
                    title="https://play.google.com/store/apps/details?id=com.ionicframework.way2market617518"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agri CM Mobile App
                  </Link>
                </div>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.ionicframework.way2market617518"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  play.google.com/store/apps/...
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* copyright */}
      </div>
      {/* copyright */}
      <div className="mt-4 mb-2 text-center">
        <p>
          Copright © 2023 Way2Agribusines India Pvt Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
