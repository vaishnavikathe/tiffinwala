import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white section">
        <div className="container-custom text-center">
          <h1 className="heading text-white">
            Fresh Homemade Meals Delivered Daily
          </h1>
          <p className="subheading text-gray-300">
            Subscribe to healthy, affordable, and hygienic tiffin services near you.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => navigate("/vendors")}
              className="btn-primary"
            >
              Get Started
            </button>

            <button
              onClick={() => navigate("/vendors")}
              className="btn-outline border-white text-black hover:bg-white hover:text-orange-500"
            >
              Explore Vendors
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="heading">
            Why Choose TiffinWala?
          </h2>
          <p className="subheading">
            Designed for convenience, health, and reliability
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="card">
              <h3 className="font-semibold text-lg">🥕 Healthy Meals</h3>
              <p className="text-gray-600 mt-2">
                Freshly cooked food with balanced nutrition every day.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-lg">🔄 Flexible Plans</h3>
              <p className="text-gray-600 mt-2">
                Customize your meal subscriptions as per your needs.
              </p>
            </div>

            <div className="card">
              <h3 className="font-semibold text-lg">⏱️ Reliable Delivery</h3>
              <p className="text-gray-600 mt-2">
                On-time delivery with real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section">
        <div className="container-custom text-center">
          <h2 className="heading">
            Ready to Start Your Meal Plan?
          </h2>
          <p className="subheading">
            Join hundreds of users enjoying hassle-free meals daily.
          </p>

          <button 
  onClick={() => navigate("/vendors")} 
  className="btn-primary mt-6"
>
  Browse Vendors
</button>
        </div>
      </section>

    </div>
  );
};

export default Home;