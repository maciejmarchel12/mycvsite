import Link from "next/link";

export const Header:React.FC = () => {
    return <header className="navbar bg-base-300">
        <div className="navbar-start px-3"> 
            <Link href="/" className="hover:bg-base-100 hover:text-primary px-3 py-2 rounded-md transition-all"> Home </Link>
             </div>

        <div className="navbar-end">
          <div className="px-3">
            <Link href="/projects" className="hover:bg-base-100 hover:text-primary px-3 py-2 rounded-md transition-all">Projects</Link>
            </div>
          <div className="px-3">
            <Link href="/contact" className="hover:bg-base-100 hover:text-primary px-3 py-2 rounded-md transition-all">Contact</Link>
            </div>   
        </div>
        
        </header>
}
