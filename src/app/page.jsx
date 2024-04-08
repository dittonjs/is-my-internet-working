import styles from "./page.module.css";
import Counter from "./counter";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Your internet is working</h1>
      <div>
        <Link href="/dashboard">Click here for a random quote</Link>
      </div>
      <Counter />
    </main>
  );
}
