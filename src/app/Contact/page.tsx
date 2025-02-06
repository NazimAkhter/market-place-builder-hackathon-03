
export default function Contact() {
    return (
        <div>

            <section className="text-darkPrimary font-montserrat relative">
                <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2152.711761367963!2d67.01574078681907!3d24.84966484912187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e097ff78423%3A0x9ff5ac2c11e3f22e!2sAl%20Rehman%20Building!5e0!3m2!1sen!2s!4v1738695852472!5m2!1sen!2s"
                            style={{ filter: "contrast(1.1) opacity(0.7)" }}
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-darkPrimary tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    Abdul Rasool Building, I.I Chundrigarh Road, Near Shaheen Complex, Karachi.
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-darkPrimary tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-myPrimary leading-relaxed">zhp.gfx@email.com</a>
                                <h2 className="title-font font-semibold text-darkPrimary tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">+92 321 92 05 688</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-myWhite flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight text-darkPrimary mb-2">
                            Contact
                        </h2>
                        <p className="leading-relaxed mb-5 text-darkPrimary">
                            Feel free to contact us for any inquiries or feedback. We are here to help you.
                        </p>
                        <form>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-darkPrimary">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-myPrimary focus:ring-2 focus:ring-borderDark text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-darkPrimary">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-myPrimary focus:ring-2 focus:ring-borderDark text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="subject" className="leading-7 text-sm text-darkPrimary">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-myPrimary focus:ring-2 focus:ring-borderDark text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    required />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-darkPrimary">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-myPrimary focus:ring-2 focus:ring-borderDark h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    defaultValue={""}
                                    required />
                            </div>
                            <button className="text-white bg-myPrimary border-0 py-2 px-6 focus:outline-none hover:bg-darkPrimary rounded text-lg">
                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </section>



        </div>
    )
}





