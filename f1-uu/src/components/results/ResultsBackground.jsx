/* eslint-disable react/prop-types */
import img1 from "../../assets/gr.png";
import img2 from "../../assets/car.jpg";
const ResultsBackground = ({ type }) => {
  return (
    <div className="absolute inset-0 opacity-10">
      <img
        src={type === "withLocation" ? img2 : img1}
        alt="F1 Background"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ResultsBackground;
