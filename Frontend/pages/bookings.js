import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BookingItems from "../components/BookingItems";

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
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Transform booking data for local state
    const bookingData = bookings.map((booking) => ({
      id: booking._id,
      name: booking.name,
      contact: booking.contact,
      date: new Date(booking.date).toLocaleDateString(),
      time: booking.time || "N/A",
      guests: booking.guests,
    }));

    setMenu(bookingData);
    setLoading(false);
  }, [bookings]);

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
