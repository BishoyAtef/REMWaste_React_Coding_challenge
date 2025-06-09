import {useState, useEffect} from 'react'
import CustomCard from './Card';
import Spinner from './Spinner'
import AnimatedFooter from './AnimatedFooter';

const Cards = ({ isHome = false }) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkipId, setSelectedSkipId] = useState(null); // <-- Track selected card
  const [selectedSkip, setSelectedSkip] = useState(null); 

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? '/api/skips?_limit=3' : '/api/skips';
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setSkips(data);
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10 relative">
      <div className="container-xl lg:container gap-6 m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Choose Your Skip Size'}
        </h2>
        <h3 className="relative text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 mb-6 text-center mx-auto animate-shimmer w-fit">
          {isHome ? 'Recent Jobs' : 'Select the skip size that best suits your needs'}
        </h3>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center pb-30">
            {skips.map((skip) => (
              <CustomCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkipId === skip.id}
                onSelect={() => {
                  setSelectedSkipId(selectedSkipId === skip.id ? null : skip.id)
                  setSelectedSkip(selectedSkipId === skip.id ? null : skip)
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Conditional footer */}
      <AnimatedFooter skip={selectedSkip} show={selectedSkipId} text={"You have selected a skip. Continue to checkout or modify your selection."} />
    </section>
  );
};


export default Cards