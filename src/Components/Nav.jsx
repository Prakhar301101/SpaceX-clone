import MenuIcon from '@mui/icons-material/Menu';
export default function Nav() {
  return (
    <nav className="fixed w-full text-white px-10 py-7 flex justify-between">
      <a href='#'><h1 className="text-2xl font-serif ">
        Space<span className="font-bold">X</span>
      </h1></a>
      <div className=" flex justify-center items-center">
        <ul className="flex gap-4 px-3 text-base">
          <li>
            <a href="#" className='hover:underline hover:text-slate-200 hover:duration-500'>FALCON 9</a>
          </li>
          <li>
            <a href="#" className='hover:underline hover:text-slate-200 hover:duration-500'>DRAGON</a>
          </li>
          <li>
            <a href="#" className='hover:underline hover:text-slate-200 hover:duration-500'>STARSHIP</a>
          </li>
          <li>
            <a href="#" className='hover:underline hover:text-slate-200 hover:duration-500'>HUMAN SPACEFLIGHT</a>
          </li>
          <li>
            <a href="#" className='hover:underline hover:text-slate-200 hover:duration-500'>STARLINK</a>
          </li>
        </ul>

      </div>
     <div className='flex gap-4'>
     <ul>
          <li>
            <a href="#" className='hover:underline hover:text-slate-200 hover:duration-500'>SHOP</a>
          </li>
        </ul>
        <MenuIcon className='cursor-pointer'/>
     </div>
    </nav>
  );
}
