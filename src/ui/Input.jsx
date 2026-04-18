

function Input({type='text', placeholder, value,onChange, className=''}) {

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-28 rounded-full bg-train-input px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-train-orange/20 focus:bg-white sm:w-64 sm:focus:w-72 ${className}`}
      />
    );
}

export default Input
