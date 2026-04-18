// import { useState } from "react";
// import { useNavigate } from "react-router";

// function SearchPage() {
//   const [query, setQuery] = useState("");
//    const navigate = useNavigate();
//   function handleSubmit(e){
//     e.preventDefault();
//     //navigating
//     if(!query) return
//     navigate('/home')
//     setQuery('')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Search booking Number..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="
//     /* Width and Sizing */
//     w-28 sm:w-64 sm:focus:w-72

//     /* Shape: Using rounded-full for that 'pill' look */
//     rounded-full

//     /* Colors: Light Ash background */
//     bg-white
//     px-4 py-2 text-sm

//     /* Transitions */
//     transition-all duration-300

//     /* Placeholder and Text */
//     placeholder:text-stone-400 text-train-dark

//     /* Interaction: Orange focus ring to match the brand */
//     focus:outline-none
//     focus:ring-2
//     focus:ring-train-orange/20
//     focus:bg-white
//   "
//       />
//     </form>
//   );
// }

// export default SearchPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function SearchBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!from || !to) return;
    navigate(`/search?from=${from}&to=${to}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center"
    >
      <Input
        placeholder="From..."
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="w-28 sm:w-64 sm:focus:w-72 rounded-full bg-white px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 text-train-dark focus:outline-none focus:ring-2 focus:ring-train-orange/20 focus:bg-white"
      />
      <Input
        placeholder="To..."
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="w-28 sm:w-64 sm:focus:w-72 rounded-full bg-white px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 text-train-dark focus:outline-none focus:ring-2 focus:ring-train-orange/20 focus:bg-white"
      />
      <Button type="small">Search</Button>
    </form>
  );
}

export default SearchBar;