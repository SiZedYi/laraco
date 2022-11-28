/**
 *
 * About Us
 *
 */

 import React from 'react';
 import { Row, Col } from 'reactstrap';

import data from './data.json';


 const AboutUs = props => {
   return (
     <div className='about'>
      <Row className='flex-row'>
        {data.map((item, index) => (
          <Col xs='12' lg='4' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='about-content'>
            <img className='about-img' key={index} src={item.icon}/>
            <h2 className='about-heading' key={index}>{item.title}</h2>
            <p>{item.content}</p>
            </div>
          </Col>
        ))}
      </Row>
      <div className='section'>
        <img src='/images/banners/banner-2.jpg'/>
        <div  className='section-content'>
          <p style={
            {color: "white",
            fontSize: "20px",
            lineHeight: "2.5"
          }
          }>
          <p className='section-heading'>CÔNG TY DƯỢC LARA</p>
            <i class="fa fa-briefcase" aria-hidden="true"></i> &emsp;Sản xuất dược liệu số lượng lớn <br/>
            <i class="fa fa-briefcase" aria-hidden="true"></i> &emsp;Hơn 300 mặt hàng giá gốc đầu nguồn, giao hàng tận nơi<br/>
            <i class="fa fa-briefcase" aria-hidden="true"></i> &emsp;Chuyên cung cấp sỉ các loại dược liệu<br/>
            <i class="fa fa-briefcase" aria-hidden="true"></i> &emsp;Đầy đủ giấy tờ CO,CQ, hoá đơn đầy đủ ! <br/>
            </p>
        </div>
      </div>
    </div>
   );
 };

 export default AboutUs;
