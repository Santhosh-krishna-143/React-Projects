import { useNavigate } from "react-router";
import CustButton from "../../Components/Button";
import styles from "./styles.module.scss";
import { TIMER_PATH, TODO_PATH, XOX_PATH } from "../../../constants";

export type btnData = {
  name: string;
  path: string;
};

export const Home = () => {
  const navigate = useNavigate();
  const projectsNav: btnData[] = [
    { name: "Timer", path: TIMER_PATH },
    { name: "Tic-Tac-Toe", path: XOX_PATH },
    { name: "ToDo", path: TODO_PATH },
  ];

  const navFunction = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.homeDiv}>
      <h2 className={styles.homeHead}>My React Projects</h2>
      <div className={styles.mainBtnDiv}>
        {projectsNav.map((ele: btnData, i: number) => (
          <div className={styles.btnDiv} key={i}>
            <CustButton
              btntxt={ele.name}
              onClick={() => navFunction(ele.path)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
