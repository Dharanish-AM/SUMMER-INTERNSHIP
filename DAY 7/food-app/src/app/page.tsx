'use client';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100 text-gray-800">
      <header className="p-4 bg-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          <a href="#" className="text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            Help
          </a>
          <a href="#" className="hover:text-orange-500 flex items-center gap-1">
            Search <span className="text-xs">🔍</span>
          </a>
          <a href="#" className="hover:text-orange-500 flex items-center gap-1">
            Cart{" "}
            <span className="w-2.5 h-2.5 bg-black rounded-full inline-block"></span>
          </a>
        </nav>
      </header>

      <main className="flex-1 p-4 space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-4">Featured Categories</h2>
          <div className="relative">
            <button
              onClick={() => {
                document.getElementById('carousel-scroll')?.scrollBy({ left: -200, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow-md"
            >
              ◀
            </button>
            <div id="carousel-scroll" className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-10">
              {[
                { label: 'Biryani', icon: '🍛' },
                { label: 'Pizza', icon: '🍕' },
                { label: 'Burger', icon: '🍔' },
                { label: 'Desserts', icon: '🍩' },
                { label: 'North Indian', icon: '🥘' },
                { label: 'Chinese', icon: '🥡' },
                { label: 'South Indian', icon: '🍲' },
                { label: 'Healthy', icon: '🥗' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[100px] text-center bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                document.getElementById('carousel-scroll')?.scrollBy({ left: 200, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full p-2 shadow-md"
            >
              ▶
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Top restaurant chains in Noida
          </h2>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
            {[
              { name: "Chinese Wok", image: "/images/chinese-wok.jpg" },
              { name: "BOX8 - Desi Meals", image: "/images/box8.jpg" },
              { name: "Bikanervala", image: "/images/bikanervala.jpg" },
              { name: "White Hart Pizza", image: "/images/whitehart.jpg" },
              { name: "Chicago Pizza", image: "/images/chicago.jpg" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg w-full h-32 object-cover"
                />
                <p className="mt-2 font-medium text-sm">{item.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Restaurants with online food delivery in Noida
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Chinese Wok",
                desc: "Chinese, Asian, Tibetan, Desserts",
                price: "₹210 for two",
                rating: "4.1",
                time: "3.2 mins",
                image: "/images/chinese-wok.jpg",
              },
              {
                name: "BOX8 - Desi Meals",
                desc: "North Indian, Biryani, Thalis, Home Food",
                price: "₹250 for two",
                rating: "4.3",
                time: "3.2 mins",
                image: "/images/box8.jpg",
              },
              {
                name: "Bikanervala",
                desc: "Sweets, North Indian, South Indian, Chinese, Continental",
                price: "₹350 for two",
                rating: "4.3",
                time: "3.2 mins",
                image: "/images/bikanervala.jpg",
              },
              {
                name: "White Hart Pizza",
                desc: "Pizza, Beverages, Snacks, Burgers",
                price: "₹200 for two",
                rating: "4.3",
                time: "3.2 mins",
                image: "/images/whitehart.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 space-y-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                  <p className="text-sm">{item.price}</p>
                  <div className="flex items-center justify-between mt-2 text-xs text-gray-600">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {item.rating} Rating
                    </span>
                    <span>{item.time}</span>
                  </div>
                  <div className="">
              
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
