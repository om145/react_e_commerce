import React from 'react';
import "./About.css" ;

const About = () => {
  return (
    <div className='about-content'>
      <h3 className='about-title'>About Us</h3>
      <h4 className='about-heading'>Introduction </h4>
      <p className='about-detail'>
        PurchasePlaza is a one stop shop for all your fashion and lifestyle
        needs. Being India's largest e-commerce store for fashion and lifestyle
        products, PurchasePlaza aims at providing a hassle free and enjoyable
        shopping experience to shoppers across the country with the widest range
        of brands and products on its portal. The brand is making a conscious
        effort to bring the power of fashion to shoppers with an array of the
        latest and trendiest products available in the country
      </p>
      <h4 className='about-heading'>Value proposition </h4>
      <p className='about-detail'>
        PurchasePlaza's value proposition revolves around giving consumers the
        power and ease of purchasing fashion and lifestyle products online.
        Offerings such as the largest in-season product catalogue, 100%
        authentic products, cash on delivery and 30 day return policy make
        PurchasePlaza, the preferred shopping destination in the country. To make
        online shopping easier for you, a dedicated customer connect team is on
        standby to answer your queries 24x7.
      </p>
      <h4 className='about-heading'>Brands </h4>
      <p className='about-detail'>
        PurchasePlaza understands its shoppers' needs and caters to them with
        choice of apparel, accessories, cosmetics and footwear from over 500
        leading Indian and international brands. Prominent brands include
        Adidas, Nike, Puma, Catwalk, Inc 5, United Colors of Benetton, FCUK,
        Timberland, Avirate, FabIndia and Biba to name a few. You can also shop
        from some recently introduced labels such as - Roadster, Sher Singh,
        Dressberry, Kook N Keech and ETC.
      </p>

      <h4 className='about-heading'>Recognitions </h4>
      <ul className='about-detail'>
        <li>Awarded 'Fashion eRetailer of the Year 2013' by Franchise India – Indian eRetail Awards</li>
        <li>Awarded 'Best E-commerce Website for 2012' by IAMAI – India Digital Awards</li>
        <li>
        Awarded 'Images Most Admired Retailer of the Year: Non–Store Retail' for 2012 by Images Group</li>
        <li>Awarded 'Best E-commerce Partner of the year 2011-12' by Puma India</li>
      </ul>
    </div>
  )
}

export default About
