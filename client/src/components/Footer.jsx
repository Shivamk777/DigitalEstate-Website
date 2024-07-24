export default function Footer() {
  return (
    <footer className="bg-blue-400 h-80 bottom-0 text-white flex flex-col ">  {/* Added flex and flex-col */}
      <div className="container mx-auto flex flex-grow ml-44">  {/* Added flex and flex-grow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="ml-40 mt-10 ">
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
      </div>

      <div className="flex justify-center items-center bg-gray-700 h-20 w-full">  {/* Added flex and adjusted styles */}
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
        </p>
        <div className="text-center mt-2">
          <a href="/privacy-policy" className="hover:text-blue-500 " >Privacy Policy</a> | 
          <a href="/terms-of-service" className="hover:text-blue-500">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
