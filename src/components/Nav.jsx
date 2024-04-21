import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants';

const Nav = () => {
    return(
        <header clasName="padding-x py-8 absolute z-10 w-full">
        <nav class name = "flex justify-between items-center max-container">
        <a href ="/">
        <img
        src ={headerLogo}
        alt = "Logo"
        height ={29}
        width ={130}
        />
        </a>
        <ul className = "flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        {navLinks.map((item) => (
        <li key={item.label}>
        <a href ={item.href}
        className = "font-montserrat leading-normal text-lg text-slate-gray">
        {item.label}
        </a>
        </li>
        ))}
        </ul>
        <div className="hidden max-lg:inline-block">
        <img src = {hamburger}
        width={25}
        heheight={25}/>
        </div>
        </nav>
        </header>
        )
}

export default Nav;
