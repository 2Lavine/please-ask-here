export function PAHButton({ children, frontColor, backColor }) {
  return (
    <div className="relative w-full h-12">
      <div
        className={`absolute w-full top-0 left-0 border border-gray-300 h-12 z-10 -translate-y-1 -translate-x-1 hover:translate-y-0 hover:translate-x-0 font-bold py-3 px-5 flex items-center justify-center rounded-lg transition-transform duration-200 transform ${
          frontColor ? frontColor : 'text-black'
        }`}
      >
        {children}
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full rounded-lg
        ${backColor ? backColor : 'text-black'}`}
      ></div>
    </div>
  );
}
