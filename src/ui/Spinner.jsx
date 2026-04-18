function Spinner() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-orange-100 animate-spin border-t-train-orange" />

        {/* Inner pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-train-orange animate-ping opacity-75" />
        </div>
      </div>

      {/* Text */}
      <p className="ml-4 text-train-orange font-semibold tracking-wide uppercase text-sm animate-pulse">
        Finding trains...
      </p>
    </div>
  );
}

export default Spinner;
