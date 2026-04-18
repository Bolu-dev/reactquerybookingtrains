import { useTrains } from "../features/trains/useTrains";
import TrainCard from "../features/trains/TrainCards";
import Spinner from "../ui/Spinner";
import { useUser } from "../features/auth/useUser";
import SearchBar from "../ui/SearchBar";

function SearchPage() {
//   const userName = localStorage.getItem("userName");
const { user } = useUser();
const userName = user?.user_metadata?.fullName;
  const { isLoading, trains, error } = useTrains();

  if (isLoading) return <Spinner />;
  if (error)
    return <div className="text-center mt-20">Something went wrong!</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* username */}
      {userName && (
        <h2 className="text-2xl font-bold text-train-dark mb-6">
          Welcome <span className="text-train-orange ">{userName} 👋</span>
        </h2>
      )}

      {/* Search form */}
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 px-8 mb-8">
        <p className="text-sm text-stone-400 mb-3">Search for a train:</p>
        <SearchBar />
      </div>

      <h3 className="text-2xl text-center font-bold text-train-dark mb-6">
        Available Trains
      </h3>

      {trains.length === 0 ? (
        <p className="text-center text-stone-400 mt-20">
          No trains found for this route.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {trains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
