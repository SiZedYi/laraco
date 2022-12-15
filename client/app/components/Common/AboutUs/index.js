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
     <div className='why-choose'>
      <Row className='flex-row'>
        {data.map((item, index) => (
          <Col xs='12' lg='4' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='why-choose-content'>
            <img className='why-choose-img' key={index} src={item.icon}/>
            <h2 className='why-choose-heading' key={index}>{item.title}</h2>
            <p>{item.content}</p>
            </div>
          </Col>
        ))}
      </Row>
      <div className='section'>
        <img src='/images/banners/banner-2.jpg'/>
        <div  className='section-content'>
          <p>
            <p className='section-heading'>CÔNG TY DƯỢC LARA</p>
            <Row className='flex-row'>
              <Col xs='3' lg='12' className='order-lg-1 mb-3 px-3 px-md-2'>
                <i class="fa fa-briefcase" aria-hidden="true"></i>&emsp;
                Sản xuất dược liệu số lượng lớn <br/>
                </Col>
              <Col xs='3' lg='12' className='order-lg-2 mb-3 px-3 px-md-2'>
                <i class="fa fa-briefcase" aria-hidden="true"></i>&emsp;
                Hơn 300 mặt hàng giá gốc đầu nguồn, giao hàng tận nơi<br/>
              </Col>
              <Col xs='3' lg='12' className='order-lg-3 mb-3 px-3 px-md-2'>
                <i class="fa fa-briefcase" aria-hidden="true"></i>&emsp;
                Chuyên cung cấp sỉ các loại dược liệu<br/>
              </Col>
              <Col xs='3' lg='12' className='order-lg-4 mb-3 px-3 px-md-2'>
                <i class="fa fa-briefcase" aria-hidden="true"></i>&emsp;
                Đầy đủ giấy tờ CO,CQ, hoá đơn đầy đủ ! <br/>
              </Col>
            </Row>
          </p>
        </div>
      </div>
    </div>
   );
 };

 export default AboutUs;
