import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 text-gray-800 shadow-xl z-50 sticky top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost sm:hidden mr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-50">
                            <li><a>Home</a></li>
                            <li><a>Contact</a></li>
                            <li>
                                <Link href="/services">
                                    Services
                                    {/* <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> */}
                                </Link>
                                {/* <ul className="p-2 bg-white">
                                    <li><a>Gap Analysis</a></li>
                                    <li><a>Documentation</a></li>
                                    <li><a>System Implementation</a></li>
                                    <li><a>Internal Audit</a></li>
                                    <li><a>Certification</a></li>
                                    <li><a>Training</a></li>
                                </ul> */}
                            </li>
                            <hr />
                            <li className="menu-title"><Link href="/services/gap-analysis">Gap Analysis</Link></li>
                            <li className="menu-title"><Link href="/services/documentation">Documentation</Link></li>
                            <li className="menu-title"><Link href="/services/system-implementation">System Implementation</Link></li>
                            <li className="menu-title"><Link href="/services/internal-audit">Internal Audit</Link></li>
                            <li className="menu-title"><Link href="/services/certification">Certification</Link></li>
                            <li className="menu-title"><Link href="/services/training">Training</Link></li>
                        </ul>
                    </div>
                    <a><Image src="/logo-color.png" className='rounded-md' alt="logo" width={118} height={48} /></a>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal rounded-box px-2 z-50">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <Link href="/services">Services</Link>
                            <ul className="p-2 bg-white">
                                <li><Link href="/services/gap-analysis">Gap Analysis</Link></li>
                                <li><Link href="/services/documentation">Documentation</Link></li>
                                <li><Link href="/services/system-implementation">System Implementation</Link></li>
                                <li><Link href="/services/internal-audit">Internal Audit</Link></li>
                                <li><Link href="/services/certification">Certification</Link></li>
                                <li><Link href="/services/training">Training</Link></li>
                            </ul>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/costing-quote" className="btn btn-primary">Get a Quote</Link>
                </div>
            </div>
        </>
    )
}