import program from "../assets/Photos/Header/Prrogram.png"
import news from "../assets/Photos/Header/News.png"
import Portfolio from "../assets/Photos/Header/Portfolio.png"
import frame1 from "../assets/Photos/Header/Frame1.png"
import frame2 from "../assets/Photos/Header/Frame2.png"
import frame4 from "../assets/Photos/Header/Frame2.png"

const Hero = ()=> {
    return(
        <section className="w-11/12 h-[500px] relative m-auto h-9 mt-8 bg-gradient-to-r from-[#2662D6] from-10% via-sky-500 via-30% to-[#3DB8B1] to-100% rounded-t-[30px] 
        flex flex-col items-center justify-center  ">

            <div className="absolute z-0 top-[0px] left-[0px]">
                <img className="rounded-tl-[30px]" src={frame1} alt="frame" />
            </div>

            <div className="absolute z-0 top-[330px] left-[245px]">
                <img src={frame2} alt="frame" />
            </div>

            <div className="w-[293px] h-[293px] bg-[#39B1E4] rounded-[50%] absolute z-0 top-[71px] left-[800px] blur">
               <div className="w-[101px] rounded-[50%] h-[101px] bg-[#84D0F0] absolute top-[48px] right-[48px] blur"></div>
            </div>

            <div className="absolute z-0 right-[75px] bottom-[-10px]">
                <img className="rotate-[-80deg]" src={frame4} alt="frame" />
            </div>

            <h2 className="z-10 text-center text-4xl font-black text-white leading-[47px]">
                    Discover One Of The Best 
            </h2>

            <h2 className=" z-10 text-center text-4xl font-black text-white mb-11">
                Learning Platform
            </h2>

            <div className="w-full flex justify-center z-10">
                <button className="bg-white font-black flex rounded-[30px] text-sm p-[12px] pl-[18px] pr-[18px] text-[#2C81C4]">Join Now</button>
                <button className="ml-10 font-black flex rounded-[30px] text-sm border-white border-solid border-[1px] text-white p-[12px] pl-[18px] pr-[18px]">Learn More</button>
            </div>

            <div className="flex w-[67%] bg-[#E9EBEFCC] absolute z-10  h-40 justify-around items-center translate-y-[240px] rounded-[30px]">
                <img src={program} alt="program" />
                <img src={news} alt="news" />
                <img src={Portfolio} alt="Portfolio" />

            </div>


        </section>
    )
}

export default Hero;