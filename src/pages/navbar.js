// components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-teal-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link className="text-white text-lg font-serif" href="/">
                        Bootcamper
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
