import React from "react";
import Scissor from "../public/scissors.svg";
import Image from "next/image";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  price: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: -100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center text-textColor-paragraph-color"
    >
      <div className="flex flex-col items-center">
        <div className="rotate-45 py-4">
          <Image src={Scissor} alt="Scissor" width={70} height={70} />
        </div>
        <div className="pb-2">
          <h2 className="sort-font text-xl font-bold uppercase">{title}</h2>
        </div>
      </div>
      <div>
        <p className="font-thin text-md pb-2 sort-font italic underline">
          Price: {price}
        </p>
        <p className="text-base text-textColor-paragraph-color sort-font leading-7">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
