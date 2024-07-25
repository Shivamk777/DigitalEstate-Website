export default function Footer() {
  return (
    <footer className="bg-blue-400 h-80 bottom-0 text-white flex   ">  {/* Added flex and flex-col */}
      <div className="container mx-auto flex flex-grow flex-col ml-44">  {/* Added flex and flex-grow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="ml-24 mt-10 ">
            <h3 className="text-lg font-bold mb-4 ">Properties</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Residential</a></li>
              <li><a href="#" className="hover:text-blue-500">Commercial</a></li>
              <li><a href="#" className="hover:text-blue-500">Land</a></li>
            </ul>
          </div>
          <div className="mt-10 ml-20">
          <h3 className="text-lg font-bold mb-4 ">Services</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Management</a></li>
              <li><a href="#" className="hover:text-blue-500">Sales</a></li>
              <li><a href="#" className="hover:text-blue-500">Rentals</a></li>
              <li><a href="#" className="hover:text-blue-500">Valuations</a></li>
            </ul>
          </div>
          <div className="mt-10 ml-16">
          <h3 className="text-lg font-bold mb-4 ">About Us</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Our Story</a></li>
              <li><a href="#" className="hover:text-blue-500">Team</a></li>
              <li><a href="#" className="hover:text-blue-500">Mission</a></li>
            </ul>
          </div>
          <div className="mt-10">
          <h3 className="text-lg font-bold mb-4 ">Your Address</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-500">Phone: 123-456-7890</a></li>
              <li><a href="#" className="hover:text-blue-500">Email: your@email.com</a></li>
              <li><a href="#" className="hover:text-blue-500">Land</a></li>
            </ul>
          </div>
        </div>
       
        <p className="text-center mt-20 mr-60  ">
          &copy; {new Date().getFullYear()} DigitalEstate . All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
