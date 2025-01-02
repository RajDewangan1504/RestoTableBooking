import MyButton from "./MyButton";
import ReactStars from "react-rating-stars-component";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";


export default function ProductsItem({item, products}) {
  const dispatch = useDispatch();

  const addToCartHandler = (id, value, price) => {
    dispatch(addToCart({id, value, products, price}))
  }

  return (
    <div className=" relative flex flex-col gap-2 items-center py-6 bg-white max-w-xs w-full h-full rounded-md shadow-lg hover:scale-105 transition-all duration-300">
      <div className="px-4 ">
        <div className="h-56">
          <img className="w-full h-full object-contain rounded-md" src={item.image} alt="product-img"/>
        </div>

        <div className="header-icon absolute top-6 right-6">
          <FavoriteIcon />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center px-5">
        <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
        <ReactStars
          count={5}
          value={item.rating}
          size={30}
          activeColor="#ffd700"
        />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-2xl text-secondary font-semibold">${item.price}</p>
        <div onClick={() => addToCartHandler(item.id, 1, item.price)} >
          <MyButton
            text="Add To Cart"/>
        </div>
      </div>
    </div>
  )
}
