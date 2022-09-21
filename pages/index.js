import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import ManualHeader from '../components/ManualHeader'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raffle Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      {/* <ManualHeader /> */}
      <Header/>
      {/* Header / Connect button / nav bar */}
      Hello!
    </div>
  )
}
