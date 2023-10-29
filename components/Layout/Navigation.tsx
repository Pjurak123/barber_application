import React from "react";
import CompanyLogo from "../../public/barber-shop-logo.svg";
import Image from "next/image";
import CurveLeft from "../../public/stripe_left_logo.svg";
import CurveRight from "../../public/stripe_right_logo.svg";
import useDeviceType, { DeviceType } from "../../hooks/useDeviceType";
import { motion } from "framer-motion";

type NavigationProps = {
  scrollToTarget: (target: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ scrollToTarget }) => {
  const deviceType = useDeviceType();

  const animation = {};
  return (
    <>
      {/* <div className="navigation"></div> */}
      <div className="flex justify-center z-20 p-4 lg:w-[80%] mx-auto justify-between text-white relative cursor-pointer">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex content-center"
        >
          <Image src={CurveRight} alt="Curve Right" width={60} height={20} />
        </motion.div>
        {deviceType == DeviceType.Desktop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row items-center gap-16 courier-font text-xl font-black uppercase pointer"
          >
            <p onClick={() => scrollToTarget("about")}>about</p>
            <p onClick={() => scrollToTarget("gallery")}>gallery</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={CompanyLogo}
            alt="Company Logo"
            width={330}
            height={100}
          />
        </motion.div>
        {deviceType == DeviceType.Desktop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row items-center gap-16 courier-font text-xl font-black uppercase cursor-pointer"
          >
            <p onClick={() => scrollToTarget("services")}>services</p>
            <p onClick={() => scrollToTarget("contact")}>contact</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex content-center"
        >
          <Image src={CurveLeft} alt="Curve Left" width={60} height={20} />
        </motion.div>
      </div>
    </>
  );
};

export default Navigation;
