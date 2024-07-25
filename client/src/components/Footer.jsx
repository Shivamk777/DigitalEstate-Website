
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMailBulk,
  FaMobileAlt,
} from "react-icons/fa";



const Footer = () => {
  return (
    <div className="bg-blue-400  dark:text-gray-700">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">

          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
             
            Real Estate Property
            </h1>
            <p className="">
            Digital Estate is a leading real estate agency that specializes in helping clients buy, sell, 
            and rent properties in the most desirable neighborhoods.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Country</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMailBulk />
              <p>Email: DigitalEstate@email.com</p>
            </div>
          
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
              
            </div>
          </div>
        
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Properties
                </h1>
                <ul className={`flex flex-col gap-3`}>
                <li><a href="#" className="hover:text-blue-500">Residential</a></li>
              <li><a href="#" className="hover:text-blue-500">Commercial</a></li>
              <li><a href="#" className="hover:text-blue-500">Land</a></li>
                </ul>

              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Services
                </h1>
                <ul className="flex flex-col gap-3">
                <li><a href="#" className="hover:text-blue-500">Management</a></li>
              <li><a href="#" className="hover:text-blue-500">Sales</a></li>
              <li><a href="#" className="hover:text-blue-500">Rentals</a></li>
              <li><a href="#" className="hover:text-blue-500">Valuations</a></li>
                  
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                About Us
                </h1>
                 <ul className="flex flex-col gap-3">
                <li><a href="#" className="hover:text-blue-500">Our Story</a></li>
              <li><a href="#" className="hover:text-blue-500">Team</a></li>
              <li><a href="#" className="hover:text-blue-500">Mission</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 font-semibold border-gray-300/50">
          &copy; {new Date().getFullYear()} DigitalEstate || All Rights Reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;