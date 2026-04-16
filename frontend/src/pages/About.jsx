import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-orange-600 font-bold tracking-tight uppercase text-sm mb-4">About TiffinWala</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Connecting Hearts Through Home-Cooked Meals
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Started in 2022 by two friends from Nashik, TiffinWala was born from a simple observation: 
            students and professionals struggle to find healthy, affordable food. We built this 
            platform to bridge the gap between local vendors and hungry customers.
          </p>
        </div>
      </section>

      {/* Stats/Values Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">What We Stand For</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4 text-orange-500">🏠</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Started from Home</h3>
            <p className="text-gray-600 leading-relaxed">
              We started small in Nashik and are now growing across Maharashtra and India.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4 text-orange-500">📍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Growing Across India</h3>
            <p className="text-gray-600 leading-relaxed">
              We now serve over 30 cities and are adding new areas every single month.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4 text-orange-500">👨‍🍳</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Supporting Vendors</h3>
            <p className="text-gray-600 leading-relaxed">
              We give local vendors the tools and visibility they need to grow their businesses.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4 text-orange-500">🤝</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Community First</h3>
            <p className="text-gray-600 leading-relaxed">
              We are a dedicated community of vendors and customers who love good food.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Our Mission</h2>
          <p className="text-xl italic">
            "To make sure everyone can get a fresh, healthy, home-cooked meal every single day."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;