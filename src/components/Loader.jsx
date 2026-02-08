const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin mb-4"></div>
      <p className="text-xl font-medium text-white animate-pulse">
        Initializing Universe...
      </p>
    </div>
  );
};

export default Loader;
