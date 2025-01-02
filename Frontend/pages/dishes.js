import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Products from "../components/Products";

export default function dishes() {
  const popularDishes = useSelector(state => state.popularDishes);
  console.log("popularDishes",popularDishes);

  return (
    <Layout title="Our Dishes" subtitle="Popular Dishes">
      <Products items={popularDishes}/>
    </Layout>
  )
}
