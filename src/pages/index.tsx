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

const HomePage = () => {
  console.log("");
  const markers = [
    { title: "Location 1", lat: 40.74285, lng: -73.98231 },
    // Add more locations as needed
  ];
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div className="hero-bg-image"></div>
      {/* Navigation Bar */}
      <Navigation />
      {/* Hero Section */}
      <div className="text-center p-4 mb-8">
        {/* <h1 className="text-3xl text-textColor-paragraph-color font-light courier-font pb-2 tracking-[.5rem]">
          BARBERSHOP
        </h1> */}
        <p className="text-textColor-paragraph-color leading-8 text-lg sort-font font-thin">
          Step into a world of timeless style and grooming excellence at our
          premier barber shop. Our commitment to the craft of barbering is
          matched only by our dedication to your unique sense of style and
          well-being. From classic cuts to modern trends, our skilled barbers
          are here to curate a personalized experience that leaves you feeling
          confident and refreshed.
        </p>
        <div className="block">
          <button className="text-white">Book Now</button>
        </div>
      </div>
      {/* Owner Section */}
      <div className="text-white p-4 text-center">
        <div>
          <Image src={BarberOwner} alt="Barber Owner" />
        </div>
        <div>
          <div className="pt-4 text-left">
            <h1 className="courier-font text-lg text-textColor-orange-color font-black uppercase">
              owner
            </h1>
            <p className="text-2xl text-left leading-8 sort-font font-thin text-textColor-dark-green great-vibes">
              Alex Smith
            </p>
          </div>
          <div>
            <p className="text-textColor-paragraph-color text-left leading-8 text-lg sort-font font-thin">
              Meet Alex, a 25-year-old self-taught hairdresser with a true
              entrepreneurial spirit. With a passion for hair and an unwavering
              determination to follow his dreams, he embarked on a remarkable
              journey that led him to open his very own hairdressing business.
              Today, Alex's salon is a testament to his talent and hard work, as
              he diligently tends to each client's needs with a personal touch.
            </p>
          </div>
        </div>
      </div>
      {/* Gallery Images */}
      <div className="p-4">
        <div>
          <div className="pb-4">
            <Image src={Image1} alt="Image1" />
          </div>
          <div className="pb-4">
            <Image src={Image2} alt="Image2" />
          </div>
          <div className="pb-4">
            <Image src={Image3} alt="Image3" />
          </div>
          <div className="pb-4">
            <Image src={Image4} alt="Image4" />
          </div>
          <div className="pb-4">
            <Image src={Image5} alt="Image5" />
          </div>
          <div className="pb-4">
            <Image src={Image6} alt="Image6" />
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="p-4">
        <div className="pb-4">
          <h1 className="courier-font text-lg text-textColor-orange-color font-black">
            SERVICES
          </h1>
          <p className="text-2xl text-left leading-8 sort-font font-thin text-textColor-dark-green great-vibes">
            Crafting Timeless Styles, Redefining Confidence.
          </p>
          <p className="text-base text-textColor-paragraph-color sort-font leading-7">
            Discover our range of top-notch services, from classic haircuts to
            modern styling and beard grooming.
          </p>
        </div>

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
      <div className="p-4">
        <div className="mb-4">
          <h1 className="courier-font text-lg text-textColor-orange-color font-black uppercase">
            contact
          </h1>
          <p className="text-2xl text-left leading-8 sort-font font-thin text-textColor-dark-green great-vibes">
            Connecting with Us Is Just a Phone Call or Email Away!
          </p>
        </div>

        <div className="text-base text-textColor-paragraph-color sort-font leading-7">
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
        <div className="uppercase text-textColor-paragraph-color font-semibold tracking-[0.10rem] courier-font ">
          <p>MON: 10 AM - 8 PM</p>
          <p>TUE: 10 AM - 8 PM</p>
          <p>WED: 10 AM - 8 PM</p>
          <p>THU: 10 AM - 8 PM</p>
          <p>FRI: 10 AM - 8 PM</p>
          <p>SAT: 10 AM - 8 PM</p>
          <p>SUN: CLOSED</p>
        </div>
      </div>
      <div className="p-4">
        <h1 className="courier-font text-lg text-textColor-orange-color font-black uppercase">
          location
        </h1>
        <p className=" mb-8 text-2xl text-left leading-8 sort-font font-thin text-textColor-dark-green great-vibes">
          Find Us in the Heart of the City for Easy Access.
        </p>
        <div>
          <Map markers={markers} />
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
