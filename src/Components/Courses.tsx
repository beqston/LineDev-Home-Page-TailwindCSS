import foto1 from "../assets/Photos/Courses/foto1.png"
import foto2 from "../assets/Photos/Courses/foto2.png"
import foto3 from "../assets/Photos/Courses/foto3.png"
import foto4 from "../assets/Photos/Courses/foto4.png"


const Courses = ()=> {
    return(
        <section className="w-[74%] h-[400px] m-auto mt-8 mb-[277px] ">

            <div className="w-full h-[63px] flex m-0 ">
                <h2 className="text-[#2763D6] text-[36px] w-[30%] h-[46px] font-black  flex justify-center items-center ">კურსები</h2>

                <div className="w-[70%] h-[63px] bg-gradient-to-r from-[#2662D6] from-10% via-sky-500 via-30% to-[#3DB8B1] to-100%  rounded-tr-[30px] z-20 relative">
                    <div className="absolute h-[48px] rotate-[-45deg] z-10 w-[90px] left-[-28px] bottom-[24px] bg-white"></div>
                </div>
            </div>
            
            <div className="w-[100%] h-[400px] m-auto bg-gradient-to-r from-[#2662D6] from-10% via-sky-500 via-30% to-[#3DB8B1] to-100% rounded-[30px] rounded-r-[0px] flex justify-between relative">
                <h2 className="w-[222px] mt-[34px] ml-[50px] text-white text-2xl font-black">
                    განათლება უკეთესი მომავლისთვის
                </h2>

                <div className="w-[620px] mt-[34px] mr-[50px]">
                    <h3 className="text-[18px] text-white font-normal leading-[21px] mb-[10px]">
                        აღმოაჩინე ცოდნის სამყარო, რომელიც მორგებულია შენს საჭიროებებზე. 
                        ჩვენი ექსპერტების მიერ შექმნილი კურსები გაძლიერებს, ისწავლო, განვითარდე და მიაღწიო შენს მიზნებს. 
                    </h3>

                    <button className="bg-white text-[#2C81C4] px-[16px] py-[8px] rounded-[30px] text-[12px]">
                        იხილეთ სრულად
                    </button>
                </div>


                <div className="w-[194px] h-[267px] bg-[#E9EBEFCC] absolute bottom-[-110px] rounded-[30px] z-20 flex flex-col items-center left-[108px]">
                    <img className="w-[45px] h-[50px] mt-[35px] " src={foto1} alt="foto" />
                    <p className="text-[#2662D6] text-[12px] font-black mt-[40px]">
                        WEB პროგრამირება
                    </p>

                    <p className="text-[#2662D6] text-[12px] font-black mb-[54px]">
                        (HTML & CSS)
                    </p>

                    <button className="bg-[#2662D6] text-white text-[10px] px-[28px] py-[12px] rounded-[30px]">
                        შეიტყვეთ მეტი
                    </button>
                </div>

                <div className="w-[194px] h-[267px] bg-[#E9EBEFCC] absolute bottom-[-110px] rounded-[30px] z-20 flex flex-col items-center left-[327px]">
                    <img className="w-[45px] h-[50px] mt-[35px] " src={foto2} alt="foto" />
                    <p className="text-[#2662D6] text-[12px] font-black mt-[40px]">
                        WEB პროგრამირება
                    </p>

                    <p className="text-[#2662D6] text-[12px] font-black mb-[54px]">
                        (HTML & CSS)
                    </p>

                    <button className="bg-[#2662D6] text-white text-[10px] px-[28px] py-[12px] rounded-[30px]">
                        შეიტყვეთ მეტი
                    </button>
                </div>

                <div className="w-[194px] h-[267px] bg-[#E9EBEFCC] absolute bottom-[-110px] rounded-[30px] z-20 flex flex-col items-center left-[543px]">
                    <img className="w-[45px] h-[50px] mt-[35px] " src={foto3} alt="foto" />
                    <p className="text-[#2662D6] text-[12px] font-black mt-[40px]">
                        JAVASCRIPT-ის
                    </p>

                    <p className="text-[#2662D6] text-[12px] font-black mb-[54px]">
                        კურსი
                    </p>

                    <button className="bg-[#2662D6] text-white text-[10px] px-[28px] py-[12px] rounded-[30px]">
                        შეიტყვეთ მეტი
                    </button>
                </div>

                <div className="w-[194px] h-[267px] bg-[#E9EBEFCC] absolute bottom-[-110px] rounded-[30px] z-20 flex flex-col items-center left-[760px]">
                    <img className="w-[45px] h-[50px] mt-[35px] " src={foto4} alt="foto" />
                    <p className="text-[#2662D6] text-[12px] font-black mt-[40px]">
                     AI & მანქანური
                    </p>

                    <p className="text-[#2662D6] text-[12px] font-black mb-[54px]">
                        სწავლება
                    </p>

                    <button className="bg-[#2662D6] text-white text-[10px] px-[28px] py-[12px] rounded-[30px]">
                        შეიტყვეთ მეტი
                    </button>
                </div>
            </div>
        </section>
    )
}


export default Courses;