import { Header } from '@/ui/organisms/Header'
import { About } from '@/ui/organisms/About'
import { GetInTouch } from '@/ui/organisms/GetInTouch'
import { MainBlock } from '@/ui/organisms/MainBlock'
import { Footer } from '@/ui/organisms/Footer'

export default function Home() {
  return (
    <div className="m-0 mx-auto ">
      <main className="bg-white max-w-screen-xl m-0 mx-auto ">
        <Header />
        <MainBlock />
        <About />
        <GetInTouch />
        <Footer />
      </main>
    </div>
  )
}
