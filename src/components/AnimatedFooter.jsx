import { Ruler, DollarSign, CalendarClock, TrafficCone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import calculateSkipPrice from '../utils/SkipPricingService';

const AnimatedFooter = ({ skip, show, text }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white py-6 px-6 shadow-2xl z-50
        transform transition-transform duration-500 ${show ? 'translate-y-0' : 'translate-y-full'}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-lg md:text-xl font-semibold">{text}</p>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base transition-opacity duration-300 ${
            skip ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="flex items-center gap-2 hover:text-white hover:scale-105 transition duration-300">
            <Ruler className="text-indigo-300 w-5 h-5" />
            <span className="bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 font-semibold text-indigo-100">
              {skip ? `${skip.size} Yard` : ''}
            </span>
          </div>

          <div className="flex items-center gap-2 hover:text-white hover:scale-105 transition duration-300">
            <DollarSign className="text-indigo-300 w-5 h-5" />
            <span className="bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 font-semibold text-indigo-100">
              {skip ? `£${calculateSkipPrice(skip.price_before_vat, skip.vat)}` : ''}
            </span>
          </div>

          <div className="flex items-center gap-2 hover:text-white hover:scale-105 transition duration-300">
            <CalendarClock className="text-indigo-300 w-5 h-5" />
            <span className="bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 font-semibold text-indigo-100">
              {skip ? `${skip.hire_period_days} Days` : ''}
            </span>
          </div>

          <div className="flex items-center gap-2 hover:text-white hover:scale-105 transition duration-300">
            <TrafficCone className="text-indigo-300 w-5 h-5" />
            <span className={`bg-white/10 backdrop-blur-sm rounded-md px-2 py-1 font-semibold ${
              skip?.allowed_on_road ? 'text-green-400' : 'text-red-400'
            }`}>
              {skip ? (skip.allowed_on_road ? 'Yes' : 'No') : ''}
            </span>
          </div>
        </div>

        <div className="flex gap-4 justify-center md:justify-end">
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-100 text-indigo-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
          >
            Back
          </button>
          <button
            onClick={() => navigate('/checkout')}
            className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimatedFooter;