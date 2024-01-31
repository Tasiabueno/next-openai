import Link from "next/link";
import styles from"../../styles/profile.module.css";


export default function SecondPost() {
  return (
    <>
      <div className={styles.container}>
      <h1>
        Alex Amorgaste
      </h1>
      <br />
      <Link  className={styles.link} href={"/profiles/page1" }>Tasia Bueno de Mesquita </Link>
      <br />
      <Link  className={styles.link} href="/">Login screen</Link>
      <br />
      <Link  className={styles.link} href="/profiles/page1">Go Back</Link>
      </div>
    </>
  );
}
