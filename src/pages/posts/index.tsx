import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de Janeiro de 2022</time>
            <strong>Lorem ipsum dolor sit, amet consectetur! Lorem ipsum dolor sit, amet consectetur!</strong>
            <p>Lorem ipsum dolor sit, amet consectetur!</p>
          </a>
          <a href='#'>
            <time>12 de Janeiro de 2022</time>
            <strong>Lorem ipsum dolor sit, amet consectetur! Lorem ipsum dolor sit, amet consectetur!</strong>
            <p>Lorem ipsum dolor sit, amet consectetur!</p>
          </a>
          <a href='#'>
            <time>12 de Janeiro de 2022</time>
            <strong>Lorem ipsum dolor sit, amet consectetur! Lorem ipsum dolor sit, amet consectetur!</strong>
            <p>Lorem ipsum dolor sit, amet consectetur!</p>
          </a>
        </div>
      </main>
    </>
  );
}