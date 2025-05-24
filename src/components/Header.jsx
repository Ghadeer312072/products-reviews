import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  const [openMenue, setOPenMenue] = useState(false);
  const array = ["Features", "Team", "Contact", "Sign In"]
  // إغلاق القائمة تلقائيًا عند تكبير الشاشة
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOPenMenue(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log("الراس");
  return (
    <header className="fixed top-0 z-50 left-0 w-full text-black bg-[#b9331a] h-[100px] flex justify-between items-center px-6 md:px-24">
      {/* الشعار */}
      <label className="text-2xl md:text-4xl font-bold">ECommerce</label>

      {/* القائمة في الشاشات الكبيرة */}
      <nav className="hidden md:flex space-x-6 transition-all duration-200 text-black text-[16px] font-medium">
        {array.map((item, index) => {
          return <Link key={index}
            className='border-b-2  border-transparent hover:border-black' to="" onClick={() => setOPenMenue(false)}>{item}</Link>
        })}
      </nav>

      {/* زر الهامبرغر في الشاشات الصغيرة */}
      <div className="md:hidden">
        <button
          onClick={() => setOPenMenue(!openMenue)}
          className="text-black focus:outline-none"
        >
          {openMenue ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* القائمة المنسدلة للشاشات الصغيرة */}
      <nav
        className={`absolute top-[100px] left-0 right-0 mx-auto w-[90%] md:hidden rounded-lg bg-white shadow-lg border p-4 flex-col items-center space-y-4 text-black text-[16px] transition-all duration-200 ${openMenue ? 'flex' : 'hidden'
          }`}
      >

        {array.map((item, index) => {
          return <Link key={index} to="" onClick={() => setOPenMenue(false)}>{item}</Link>
        })}
      </nav>
    </header>
  );
}
export default React.memo(Header) 