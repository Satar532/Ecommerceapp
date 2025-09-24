import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
  import{useSelector} from'react-redux'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slide({width}) {
    const TopTrendProduct=useSelector(state=>state.Procuct.PrductList)
  return (
    <div className='slidemain' >
    <h1 style={{marginTop:"2em",marginLeft:"1em"}}>Top Trending Product</h1>
    <Swiper

      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={width}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log('slide change')}
    >   
        <h1></h1>
        <div className="trend item" style={{width:"100px", }} >
          
          {TopTrendProduct?.map((item,index)=>(
        <SwiperSlide style={{width:"100px",display:"flex",justifyContent:"center" }}>  <div  key={index} className="item" style={{border:"1px solid ",width:"300px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"3px",boxShadow:"0.1px 0.1px 0.1px 0.1px gray",marginTop:"3em",padding:'1em'}}> 
           <img key={item.image} src={item.image}  width="150px" height="140px" alt="" />
           <p key={item.title}>{item.title}</p>
           <p key={item.description}>{item.description.slice(1,50)}</p>
           <span key={item.price}> Rs: {item.price}</span> 
           <p key={item.rating.rate}>Rating:{item.rating.rate}</p>
         </div>   </SwiperSlide>
          
          ))}

        </div>
     
      
      
    </Swiper>
     </div>
  );
};