/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

import img from "../../assets/img/driver.png";
import { getRandomRGBColor } from "../../utils/colos";

const DriverCard = ({ driver, isSelected, onClick, index }) => {
  const firstName = driver.split(" ")[0];
  const lastName = driver.split(" ")[1];
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`bg-white/5 rounded-lg text-left w-full transition-all
                 hover:bg-white/10 relative ${
                   isSelected
                     ? "border-2 border-red-500 shadow-lg shadow-red-500/20 grayscale"
                     : "border border-white/10"
                 }`}
    >
      {/* <h3 className={`font-medium ${isSelected ? "text-red-500" : "text-white"}`}>{driver}</h3> */}

      <div className="flex flex-col max-w-sm mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-md h-[20rem] pt-2">
        <div className="topSection flex items-center w-full pl-2">
          <div
            className="color"
            style={{
              backgroundColor: getRandomRGBColor(),
              width: "3px",
              height: "90%",
            }}
          ></div>
          <div className="flex items-center w-full justify-between px-3">
            <div className="name">
              <h4 className="text-sm font-bold text-gray-900 text-f1-regular">{firstName}</h4>
              <h3 className="text-xl font-bold text-black ">{lastName}</h3>
            </div>{" "}
            <img
              src="https://flagcdn.com/w320/gb.png"
              alt="UK Flag"
              className="w-8 h-8 rounded-md border"
            />
          </div>
        </div>
        <hr />
        <div className="bottomSection  flex w-full h-full pl-3">
          <div className="left flex flex-col justify-between items-start pt-4">
            <p className="text-gray-500 text-sm text-monoHouse">McLaren</p>
            <p className="text-7xl font-bold text-yellow-500 text-bigail">{index}</p>
          </div>
          <div className="right">
            <div
              className="aspect-square absolute bottom-0"
              style={{
                width: "90%",
                height: "90%",
                right: 0,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <img
                src={img}
                alt="Lewis Hamilton"
                className="object-cover"
                style={{ width: "90%", height: "90%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
};

export default DriverCard;
