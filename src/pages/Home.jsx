import React, {useContext} from "react";
import Card from "../components/Card";
import "./style.css";
import Ads from "../components/Ads/ads";
import Advertising from "../components/Advertising/advertising";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Ctx from "../Ctx";
import food from "../assets/data.json";


import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/swiper-bundle.min.css";


import { Pagination, Navigation} from "swiper";




export default ({data}) => {
  const {visibleGoods} = useContext(Ctx);
  // console.log(visibleGoods);
    return <>
    <h1>Главная страница</h1>
    <Link to="/catalog"><button className="btn">Перейти в каталог</button></Link>
    <Ads/>
        <Swiper
        
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >   
      
         {food.slice(0,12).map((el, i ) => (
          <SwiperSlide key={el._id}><Link to={`/catalog/${el._id}`} key={el._id}>
          <Card key={"card_" + i} {...el}/> 
          </Link></SwiperSlide>

         ))}
        
      </Swiper>
    
      <Advertising/>
      
  
    </>
}
