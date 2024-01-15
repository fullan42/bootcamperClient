// pages/navbar.js

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h3 className="text-black text-lg font-serif">
                        Bootcamper
                    </h3>
                </div>
                <div  >
                    <Link className='p-4'  href='/'>
                        Sign-in
                    </Link>
                        <Link href='/'>
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;