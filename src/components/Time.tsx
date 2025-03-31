import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const hours = time.getHours() % 12 || 12;
  const amPm = time.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = {
    hours: hours.toString().padStart(2, "0"),
    minutes: time.getMinutes().toString().padStart(2, "0"),
    seconds: time.getSeconds().toString().padStart(2, "0"),
  };
  return (
    <motion.div
      className="text-amber-400 text-8xl font-bold flex gap-2 font-michroma"
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      <span>{formattedTime.hours}:</span>
      <span>{formattedTime.minutes}:</span>
      <span>{formattedTime.seconds}</span>
      <span className="text-4xl">{amPm}</span>
    </motion.div>
  );
};

export default Time;
