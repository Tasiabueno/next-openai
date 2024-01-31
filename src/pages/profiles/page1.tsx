import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from"../../styles/profile.module.css";


export default function FirstPost() {
  // document.documentElement.style.setProperty('--background', 'white');
  return (
    <>
      <div className={styles.container}>
      <h1>
        Tasia Bueno de Mesquita 
      </h1>
      <br />
      <Link href={"/profiles/page2"} passHref className={styles.link}> Go to next profile  
      </Link>
      <div className={styles.centeredImage}>
      <Image
        src="/images/TB.jpeg" 
        height={150}
        width={150}
        alt="Tasia Bueno"
        className={styles.roundedImage}
      />
      </div>
      <br />
      <Link href="/" className={styles.link}>
          Go Back
      </Link>
      </div>
    </>
  );
}
