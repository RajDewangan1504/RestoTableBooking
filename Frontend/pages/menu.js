import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import Products from "../components/Products";
import { initMenu } from "../features/menuSlice";
import BookingItems from "../components/BookingItems"

export const getStaticProps = async () => {
  const res = await fetch("https://resto-table-booking.vercel.app/api/bookings");
  const data = await res.json();
  return {
    props: {
      bookings: data, // Passing booking details as props
    },
  };
};

export default function Menu({ bookings }) {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.menu);

  useEffect(() => {
    // Map booking data to a format compatible with the existing component
    const bookingData = bookings.map((booking) => ({
      id: booking._id,
      name: booking.name,
      contact: booking.contact,
      date: new Date(booking.date).toLocaleDateString(),
      time: booking.time || "N/A",
      guests: booking.guests,
    }));

    // Dispatching the transformed data to the Redux store
    dispatch(initMenu(bookingData));
  }, [bookings, dispatch]);

  return (
    <Layout title="Booking Details" subtitle="View All Reservations">
      {/* <Products items={menu} /> */}
       <div className="container-wrapper">
            <div className="grid grid-cols-4 lg:grid-cols-2 md:flex flex-wrap gap-5 place-items-center justify-center py-10">
              {
                menu.map(item => (
                  <BookingItems
                    key={item.id}
                    item={item}
                    products={menu} 
                  />
                ))
              }
            </div>
            </div>
    </Layout>
  );
}
