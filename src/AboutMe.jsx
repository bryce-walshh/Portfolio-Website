import Navbar from "./components/Navbar"
import SkiPic from "./assets/Ski Pic.jpg";
import { ABOUT_ME } from "./constants"

const AboutMe = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-green-300 selection:text-green-900">
        <div className="fixed top-0 -z-10 h-full w-full">
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="container mx-auto px-8">
            <Navbar></Navbar>
            <div className="flex flex-wrap -mt-20">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="my-2 max-w-xl py-6 font-light text-center tracking-tighter" dangerouslySetInnerHTML={{ __html:ABOUT_ME}}></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:p-8">
                  <div className="flex justify-center ">
                      <img className="rounded-2xl" initial={{x:-100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 1, delay:1.2}}src={SkiPic} alt="Bryce Skiing Quandry Peak" />
                  </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default AboutMe
