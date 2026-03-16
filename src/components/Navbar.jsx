import React from "react";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-gray-900 p-4 text-white">
      <h1 className="text-lg font-bold">MyStore</h1>

      <div className="flex gap-6">
        <button className="hover:text-gray-300">Home</button>
        <button className="hover:text-gray-300">Products</button>
        <button className="hover:text-gray-300">Checkout</button>
      </div>
    </nav>
  );
};
