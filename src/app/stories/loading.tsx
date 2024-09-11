const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Flipping Book Animation */}
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute top-0 left-0 w-full h-full delay-150 bg-green-400 animate-flip"></div>
        <div className="absolute top-0 left-0 w-full h-full delay-300 bg-green-500 animate-flip"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-600 animate-flip delay-450"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-700 animate-flip delay-600"></div>
      </div>

      {/* Loading Text with Animated Ellipsis */}
      <div className="flex items-center text-xl font-medium text-gray-700">
        <span>Please wait, loading</span>
        <span className="animate-ellipsis">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </span>
      </div>
    </div>
  );
};

export default Loading;
