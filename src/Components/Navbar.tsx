import LineDev from "../assets/Photos/Header/LINDEV.png"


const Navbar = ()=>{
    return(

        <section className="w-9/12 h-9 flex justify-between m-auto my-7">

            <img className="w-[82px] h-8 cursor-pointer" src={LineDev} alt="LineDev" />

            <nav className="w-2/4 ">
                <ul className="flex justify-between">
                    <li className="cursor-pointer">კურსები</li>
                    <li className="cursor-pointer">ჩვენს შესახებ</li>
                    <li className="cursor-pointer">ბლოგი</li>
                    <li className="cursor-pointer">სიახლეები</li>
                    <li className="cursor-pointer">კონტაქტი</li>
                </ul>
            </nav>

        </section>

    )
}

export default Navbar;