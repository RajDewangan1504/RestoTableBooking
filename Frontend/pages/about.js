import Layout from "../components/Layout";
import MyButton from "../components/MyButton";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AboutIconBlock from "../utils/AboutIconBlock";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function about() {
  return (
    <Layout title="About Us" subtitle="Why Choose Us?">
      <section className="container-wrapper flex items-center md:flex-col h-full py-2">
          <div className="flex-1">
            <img className="" src="./images/about-img.png" alt="about-img" />
          </div>
          <div className="flex-1 space-y-5 text-left md:text-center py-4">
            <h3 className="text-4xl font-semibold">Best Food In The Country</h3>
            <p className="text-base text-gray-500">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore, Sequi Corrupti Corporis Quaerat Voluptatem Ipsam Neque Labore Modi Autem, Saepe Numquam Quod Reprehenderit Rem? Tempora Aut Soluta Odio Corporis Nihil!</p>
            <p className="text-base text-gray-500">Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam, Nemo. Sit Porro Illo Eos Cumque Deleniti Iste Alias, Eum Natus.</p>
            <div className="flex flex-wrap gap-4">
              <AboutIconBlock Icon={DirectionsCarIcon} text="Free Delivery"/>
              <AboutIconBlock Icon={AttachMoneyIcon} text="Easy Payments"/>
              <AboutIconBlock Icon={HeadsetMicIcon} text="24/7 Service"/>
            </div>
            <MyButton text="Learn More"/>
          </div>
      </section>
    </Layout>
  )
}
