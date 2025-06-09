import calculateSkipPrice from '../utils/SkipPricingService';
import getSkipImage from '../utils/SkipImages';

const CustomCard = ({ skip, isSelected, onSelect }) => {
  const price = calculateSkipPrice(skip.price_before_vat, skip.vat);
  const skipImg = getSkipImage(skip.size);

  return (
    <div 
      className={`max-w-sm mx-auto rounded overflow-hidden shadow-lg relative flex flex-col justify-between h-full bg-white transform transition-transform duration-300 ${
        isSelected
          ? 'scale-105 shadow-2xl animate-pop-slow'
          : 'hover:scale-105 hover:shadow-2xl'
      }`}
    >
      <img
        className="w-128 h-64 object-cover"
        src={skipImg}
        alt={`${skip.size} yard skip`}
      />

      <div className="px-6 py-4">
        <div className="font-bold text-indigo-600 text-xl mb-3">
          {`${skip.size} Yard Skip`}
        </div>
        <p className="text-purple-600 text-base mb-4">
          {`${skip.hire_period_days} day hire period`}
        </p>

        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between bg-indigo-50 rounded-md px-3 py-2 transition duration-300 hover:bg-indigo-100 hover:shadow-sm hover:scale-[1.02]">
            <span className="text-indigo-600 font-medium">Price</span>
            <span className="text-purple-700 font-semibold">£{price}</span>
          </div>
          <div className="flex items-center justify-between bg-indigo-50 rounded-md px-3 py-2 transition duration-300 hover:bg-indigo-100 hover:shadow-sm hover:scale-[1.02]">
            <span className="text-indigo-600 font-medium">Allowed on road</span>
            <span
              className={`font-semibold ${
                skip.allowed_on_road ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {skip.allowed_on_road ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="flex items-center justify-between bg-indigo-50 rounded-md px-3 py-2 transition duration-300 hover:bg-indigo-100 hover:shadow-sm hover:scale-[1.02]">
            <span className="text-indigo-600 font-medium">Heavy waste allowed</span>
            <span
              className={`font-semibold ${
                skip.allows_heavy_waste ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {skip.allows_heavy_waste ? 'Yes' : 'No'}
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-4 mt-auto">
        <button
          onClick={onSelect}
          className={`w-full font-semibold py-2 px-4 rounded transition duration-300 ${
            isSelected
              ? 'bg-green-600 text-white'
              : 'bg-indigo-500 text-white hover:bg-purple-700'
          }`}
        >
          {isSelected ? 'Selected' : 'Select This Skip'}
        </button>
      </div>
    </div>
  );
};


export default CustomCard;