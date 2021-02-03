import React, { useEffect, useState } from "react";

function Clock() {
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => setTimeNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h1>{timeNow.toLocaleTimeString()}</h1>
    </>
  );
}

export default Clock;
