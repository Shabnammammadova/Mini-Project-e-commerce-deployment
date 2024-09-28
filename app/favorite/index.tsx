// import React from 'react'

// const Favorite = () => {
//   return (
//     <div> <div className="flex -mx-2 mb-4">
//     <div className="w-1/2 px-2">
//       <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
//         Add to Basket
//       </button>
//     </div>
//     <div className="w-1/2 px-2">
//       <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
//         Add to Favorite
//       </button>
//     </div>
//   </div></div>
//   )
// }

// export default Favorite

// "use client"
// import React from 'react'
// import { toast } from 'sonner';

// const Favorite = ({ productId }) => {
//   const addToWishlist = () => {
//     // Retrieve existing wishlist from local storage
//     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//     // Add product ID to wishlist if it's not already in there
//     if (!wishlist.includes(productId)) {
//       wishlist.push(productId);
//       localStorage.setItem('wishlist', JSON.stringify(wishlist));
//       toast("Product added to your wishlist!");
//     } else {
//       toast("Product is already in your wishlist!");
//     }
//   };

//   return (
//     <div className="flex -mx-2 mb-4">
//       <div className="w-1/2 px-2">
//         <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
//           Add to Basket
//         </button>
//       </div>
//       <div className="w-1/2 px-2">
//         <button
//           className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600"
//           onClick={addToWishlist}
//         >
//           Add to Favorite
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Favorite;


import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index