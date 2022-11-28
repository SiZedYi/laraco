/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col, Nav } from 'reactstrap';

import actions from '../../actions';
import AboutUs from '../../components/Common/AboutUs';
import banners from './banners.json';
import Button from '../../components/Common/Button';

class Homepage extends React.PureComponent {
  render() {
    const {
      history,
    } = this.props;

    return (
    <div className='homepage'>
          <div className='banner'>
            <div  className='banner-title'>
              <div className='title'>DƯỢC LIỆU UY TÍN HÀNG ĐẦU VIỆT NAM</div>
              <div className='subtitle'>Chúng tôi tự hào mang đến cho khách hàng những sản phẩm tốt nhất trên
              thị trường với giá ưu đãi nhất</div>
              <Button
              variant='primary'
              text='xem thêm'
              className='bag-btn home-btn'
              onClick={() => history.push("../shop")}
              />
            </div>
            <div className='home-img slide-in'>
              <img src={banners[0].imageUrl} />
            </div>
          </div>
      <AboutUs/>
    </div>
  );
  }
}

const mapStateToProps = state => {
  return {
    products: state.product.storeProducts,
    isLoading: state.product.isLoading,
    authenticated: state.authentication.authenticated
  };
};

export default connect(mapStateToProps, actions)(Homepage);

    // <div className='homepage'>
    //   {/* Test */}
    //   <Row className='flex-row'>
    //     <Col xs='12' lg='7' className='order-lg-2 mb-3 px-3 px-md-2'>
    //       <div className='home-carousel'>
    //         <CarouselSlider
    //           swipeable={true}
    //           showDots={true}
    //           infinite={true}
    //           autoPlay={true}
    //           slides={banners}
    //           responsive={responsiveOneItemCarousel}
    //         >
    //           {banners.map((item, index) => (
    //             <img key={index} src={item.imageUrl} />
    //           ))}
    //         </CarouselSlider>
    //       </div>
    //     </Col>
    //     {/* <Col xs='12' lg='1' className='order-lg-1 mb-3 px-3 px-md-2'></Col> */}
    //     <Col xs='12' lg='5' className='order-lg-1 mb-3 px-3 px-md-2'>
    //     <div className='slider'>
    //       CHÚNG TÔI MANG ĐẾN NHỮNG SẢN PHẨM TỐT NHẤT CHO SỨC KHỎE CỦA BẠN
    //             </div>
    //     </Col>
    //   </Row>
    //   <Row className='flex-row'>
    //     <span style={{marginBottom: 50}}></span>
    //   </Row>
    // </div>