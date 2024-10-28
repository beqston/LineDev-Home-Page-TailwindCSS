import LineDev from "../assets/Photos/Header/LINDEV.png"


const Navbar = ()=>{


    function scrollToAbout() {
        window.scrollTo({
          top: 748,
          behavior: "smooth"
        });
      }

      function scrollToCourses() {
        window.scrollTo({
          top: 2100,
          behavior: "smooth"
        });
      }

      function scrollToblog() {
        window.scrollTo({
          top: 2540,
          behavior: "smooth"
        });
      }
      function scrollToContact() {
        window.scrollTo({
          top: 2980,
          behavior: "smooth"
        });
      }

      function scrollToNews() {
        window.scrollTo({
          top: 1400,
          behavior: "smooth"
        });
      }


    return(

        <section className="w-9/12 h-9 flex justify-between m-auto my-7">

            <img className="w-[82px] h-8 cursor-pointer" src={LineDev} alt="LineDev" />

            <nav className="w-2/4 ">
                <ul className="flex justify-between">
                    <li onClick={scrollToCourses} className="cursor-pointer">კურსები</li>
                    <li onClick={scrollToAbout} className="cursor-pointer">ჩვენს შესახებ</li>
                    <li onClick={scrollToblog} className="cursor-pointer">ბლოგი</li>
                    <li onClick={scrollToNews} className="cursor-pointer">სიახლეები</li>
                    <li onClick={scrollToContact} className="cursor-pointer">კონტაქტი</li>
                </ul>
            </nav>

        </section>

    )
}

export default Navbar;