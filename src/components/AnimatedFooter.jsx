import calculateSkipPrice from '../utils/SkipPricingService';

const AnimatedFooter = ({ skip, show, text }) => {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-indigo-700 text-white py-6 px-6 shadow-2xl z-50
                  transform transition-transform duration-500 ${
                    show ? 'translate-y-0' : 'translate-y-full'
                  }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Main heading or text */}
        <p className="text-lg md:text-xl font-semibold">{text}</p>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base text-indigo-100 transition-opacity duration-300 ${
            skip ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="transition duration-300 hover:text-white hover:scale-105">
            <span className="block font-semibold text-indigo-200">Size</span>
            {skip ? `${skip.size} Yard Skip` : ''}
          </div>
          <div className="transition duration-300 hover:text-white hover:scale-105">
            <span className="block font-semibold text-indigo-200">Price</span>
            {skip ? `£${calculateSkipPrice(skip.price_before_vat, skip.vat)}` : ''}
          </div>
          <div className="transition duration-300 hover:text-white hover:scale-105">
            <span className="block font-semibold text-indigo-200">Hire Period</span>
            {skip ? `${skip.hire_period_days} Days` : ''}
          </div>
          <div className="transition duration-300 hover:text-white hover:scale-105">
            <span className="block font-semibold text-indigo-200">On-Road</span>
            {skip ? (skip.allowed_on_road ? 'Yes' : 'No') : ''}
          </div>
        </div>
      </div>
    </div>
  );
};


export default AnimatedFooter