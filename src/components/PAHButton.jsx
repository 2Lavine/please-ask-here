export function PAHButton({
  children,
  frontColor = 'bg-black',
  backColor = 'bg-white',
  width = 'w-28',
  textColor = 'text-white',
  onClick,
}) {
  return (
    <div
      className={'relative h-12 cursor-pointer ' + width + ' ' + textColor}
      onClick={onClick}
    >
      <div
        className={`absolute w-full top-0 left-0 border-2 border-black h-12 z-10 -translate-y-1 -translate-x-1 hover:translate-y-0 hover:translate-x-0 font-bold py-3 px-5 flex items-center justify-center rounded-lg transition-transform duration-200 transform ${
          frontColor ? frontColor : 'bg-black'
        }`}
      >
        {children}
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full rounded-lg border-2 border-black
        ${backColor ? backColor : 'bg-black'}`}
      ></div>
    </div>
  );
}
