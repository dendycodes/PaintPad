import { Inter } from "@next/font/google";
import styles from "./page.module.scss";
import BlackboardCore from "./core/blackboard-core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <BlackboardCore />
    </div>
  );
}
