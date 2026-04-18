import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { useUser } from "../auth/useUser";
import toast from "react-hot-toast";

function TrainCard({ train }) {
  const navigate = useNavigate();
  const{isAuthenticated} = useUser();
  

  function handleBookNow(){
    if (!isAuthenticated){
      toast.error('Please Login to book a train!')
      navigate('/login')
      return
    }
    navigate(`/booking/${train.id}`);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      {/* Top row — Image + Train Name */}
      <div className="flex items-center gap-3">
        <img
          src="/speedtrain.jpg"
          alt="train"
          className="w-16 h-12 object-cover rounded-xl"
        />
        <div>
          <p className="text-xs text-stone-400 uppercase tracking-wide">
            Train
          </p>
          <p className="font-bold text-train-dark">{train.name}</p>
        </div>
      </div>

      {/* Middle — Route & Time */}
      <div className="flex items-center justify-center gap-4">
        <div className="text-center">
          <p className="font-bold text-lg text-train-dark">{train.origin}</p>
          <p className="text-xs text-stone-400">{train.departureTime}</p>
        </div>
        <div className="text-train-orange font-bold">→</div>
        <div className="text-center">
          <p className="font-bold text-lg text-train-dark">
            {train.destination}
          </p>
          <p className="text-xs text-stone-400">{train.arrivalTime}</p>
        </div>
      </div>

      {/* Bottom — Price & Book */}
      <div className="flex items-center justify-between sm:flex-col sm:items-end gap-2">
        <div>
          <p className="font-bold text-train-orange text-xl">₦{train.price}</p>
          <p className="text-xs text-stone-400">
            {train.availableSeats} seats left
          </p>
        </div>
        <Button type="small" onClick={handleBookNow}>
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default TrainCard;