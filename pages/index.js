import Head from 'next/head'
import Jumbotron from '../components/Jumbotron'
import HeaderM from '../components/HeaderM'
import Post from '../components/Post'

export default function Home() {
  return (
    <div>
        <Head>
            <title>Taboo</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
            <HeaderM/>
        </header>
        <jumbotron>
            <Jumbotron/>
        </jumbotron>
        <main>
            <Post/>
        </main>
    </div>

  )
}
