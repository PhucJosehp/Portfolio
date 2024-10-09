import Typewriter from "typewriter-effect";

export default function TypeWriterEffect(text) {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString(text).pauseFor(100).start();
      }}
      loop={false}
      delay={100}
    />
  );
}
