import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                <div data-aos="fade-up" data-aos-delay="300" className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Contact
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto quaerat
                        similique delectus consequuntur.
                    </p>
                </div>

                {/* Contact Info */}
                <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col items-center text-xl font-bold">
                    
                    {/* Phone */}
                    <div className="flex items-center space-x-3">
                        <svg className="h-8 w-8 text-green-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M5 4h4l2 5 -2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5 2 4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15" />
                            <path d="M15 6h6m-3 -3v6" />
                        </svg>
                        <span className="text-lg font-medium">+880 1735-302123</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-3">
                        <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                        <span className="text-lg font-medium">sohelmatubber4@gmail.com.com</span>
                    </div>
                    
                    {/* LinkedIn */}
                    <div className="flex items-center space-x-3">
                        <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-2v9h-4v-12h6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                        <a href="https://linkedin.com/in/yourprofile" className="text-lg font-medium text-blue-600 hover:underline">
                            linkedin.com/in/yourprofile
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
