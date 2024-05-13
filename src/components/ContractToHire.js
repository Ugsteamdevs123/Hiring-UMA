import React from 'react'
import ContractHire from '../../public/contractToHire.jpg'

const ContractToHire = () => {
    return (
        <div>
            <section className="mt-4">
                <div className="bg-img bg-center bg-no-repeat bg-cover max-w-full h-96" style={{ backgroundImage: `url(https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg)` }}></div>
            </section>

            <section className="relative bg-black justify-center">
                <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center ">
                    <div className="mb-36">
                        <h1 className="text-white text-5xl font-bold">SERVICES OFFERED</h1>
                        <div className="line w-12/12 h-1.5 bg-[#0B5ED7] mt-1"></div>
                    </div>
                </div>
            </section>

            <div className="line w-12/12 h-1.5 bg-[#0B5ED7] mt-1"></div>


            <section className='pt-10 relative'>
                {/* <h1 className='text-3xl font-semibold text-center max-w-screen-xl mx-auto underline'>CONTRACT TO HIRE STAFFING</h1> */}
                <h1 className='text-3xl font-semibold text-start max-w-screen-xl items-center justify-center mx-auto underline'>CONTRACT TO HIRE STAFFING</h1>

                <div className='pt-2 m-2 max-w-screen-xl flex flex-col-reverse items-center justify-center mx-auto relative z-10'>
                    <div className='flex flex-col items-center justify-center w-full md:flex-row'>
                        <p className='flex w-full md:w-8/12 mt-10 text-center md:text-left'>
                            Contract-to-hire in this model the resources are placed on our payroll for a set period of time, with the possibility of being hired full-time when the contract ends. This gives companies enough time to not only understand the technical ability of the candidates but also understand the cultural fitment before committing full-time.                            <br></br>
                            <br></br>
                            In this model we fill in the positions and handle most of the front-end recruiting tasks like sourcing candidates, reviewing resumes, and shortlisting candidates. Then the shortlisted candidates are passed along to the client for any technical and final interviews. The client makes the final decision, with insights and guidance from the staffing agency when needed.
                            <br></br>
                            <br></br>
                            The selected candidate begins the employment contract on our payroll. The contract duration can vary from 6 months to being indefinite, and in almost all situations, the client has the option of hiring the resource full time or terminating the contract employment with due notice.
                            <br></br>
                            <br></br>
                            Our domain expertise currently is in HR and Admin, Accounts and Finance, IT and Tech and Sales and Marketing.
                        </p>
                        <div className='flex justify-center items-center w-full md:w-4/12 m-10'>
                            <img src='https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg' alt='permanent' className='w-full h-auto' />
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className='pt-2 m-2 mt-10 max-w-screen-xl flex items-center justify-center mx-auto relative z-10'>
                    <img src={ContractHire} alt='ContractHire' className='w-3/4 h-auto' />
                </div>
            </section>
        </div>
    )
}

export default ContractToHire