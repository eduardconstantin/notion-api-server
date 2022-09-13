import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Notion API Server</title>
				<meta name='description' content='Notion API Server' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>{`<>Nothing to see here.</>`}</h1>
			</main>
		</div>
	);
}
