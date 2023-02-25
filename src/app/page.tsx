import { Inter } from "@next/font/google";
import App from "./app";
import styles from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <App />
    </div>
  );
}
