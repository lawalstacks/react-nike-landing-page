import {headerLogo} from '../assets/images';

const Nav = () => {
    return(
        <header clasName="padding-x py-8 absolute z-10 w-full">
        <nav class name = "flex justify-between items-center max-conatiner">
        <a href ="/">
        <img
        src ={headerLogo}
        alt = "Logo"
        height ={29}
        width ={130}
        />
        </a>
        <ul className = "flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        </ul>
        </nav>
        </header>
        )
}

export default Nav;
