import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const { match, location, history } = props;
    console.log('navvbar', props);


    return (
        <nav className='navbar  shadow fixed-top navbar-light bg-primary navbat-expand-sm'>
            <div className="container">
                <Link to='/' className="text-capitalize text-white navbar-brand">contact book</Link>
                <div className="">
                            <Link to='/contact/add' className="btn ml-auto text-capitalize btn-light">add contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;