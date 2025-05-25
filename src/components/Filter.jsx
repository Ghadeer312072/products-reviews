import React, { useContext, useEffect, useState } from 'react';
import { ContextApp } from './ContaxtProducts';

function Filter({ setFilterArray }) {
  const { post } = useContext(ContextApp);
  const [arrayOfCategory, setArrayOfCategory] = useState([]);
  const [openMenu, setOpenMenu] = useState(false)
  useEffect(() => {
    const uniqueCategories = Array.from(new Set(post.map(item => item.category)));
    setArrayOfCategory(uniqueCategories);
  }, [post]);

  const findCategory = (category) => {
    const filtered = post.filter(item => item.category === category);
    setFilterArray(filtered);
  };
  const btnAll = () => {
    setFilterArray(post)
  }


  return (
    <div className=' my-10 w-full'>

      < button onClick={() => setOpenMenu(!openMenu)} className='m-auto md:hidden block bg-[#d85b45] hover:bg-[#cc897d] rounded-xl h-10 w-24' > Filter</button >

      <div className={`w-[60%] m-auto md:space-x-4 ${openMenu ? "flex" : "hidden"} md:flex  flex-col  mt-4 md:flex-row items-center`}>
        <button className='p-2 text-rose-color rounded shadow hover:bg-gray-100' onClick={btnAll}>All Products</button>
        {arrayOfCategory.map((item, index) => (
          <button
            key={index}
            onClick={() => findCategory(item)}
            className="p-2 text-rose-color rounded shadow hover:bg-gray-100"
          >
            {item}
          </button>
        ))}


      </div>
    </div >
  );
}
export default React.memo(Filter) 