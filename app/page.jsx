import Main from "@/Componnets/Main";
import styles from "./page.module.css";
import { connectToMongo } from "@/server/DL/connectToMongo";

export default async function Home() {

  await connectToMongo();

  return (
    <main className={styles.main}>     
    <Main/>
    </main>
  );
}
