export default function Footer() {
  const date=new Date();
  const year=date.getFullYear();
    return (
    <footer className="py-5 bg-black flex justify-center items-center text-white text-sm w-full">
      <div className="w-full flex justify-center items-center gap-4">
      <h1>SPACEX@<span>{year}</span></h1>
        <ul className="flex justify-center items-center gap-4 py-2">
            <li><a href='#' className="hover:text-gray-400  hover:duration-700">TWIITER</a></li>
            <li><a href='#' className="hover:text-gray-400  hover:duration-700">YOUTUBE</a></li>
            <li><a href='#' className="hover:text-gray-400  hover:duration-700">INSTAGRAM</a></li>
            <li><a href='#' className="hover:text-gray-400  hover:duration-700">FLICKR</a></li>
            <li><a href='#' className="hover:text-gray-400  hover:duration-700">LINKEDIN</a></li>
            <li><a href='#' className="hover:text-gray-400  hover:duration-700">PRIVACY POLICY</a></li>
            <li><a href='#' className="hover:text-gray-400  hover:duration-700">SUPPLIERS</a></li>
        </ul>

      </div>
    </footer>
  );
}
