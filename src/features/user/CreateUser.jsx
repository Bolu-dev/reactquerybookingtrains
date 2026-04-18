import { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";

function CreateUser() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName) return;
    localStorage.setItem("userName", userName);
    navigate("/search");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-train-gray-text md:text-base">
        Ready to book with us? Start by telling us your name:
      </p>
      <Input
        placeholder="Input Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="mb-8"
      />

      {userName !== "" && (
        <div className="animate-in zoom-in-95 fade-out duration-100">
          <Button type="primary">Start Booking</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
