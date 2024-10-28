import facebook from "./assets/Photos/Footer/facebook.png"
import youtube from "./assets/Photos/Footer/youtube.png"
import instagram from "./assets/Photos/Footer/youtube.png"
import tiktok from "./assets/Photos/Footer/tiktok.png"

const Footer = ()=>{
    return(
        <footer className="w-full h-[304px] bg-gradient-to-r from-[#2662D6] from-10% via-sky-500 via-30% to-[#3DB8B1] to-100% flex justify-around px-[4vw] relative">

            <div className="absolute">

            </div>

            <div className="flex flex-col gap-y-[12px] ">
                <h3 className="text-[18px] font-black text-white leading-[23px] mt-[90px]">
                    ნავიგაცია
                </h3>
                <p className="leading-[18px] text-white opacity-80 ">ჩენს შესახებ</p>
                <p className="leading-[18px] text-white opacity-80">წესები და პირობები</p>
                <p className="leading-[18px] text-white opacity-80">კორპორატიული გაყიდვები</p>
                <p className="leading-[18px] text-white opacity-80">კარიერა</p>
            </div>


            <div className="flex flex-col gap-y-[12px] ">
                <h3 className="text-[18px] font-black text-white leading-[23px] mt-[90px]">
                    გადახდები
                </h3>
                <p className="leading-[18px] text-white opacity-80 ">გადახდის მეთოდები</p>
                <p className="leading-[18px] text-white opacity-80">გარანტია</p>
                <p className="leading-[18px] text-white opacity-80">განვადება</p>
              
            </div>



            <div className="flex flex-col gap-y-[12px] ">
                <h3 className="text-[18px] font-black text-white leading-[23px] mt-[90px]">
                    გაგვყევი
                </h3>

                <p className="w-[20px] leading-[18px] text-white opacity-80 flex gap-x-[8px]">
                    <img src={facebook} alt="foto" />
                    <span>
                        Facebook
                    </span>
                </p>

                <p className="w-[20px] leading-[18px] text-white opacity-80 flex gap-x-[8px]">
                    <img src={youtube} alt="foto" />
                    <p>
                        Youtube
                    </p>
                </p>

                <p className="w-[20px] leading-[18px] text-white opacity-80 flex gap-x-[8px]">
                    <img src={instagram} alt="foto" />
                    <p>
                        Instagram
                    </p>
                </p>

                <p className="w-[20px] leading-[18px] text-white opacity-80 flex gap-x-[8px]">
                    <img src={tiktok} alt="foto" />
                    <p>
                        Tiktok
                    </p>
                </p>



            </div>


            <div className="flex flex-col gap-y-[12px] ">
                <h3 className="text-[18px] font-black text-white leading-[23px] mt-[90px]">
                    კონტაქტი
                </h3>
                <p className="leading-[18px] text-white opacity-80 ">info@linedev.ge</p>
                <p className="leading-[18px] text-white opacity-80">+995 (32) 2 60 60 60 / *7777</p>
            </div>


        </footer>
    )
}

export default Footer;