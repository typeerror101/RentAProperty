import React from 'react';
import './styles/navbar.css';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function NavBar() {
  return (
    <div>
      <nav className='nav'>
        <ul className='nav-left'>
            <Link to="/" className='logo' >Estatery</Link>
            <CustomLink className='rent' to='/Rent'>Rent</CustomLink>
            <CustomLink to='/Buy'>Buy</CustomLink>
            <CustomLink to='/Sell'>Sell</CustomLink>
            <CustomLink to='/ManageProperty'>Manage Property <KeyboardArrowDownIcon/></CustomLink>
            <CustomLink to='/Resources'>Resources  <KeyboardArrowDownIcon/></CustomLink>
        </ul>
        <ul className='nav-right'>
            <Link className='login' to='/Login'>Login</Link>
            <Link className='signup' to='/Signup'>Sign up</Link>
        </ul>
      </nav>
    </div>
  )
}

function CustomLink({to, children, ...prop}){
    const ResolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: ResolvedPath.pathname, end: true});

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...prop}>
                {children}
            </Link>
        </li>
    )
}
