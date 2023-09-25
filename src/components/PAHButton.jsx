export function PAHButton({ children }) {
  return (
    <div className="relative w-32 h-12">
      <div
        className="absolute top-0 left-0 bg-white border border-gray-300
      h-12 z-10 w-32
      -translate-y-1
      -translate-x-1
      hover:translate-y-0 hover:translate-x-0 text-black 
      font-bold py-3 px-5 
      flex items-center justify-center
      rounded-lg transition-transform duration-200 transform"
      >
        {children}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-green-400 rounded-lg"></div>
    </div>
  );
}
