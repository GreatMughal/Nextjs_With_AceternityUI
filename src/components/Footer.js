import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
                    <p className="mb-4">

                        Welcome to our IT Institute, where innovation meets education. We offer cutting-edge courses in programming, cybersecurity, and data science, empowering students to excel in the tech industry and build successful careers.
                    </p>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul>
                        <li>
                            <Link
                                href="/"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/login"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/courses"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
                    <p>Gujranwala, Pakistan</p>
                    <p>AlamChock</p>
                    <p>Email: itinstitute@gmail.com</p>
                    <p>Phone: +92 300-0000000</p>
                </div>
            </div>
            <p className="text-center text-xs pt-8">© 2024 IT Institute. All rights reserved.</p>
        </footer>
    )
}

export default Footer
