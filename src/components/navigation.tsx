
import Link from 'next/link';
const list = ['Home', 'About', 'Contact'];
const nav = () => {
    let isLogin=false

    return (
    <div className="flex flex-col w-1/6 h-screen bg-gray-100">
            
    {/* center tips */}
    <Link href={'./head'}>
        <div className='flex flex-col items-center'>Ask your favorite creators </div>
        <div className='flex flex-col items-center'>get their voice replies</div>
    </Link>
    {/* avata */}
    <div className="flex flex-col items-center justify-center w-full h-1/6 bg-gray-300">
      <div className="w-20 h-20 bg-gray-500 rounded-full">
        {/* <image src="https://picsum.photos/200/300" /> */}
      </div>
    </div>
    <div>

    {isLogin? 
    <div className="flex flex-col items-center justify-center w-full h-1/6 bg-gray-300">
      <div className="w-20 h-20 bg-gray-500 rounded-full">
        {/* <image src="https://picsum.photos/200/300" /> */} 
      </div>          
    </div>:
    // button to login
    <div className='flex justify-center'>sign in</div>
    }
    </div>
    {/* menu */}
    {list.map((item) => (
      <Link key={item} href={`/${item.toLowerCase()}`}
        className="p-4 text-gray-500 hover:bg-gray-300 hover:text-gray-900">{item}
      </Link>
    ))}
  </div>)
}
export default nav;