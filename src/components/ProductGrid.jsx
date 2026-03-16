export const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      desc: "Smooth and easy to use for daily work.",
      price: "$19.99",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      desc: "Portable speaker with clear sound.",
      price: "$29.99",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Gaming Headset",
      desc: "Comfortable headset with rich audio.",
      price: "$49.99",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      name: "Smart Watch",
      desc: "Track your steps and daily activity.",
      price: "$59.99",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      name: "Phone Stand",
      desc: "Keeps your phone upright on your desk.",
      price: "$12.99",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      name: "USB Charger",
      desc: "Fast charging for phones and tablets.",
      price: "$15.99",
      img: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <section className="p-6">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Product Cards Grid
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((prd) => (
          <div key={prd.id} className="rounded-lg bg-white p-4 shadow-md">
            <img
              src={prd.img}
              alt={prd.name}
              className="mb-4 w-full rounded-lg"
            />

            <h2 className="text-xl font-semibold">{prd.name}</h2>
            <p className="mt-2 text-gray-600">{prd.desc}</p>
            <p className="mt-3 text-lg font-bold">{prd.price}</p>

            <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-white shadow">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
