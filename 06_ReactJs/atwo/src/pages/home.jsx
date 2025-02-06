
function Home() {
  return (
    <>
    {/* pair tag and unpair tag */}
    {/* pair tag -> <h1></h1> */}
    {/* unpair tag -> <img /> */}
     <header className="px-4 py-6 md:px-8 md:py-20 lg:px-36 bg-[#FFFBF0]">
        <nav className="flex justify-between items-center pb-6">
            <div><a href="#"><img src="icons/logo.png" alt="" width="291px" height="39px" /></a></div>
            <div>
                <a className="text-base md:mr-5 lg:mr-14 font-medium" href="#">Home</a>
                <a className="text-base md:mr-5 lg:mr-14 font-medium" href="#">Product</a>
                <a className="text-base md:mr-5 lg:mr-14 font-medium" href="#">About us</a>
                <a className="text-base md:mr-5 lg:mr-14 font-medium" href="#">Contact us</a>
            </div>
        </nav>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="space-y-3">
                <h1 className="bebas-neue-regular uppercase">
                    <span className="text-[#FABE4C] text-3xl md:text-5xl lg:text-7xl">Be the Penguins</span>
                    <span className="text-[#363958] text-3xl md:text-5xl lg:text-7xl"> <br /> of Winter</span>
                </h1>
                <p className="roboto-regular text-base text-[#3E3E3E]">Lorem Ipsum is simply dummy text of the printing and
                    typesetting
                    industry.</p>
                <button
                    className="pt-4 pb-4 pr-8 pl-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-base font-medium"><i
                        className="fa-solid fa-cart-shopping text-base"></i> BUY NOW</button>
            </div>
            <div>
                <img src="images/model.png" alt="" />
            </div>
        </div>
    </header>

    <main className="px-4 py-6 md:px-8 md:py-20 lg:px-36">
        <section>
            <h1 className="bebas-neue-regular text-5xl mt-6 mb-5 uppercase text-[#363958]">WoMan Jacket</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7">

                <div className="p-5 shadow-lg rounded-lg">
                    <div className="for-background-color bg-[#F1F1F1] rounded-lg">
                        <img className="p-5" src="images/jacket-1.png" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold roboto-regular text-[#363958]">Yellow Coat Jacket</h1>
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>

                        <div className="price_btn flex justify-between items-center md:justify-between md:items-center">
                            <p className="text-3xl text-[#FABE4C] roboto-regular">$234</p>
                            <button
                                className="pt-4 pb-4 pr-8 pl-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-base font-medium">
                                <i className="fa-solid fa-cart-shopping text-base"></i> BUY NOW
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-5 shadow-lg rounded-lg">
                    <div className="for-background-color bg-[#F1F1F1] rounded-lg md:w-full">
                        <img className="p-5" src="images/jacket-2.png" alt="" />
                    </div>
                    <div className="card-text space-y-3">
                        <h1 className="text-2xl font-bold roboto-regular text-[#363958]">Ladies Jacket</h1>
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                        <div className="price_btn flex justify-between items-center">
                            <p className="text-3xl text-[#FABE4C] roboto-regular">$234</p>
                            <button
                                className="pt-4 pb-4 pr-8 pl-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-base font-medium">
                                <i className="fa-solid fa-cart-shopping text-base"></i> BUY NOW
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-5 shadow-lg rounded-lg">
                    <div className="for-background-color bg-[#F1F1F1] rounded-lg md:w-full">
                        <img className="p-5" src="images/jacket-3.png" alt="" />
                    </div>
                    <div className="card-text space-y-3">
                        <h1 className="text-2xl font-bold roboto-regular text-[#363958]">Ladies Jacket</h1>
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                        <div className="price_btn flex justify-between items-center">
                            <p className="text-3xl text-[#FABE4C] roboto-regular">$234</p>
                            <button
                                className="pt-4 pb-4 pr-8 pl-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-base font-medium">
                                <i className="fa-solid fa-cart-shopping text-base"></i> BUY NOW
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section>
            <h1 className="bebas-neue-regular text-5xl mt-24 mb-10 uppercase text-[#363958]">Man Jacket</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-7">

                <div className="p-5 shadow-lg rounded-lg">
                    <div className="for-background-color bg-[#F1F1F1] rounded-lg">
                        <img className="p-5" src="images/jacket-4.png" alt="" />
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold roboto-regular text-[#363958]">Yellow Coat Jacket</h1>
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>

                        <div className="price_btn flex justify-between items-center md:justify-between md:items-center">
                            <p className="text-3xl text-[#FABE4C] roboto-regular">$234</p>
                            <button
                                className="pt-4 pb-4 pr-8 pl-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-base font-medium">
                                <i className="fa-solid fa-cart-shopping text-base"></i> BUY NOW
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-5 shadow-lg rounded-lg">
                    <div className="for-background-color bg-[#F1F1F1] rounded-lg md:w-full">
                        <img className="p-5" src="images/jacket-5.png" alt="" />
                    </div>

                    <div className="card-text space-y-3">
                        <h1 className="text-2xl font-bold roboto-regular text-[#363958]">Ladies Jacket</h1>
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>

                        <div className="price_btn flex justify-between items-center">
                            <p className="text-3xl text-[#FABE4C] roboto-regular">$234</p>
                            <button
                                className="pt-4 pb-4 pr-8 pl-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-base font-medium">
                                <i className="fa-solid fa-cart-shopping text-base"></i> BUY NOW
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-5 shadow-lg rounded-lg">
                    <div className="for-background-color bg-[#F1F1F1] rounded-lg md:w-full">
                        <img className="p-5" src="images/jacket-6.png" alt="" />
                    </div>

                    <div className="card-text space-y-3">
                        <h1 className="text-2xl font-bold roboto-regular text-[#363958]">Ladies Jacket</h1>
                        <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>

                        <div className="price_btn flex justify-between items-center">
                            <p className="text-3xl text-[#FABE4C] roboto-regular">$234</p>
                            <button
                                className="pt-4 pb-4 pr-8 pl-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-base font-medium">
                                <i className="fa-solid fa-cart-shopping text-base"></i> BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer className="px-4 py-6 md:px-8 md:py-20 lg:px-36">
        <div className="container grid grid-cols-1 md:grid-cols-12 justify-center items-center gap-7">

            <div className="grid-cols-1 md:col-span-6 lg:col-span-5">

                <div className="grid justify-items-center grid-cols-1 md:grid-cols-12 p-7 shadow-lg rounded-lg mb-4">
                    <div className="img grid grid-cols-1 md:col-span-3 lg:items-center">
                        <img src="icons/house.png" width="78" height="82" alt="" />
                    </div>

                    <div className="col-span-9 ml-2">
                        <h1 className="text-2xl roboto-regular font-bold text-center">Find the Perfect Fit</h1>
                        <p className="text-base roboto-regular text-[#3E3E3E] text-center">Everybody is different, which is
                            why we offer styles for every body.</p>
                    </div>
                </div>

                <div
                    className="grid justify-items-center grid-cols-1 md:grid-cols-12 items-center p-7 shadow-lg rounded-lg mb-4">
                    <div className="img grid grid-cols-1 md:col-span-3 lg:items-center">
                        <img src="icons/question.png" width="78" height="82" alt=""/>
                    </div>

                    <div className="col-span-9 ml-2">
                        <h1 className="text-2xl roboto-regular font-bold text-center">Free Exchanges</h1>
                        <p className="text-base roboto-regular text-[#3E3E3E] text-center">One of the many reasons you can
                            shop with peace of mind.</p>
                    </div>
                </div>

                <div
                    className="details-3 grid grid-cols-1 justify-items-center md:grid-cols-12 items-center p-7 shadow-lg rounded-lg mb-4">
                    <div className="img grid grid-cols-1 md:col-span-3 lg:items-center">
                        <img src="icons/box.png" width="78" height="82" alt="" />
                    </div>

                    <div className="col-span-9 ml-2">
                        <h1 className="text-2xl roboto-regular font-bold  text-center">Contact Our Seller</h1>
                        <p className="text-base roboto-regular text-[#3E3E3E] text-center">{`They are here to help you. That's
                            quite literally what we pay them for.`}</p>
                    </div>
                </div>
            </div>
            <div className="grid-cols-1 md:col-span-6 lg:col-span-7">
                <img src="images/shopping.png" alt="" />
            </div>
        </div>
    </footer>
    </>
  )
}

export default Home