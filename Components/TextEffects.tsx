import { TypeAnimation } from "react-type-animation";

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        "WEB DEVELOPER",
        2000,
        "SOFTWARE DEVELOPER",
        2000,
        "DATA/MAP VISUALIZER",
        2000,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-blue-400 font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffects;
