import { TypeAnimation } from 'react-type-animation';

const TextEffects = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WEB DEVELOPER',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'SOFTWARE DEVELOPER',
        2000,
        'DATA/MAP VISUALIZER',
        2000
      ]}
      
      speed={50}
      className="text-[2rem] md:text-[3rem] text-blue-400 font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffects;