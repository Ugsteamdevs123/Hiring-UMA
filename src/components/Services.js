import React from 'react'
import HrAdminBaner from '../../public/HrAdminBaner.jpeg'
function Services() {
    return (
        <div>
            <div className='py-3 max-w-screen-xl items-center justify-center mx-auto'>
                <h1 className='text-3xl font-semibold text-start m-4'>SERVICES OFFERED</h1>
            </div>
            {/* cards */}
            <div className='py-4 m-2 max-w-screen-xl flex items-center justify-center mx-auto p-4'>
                <div className='flex flex-wrap p-2 m-2 justify-between items-center mx-auto'>

                    <div className='w-4/12 px-2 relative'>
                        <img src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg" alt="Banner" className='bg-cover'/>
                        <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-6 py-2 font-semibold text-xl">Contract Staffing</div>
                    </div>
                    <div className='w-4/12 px-2 relative'>
                        <img src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg" alt="Banner" className='bg-cover'/>
                        <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-6 py-2 font-semibold text-xl">Contract to Hire</div>
                    </div>
                    <div className='w-4/12 px-2 relative'>
                        <img src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg" alt="Banner" className='bg-cover'/>
                        <div className="absolute bottom-0 right-0 bg-blue-500 text-white px-6 py-2 font-semibold text-xl">Permanent Staffing</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services