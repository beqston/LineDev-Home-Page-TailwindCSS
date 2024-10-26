import MainFoto from "../assets/Photos/Education/mainFoto.png"
import foto1 from "../assets/Photos/Education/foto1.png"
import foto2 from "../assets/Photos/Education/foto2.png"
import foto3 from "../assets/Photos/Education/foto3.png"
import foto4 from "../assets/Photos/Education/foto4.png"


const Education = ()=> {
    return(
        <section className="w-[74%] h-[579px] flex justify-between mt-[108px] m-auto mt-[160px] relative">

            <div  className="w-[37%] h-[579px] relative left-[98px] ">

                <img className="w-[372px] h-[453px] absolute z-10" src={MainFoto} alt="Photo" />
                <img className="w-[77px] h-[77px] absolute top-[107px] left-[-102px]" src={foto1} alt="Photo" />
                <img className="w-[175px] h-[175px] absolute top-[358px] left-[-102px] " src={foto2} alt="Photo" />
                <img className="w-[77px] h-[77px] absolute bottom-[52px] left-[94px]" src={foto3} alt="Photo" />
                <img className="w-[175px] h-[175px] absolute bottom-[8px] right-[0px] z-20" src={foto4} alt="Photo" />

            </div>

            <div className="w-[43.4%]">

                <h2 className="mt-[83px] font-black text-4xl text-[#2662D6]">
                    Our Education System
                </h2>

                <h2 className="font-black text-4xl text-[#3DB8B1] mb-[20px]">
                    Works For You
                </h2>

                <p>
                    Lorem ipsum dolor sit amet consectetur. Odio ut lorem sapien maecenas lectus lobortis. Vulputate mattis penatibus sit placerat. 
                    Sed varius nibh massa ut fringilla amet. Massa tempor nibh condimentum pellentesque mauris ullamcorper.
                </p>

                    <button className="w-[129px] text-[14px] flex h-[42px] text-white rounded-[30px] bg-gradient-to-r from-[#2662D6] to-[#002241] mt-[50px] justify-center items-center">
                        Learn More
                    </button>

            </div>

        </section>
    )
}

export default Education;