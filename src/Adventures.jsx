import Navbar from "./components/Navbar"

const Adventures = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-green-300 selection:text-green-900">
        <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container mx-auto px-8">
            <Navbar></Navbar>
            <div className="pb-16 text-6xl caudex-bold tracking-tight lg:mt-20 lg:text8xl text-center">Coming Soon!</div>
        </div>

    </div>
  )
}

export default Adventures
