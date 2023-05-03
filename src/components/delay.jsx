import React, { useEffect, useState } from "react";

const Delay = ({ delay, children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const wait = setTimeout(() => {
      setReady(true);
    }, delay);
    return () => clearTimeout(wait);
  }, [delay]);
  return ready ? children : null;
};

export default Delay;
