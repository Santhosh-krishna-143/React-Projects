import { useEffect, useState } from "react";
import CustButton from "../../Components/Button";
import styles from "./styles.module.scss";

const Timer = () => {
  const [hours, setHours] = useState("00");
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");

  const [start, setStart] = useState(false);

  //optimsed code
  //   const [opSec, setOpSec] = useState(0);

  useEffect(() => {
    if (start) {
      const runTime = setInterval(() => {
        setSec((prev) =>
          (prev === "59" ? "00" : parseInt(prev) + 1)
            .toString()
            .padStart(2, "0")
        );
      }, 1000);
      return () => clearInterval(runTime);
    }
  }, [start]);

  //optimsed code
  //   useEffect(() => {
  //     if (start) {
  //       const runTime = setInterval(() => {
  //         setOpSec((prev) => prev + 1);
  //       }, 1000);

  //       return () => clearInterval(runTime);
  //     }
  //   }, [start]);

  //optimsed code
  //   const hours = Math.floor(opSec / 3600)
  //     .toString()
  //     .padStart(2, "0");
  //   const min = Math.floor((opSec % 3600) / 60)
  //     .toString()
  //     .padStart(2, "0");
  //   const sec = (opSec % 60).toString().padStart(2, "0");

  useEffect(() => {
    if (sec === "00" && start) {
      setMin((prev) =>
        (prev === "59" ? "00" : parseInt(prev) + 1).toString().padStart(2, "0")
      );
    }
  }, [sec]);

  useEffect(() => {
    if (sec === "00" && min === "00" && start)
      setHours((prev) =>
        (prev === "23" ? "00" : parseInt(prev) + 1).toString().padStart(2, "0")
      );
  }, [min]);

  const onClickStart = () => {
    setStart(true);
  };

  const onClickStop = () => {
    setStart(false);
  };

  const onClickReset = () => {
    setStart(false);
    setSec("00");
    setMin("00");
    setHours("00");

    //optimsed code
    // setOpSec(0);
  };

  return (
    <div>
      <h2>Timer</h2>
      <div>
        <h1>{`${hours}:${min}:${sec}`}</h1>
        <div className={styles.btnsDiv}>
          <CustButton btntxt="Start" onClick={onClickStart} />
          <CustButton btntxt="Stop" onClick={onClickStop} />
          <CustButton btntxt="Reset" onClick={onClickReset} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
