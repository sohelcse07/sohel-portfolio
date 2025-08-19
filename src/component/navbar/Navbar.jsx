import React from 'react'

function Navbar() {
    const NavbarLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" }
    ];
    return (
        <header className="absolute top-0 flex justify-center items-center body-font z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                <a className='flex title-font font-medium text-gray-900 mb-4 md:mb-0'>
                    <span className="ml-3 mr-11 font-bold text-white text-3xl">My Portfolio</span>
                </a>
                <nav className='md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-gray-300 justify-center'>
                    {NavbarLinks.map((link, index) => (
                        <a key={index} href={link.link} className="mr-7 hover:text-white">
                            {link.name} 
                        </a>
                    ))}
                </nav>
                <button type='button' className='text-gray-950 mt-4 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center'>
                    Contact
                </button>
                

            </div>
        </header>
    )
}

export default Navbar
