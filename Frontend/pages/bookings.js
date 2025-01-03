import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import BookingItems from "../components/BookingItems";
import { initMenu } from "../features/menuSlice";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Transforming and dispatching booking data to the Redux store
    const bookingData = bookings.map((booking) => ({
      id: booking._id,
      name: booking.name,
      contact: booking.contact,
      date: new Date(booking.date).toLocaleDateString(),
      time: booking.time || "N/A",
      guests: booking.guests,
    }));
    dispatch(initMenu(bookingData));
    setLoading(false);
  }, [bookings, dispatch]);

  return (
    <Layout title="Booking Details" subtitle="View All Reservations">
      <div className="container-wrapper">
        {loading ? (
          <div className="text-center py-10">Loading booking details...</div>
        ) : (
          <div className="grid grid-cols-4 lg:grid-cols-2 md:flex flex-wrap gap-5 place-items-center justify-center py-10">
            {menu.map((item) => (
              <BookingItems key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
