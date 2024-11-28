// "use client";

// import React from "react";

// const WhoWeAre = () => {
//   return (
//     <section className="bg-white py-16 px-8">
//       {/* Section Title */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-5xl font-bold text-[#FFB422] mb-4">Who We Are</h2>
//         <p className="text-lg md:text-xl text-gray-700">
//           Organization set up to provide help and raise money for those in need.
//         </p>
//       </div>

//       {/* Content Grid */}
//       <div className="grid md:grid-cols-3 gap-8">
//         {/* Image Card 1 */}
//         <div className="flex flex-col items-center">
//           <div className="w-full h-[300px]">
//             <img
//               src="/images/320x240.jpg"
//               alt="Helping Hands"
//               className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Helping Hands</h3>
//           <p className="text-gray-600 text-center mt-2">
//             Providing essential support to communities in need, ensuring brighter futures.
//           </p>
//         </div>

//         {/* Image Card 2 */}
//         <div className="flex flex-col items-center">
//           <div className="w-full h-[300px]">
//             <img
//               src="/images/320x240.jpg"
//               alt="Community Support"
//               className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Community Support</h3>
//           <p className="text-gray-600 text-center mt-2">
//             Empowering communities through education, resources, and healthcare.
//           </p>
//         </div>

//         {/* Image Card 3 */}
//         <div className="flex flex-col items-center">
//           <div className="w-full h-[300px]">
//             <img
//               src="/images/320x240.jpg"
//               alt="Dedicated Volunteers"
//               className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800 mt-4">Dedicated Volunteers</h3>
//           <p className="text-gray-600 text-center mt-2">
//             A passionate team committed to making a difference in people's lives.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;

"use client";

import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 px-8">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FFB422] mb-4">Who We Are</h2>
        <p className="text-lg md:text-xl text-gray-700">
          Organization set up to provide help and raise money for those in need.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Image Card 1 */}
        <div className="flex flex-col">
          <div className="w-full h-[300px]">
            <img
              src="/images/320x240.jpg"
              alt="Helping Hands"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Helping Hands</h3>
          <p className="text-gray-600 mt-2">
            Providing essential support to communities in need, ensuring brighter futures.
          </p>
        </div>

        {/* Image Card 2 */}
        <div className="flex flex-col">
          <div className="w-full h-[300px]">
            <img
              src="/images/320x240.jpg"
              alt="Community Support"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Community Support</h3>
          <p className="text-gray-600 mt-2">
            Empowering communities through education, resources, and healthcare.
          </p>
        </div>

        {/* Image Card 3 */}
        <div className="flex flex-col">
          <div className="w-full h-[300px]">
            <img
              src="/images/320x240.jpg"
              alt="Dedicated Volunteers"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Dedicated Volunteers</h3>
          <p className="text-gray-600 mt-2">
            A passionate team committed to making a difference in people's lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
