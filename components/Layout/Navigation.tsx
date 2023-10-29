import React from "react";
import CompanyLogo from "../../public/barber-shop-logo.svg";
import Image from "next/image";
import CurveLeft from "../../public/stripe_left_logo.svg";
import CurveRight from "../../public/stripe_right_logo.svg";

const Navigation = () => {
  return (
    <>
      {/* <div className="navigation"></div> */}
      <div className="flex justify-center z-20">
        <div className="flex content-center">
          <Image src={CurveRight} alt="Curve Right" width={30} height={20} />
        </div>
        <div>
          <Image
            src={CompanyLogo}
            alt="Company Logo"
            width={230}
            height={100}
          />
        </div>
        <div className="flex content-center">
          <Image src={CurveLeft} alt="Curve Left" width={30} height={20} />
        </div>
      </div>
    </>
  );
};

export default Navigation;
