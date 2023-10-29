import React from "react";
import Navigation from "../../components/Layout/Navigation";
import BarberOwner from "../../public/BarberOwner.jpeg";
import Image from "next/image";
import Image1 from "../../public/1.png";
import Image2 from "../../public/2.jpeg";
import Image3 from "../../public/3.png";
import Image4 from "../../public/4.jpeg";
import Image5 from "../../public/5.jpeg";
import Image6 from "../../public/6.jpeg";
import ServiceCard from "../../components/ServiceCard";
import Map from "../../components/Map";
import Craftsmanship from "../../public/craftsmanship.png";
import { motion } from "framer-motion";

const HomePage = () => {
  console.log("");
  const markers = [
    { title: "Location 1", lat: 40.74285, lng: -73.98231 },
    // Add more locations as needed
  ];

  const scrollToSection = (sectionID: string) => {
    const section = document.getElementById(sectionID);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="hero-bg-image"></div>
      {/* Navigation Bar */}
      <div className="lg:mb-12">
        <Navigation scrollToTarget={scrollToSection} />
      </div>

      {/* Hero Section */}
      <div className="relative text-center p-4 mb-8 lg:max-w-3xl mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src={Craftsmanship}
            alt="Craftsmanship"
            width={700}
            height={1000}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-textColor-paragraph-color text-lg sort-font font-thin lg:text-xl"
        >
          Step into a world of timeless elegance and grooming excellence at our
          premier barber shop. Our unwavering commitment to the craft of
          barbering is matched only by our unwavering dedication to your unique
          sense of style, well-being, and satisfaction. From classic cuts to
          modern trends, our skilled barbers are here to curate a personalized,
          transformative experience that leaves you feeling confident.
        </motion.p>
        {/* <div className="block">
          <button className="text-white">Book Now</button>
        </div> */}
      </div>
      {/* Owner Section */}
      <div
        id="about"
        className="relative text-white p-4 text-center lg:flex flex-row lg:w-[80%] mx-auto gap-20 pb-40 pt-40"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={BarberOwner}
            alt="Barber Owner"
            width={2200}
            height={1600}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="pt-4 text-left">
            <h1 className="courier-font text-lg text-textColor-orange-color font-black uppercase">
              owner
            </h1>
            <p className="text-2xl text-left leading-8 sort-font font-thin text-textColor-dark-green great-vibes lg:text-3xl">
              Alex Smith
            </p>
          </div>
          <div>
            <p className="text-textColor-paragraph-color text-left leading-8 text-lg sort-font font-thin lg:text-xl">
              Meet Alex, a 25-year-old self-taught hairdresser with a true
              entrepreneurial spirit. With a passion for hair and an unwavering
              determination to follow his dreams, he embarked on a remarkable
              journey that led him to open his very own hairdressing business.
              Today, Alex&rsquo;s salon is a testament to his talent and hard
              work, as he diligently tends to each client&rsquo;s needs with a
              personal touch.
            </p>
          </div>
        </motion.div>
      </div>
      {/* Gallery Images */}
      <div id="gallery" className="p-4 lg:pb-40">
        <div className="flex flex-col sm:grid grid-cols-6 grid-rows-8 gap-4 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="row-span-3 col-start-1 row-start-3"
          >
            <Image src={Image5} alt="Image2" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-3 col-start-2 row-start-2"
          >
            <Image src={Image4} alt="Image3" className="h-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="row-span-2 col-start-2 row-start-5"
          >
            <Image src={Image3} alt="Image4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="row-span-3 col-start-3 row-start-5"
          >
            <Image src={Image2} alt="Image5" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="row-span-2 col-start-4 row-start-1"
          >
            <Image src={Image1} alt="Image6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="row-span-3 col-start-4 row-start-3"
          >
            <Image src={Image6} alt="Image6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="row-span-3 col-start-5 row-start-2"
          >
            <Image src={Image5} alt="Image6" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-start-6 row-start-3"
          >
            <Image src={Image4} alt="Image6" />
          </motion.div>
        </div>
      </div>
      {/* Services */}
      <div id="services" className="p-4 lg:w-[80%] mx-auto lg:pb-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-4 lg:text-center"
        >
          <h1 className="courier-font text-lg text-textColor-orange-color font-black">
            SERVICES
          </h1>
          <p className="text-2xl text-left leading-8 sort-font font-thin text-textColor-dark-green great-vibes lg:text-center text-3xl mt-4">
            Crafting Timeless Styles, Redefining Confidence.
          </p>
          <p className="text-base text-textColor-paragraph-color sort-font leading-7 lg:text-xl max-w-sm mx-auto mt-4">
            Discover our range of top-notch services, from classic haircuts to
            modern styling and beard grooming.
          </p>
        </motion.div>

        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ServiceCard
            title="Classic Haircut"
            price="$25"
            description=" Experience the timeless charm of a classic haircut. Our skilled barbers will give you a precision haircut that suits your style, whether it's a traditional gentlemen's cut or a modern twist on a classic look."
          />
          <ServiceCard
            title="Modern Styling"
            price="$35"
            description="Stay up to date with the latest trends in hair styling. Our barbers are well-versed in contemporary styles and can create a trendy and fashionable look that complements your personality."
          />
          <ServiceCard
            title="Beard Grooming"
            price="$15"
            description="Enhance your look with professional beard grooming. Our barbers are experts in sculpting and styling beards to perfection. Whether you prefer a well-trimmed beard or a more elaborate design, we've got you covered."
          />
          {/* Add more service cards as needed */}
        </div>
      </div>
      <div id="contact" className="p-4 lg:w-[80%] mx-auto lg:pb-40">
        <div className="lg:flex flex-row">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="pb-4 lg:w-[60%]"
          >
            <div className="mb-4">
              <h1 className="courier-font text-lg text-textColor-orange-color font-black uppercase">
                contact
              </h1>
              <p className="text-2xl text-left leading-8 sort-font font-thin text-textColor-dark-green great-vibes lg:text-3xl">
                Connecting with Us Is Just a Phone Call or Email Away!
              </p>
            </div>

            <div className="lg:flex flex-row gap-12">
              <div>
                <div className="text-base text-textColor-paragraph-color sort-font leading-7 lg:text-lg">
                  <p className="mb-2">123 Lexington Avenue</p>
                  <p className="mb-2">New York</p>
                  <p className="mb-2">(555) 123-4567</p>
                  <p className="mb-2">info.barber-alex@gmail.com</p>
                </div>

                <div className="flex flex-row gap-4 mb-4">
                  <div>
                    <a
                      href={"https://www.facebook.com/"}
                      target="_blank"
                      className="courier-font text-lg text-textColor-orange-color font-black uppercase cursor-pointer"
                    >
                      facebook
                    </a>
                    <div className="link-square"></div>
                  </div>
                  <div>
                    <a
                      href={"https://www.instagram.com/"}
                      target="_blank"
                      className="courier-font text-lg text-textColor-orange-color font-black uppercase cursor-pointer"
                    >
                      instagram
                    </a>
                    <div className="link-square"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="uppercase text-textColor-paragraph-color font-semibold tracking-[0.10rem] courier-font lg:text-lg ">
                  <p>MON: 10 AM - 8 PM</p>
                  <p>TUE: 10 AM - 8 PM</p>
                  <p>WED: 10 AM - 8 PM</p>
                  <p>THU: 10 AM - 8 PM</p>
                  <p>FRI: 10 AM - 8 PM</p>
                  <p>SAT: 10 AM - 8 PM</p>
                  <p>SUN: CLOSED</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full m-auto lg:w-[40%]"
          >
            <Map markers={markers} />
          </motion.div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="p-4">
          <div className="text-center">
            <p className="text-xs text-textColor-paragraph-color sort-font leading-7">
              © 2023 Barber. All rights reserved.
            </p>
            {/* add person who created page */}
            <p className="text-xs text-textColor-paragraph-color sort-font leading-7">
              Created by:{" "}
              <a
                href={"https://www.linkedin.com/in/alexander-smith-8b1a2b1b1/"}
                target="_blank"
                className="cursor-pointer underline"
              >
                Patrik Jurak
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
