// import React from "react";
// import instaIcon from "../assets/instagram_icon.png";
// import pintesterIcon from "../assets/pintester_icon.png";
// import whatsappIcon from "../assets/whatsapp_icon.png";
// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-t from-purple-100 to-white text-black py-10 ">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-2xl font-bold text-orange-400">Shopy</h2>
//           <p className="text-gray-400">Connecting people through fashion.</p>
//         </div>

//         <div className="flex items-center space-x-4">
//           <a href="#" className="hover:text-gray-400">
//             Home
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Products
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             About Us
//           </a>
//           <a href="#" className="hover:text-gray-400">
//             Contact
//           </a>
//         </div>
//         <div className="flex items-center gap-4">
//           <div className="">
//             <img src={instaIcon} />
//           </div>
//           <div className="">
//             <img src={whatsappIcon} />
//           </div>
//           <div>
//             <img src={pintesterIcon} />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import instaIcon from "../assets/instagram_icon.png";
import pintesterIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-100 to-white text-black py-10">
      <div className="container mx-auto">
<hr></hr>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-400">Shopy</h2>
          <p className="text-gray-400">Connecting people through fashion.</p>
        </div>
        <br />
        
        <div className="text-center"> {/* Wrap both sections in a div with text-center */}
          <div className="flex items-center justify-center space-x-10"> {/* Center the link section */}
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Products
            </a>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-40"> {/* Center the icon section */}
            <div>
              <img src={instaIcon} alt="Instagram" />
            </div>
            <div>
              <img src={whatsappIcon} alt="WhatsApp" />
            </div>
            <div>
              <img src={pintesterIcon} alt="Pinterest" />
            </div>
          </div>
        </div>

      </div>

      <div className="text-center mt-4"> 
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Shopy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

