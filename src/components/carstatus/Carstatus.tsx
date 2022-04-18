import { cars01, cars02 } from './Cars'

const CarStatus = () => {
  return (
       <div className='pt-[100px] pb-[100px]'>
             <div className='container'>
                  <div className="row">
                  {cars01.map((value,key)=>{
                              return(
                              <div className="px-3 py-4 border border-solid border-[black] basis-[30%] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] rounded-lg row" key={key}>
                                    <div className="w-[50%]">
                                          <img className='mt-[30px] w-[100%] h-[50%] object-cover' src={value.img} alt=""/>
                                    </div>
                                    <div className="w-[50%] pl-[15px]">
                                          <h2 className='font-normal'>{value.name}</h2>
                                          <p className='mt-[10px] mb-[10px]'>{value.price}</p>
                                          <button className="p-4 py-1 border border-black hover:bg-black hover:text-white rounded-md duration-500">Khám phá</button>
                                    </div>
                              </div>
                              )
                        })}      
                  </div>
             </div>
             <div className='bg-[#000000] h-[70px] mt-5 mb-5'>
                  <p className='pl-[128px] text-[#fff] text-[x-large] pt-4 '>WELCOME DT AUTO</p>
            </div>
            
            <div className="container">
               <div className="row">
                  {cars02.map((value,key)=>{
                        return(
                              <div className=" rounded-lg px-[12px] py-[16px] border-[1px] border-solid border-[black] basis-[30%] shadow-[2px_2px_10px_rgba(0,0,0,0.3)] row m-3" key={key}>
                                    <div className="w-[50%]">
                                          <img className='mt-[30px] w-[100%] h-[50%] object-cover' src={value.img} alt=""/>
                                    </div>
                                    <div className="w-[50%] pl-[15px]">
                                          <h2 className='font-normal'>{value.name}</h2>
                                          <p className='mt-[10px] mb-[10px]'>{value.price}</p>
                                          <button className="p-4 border border-black rounded-md py-1 hover:bg-black hover:text-white duration-500">Khám phá</button>
                                    </div>
                              </div>
                              )
                        })}                            
              </div>
            </div>
       </div>
  )
}

export default CarStatus