import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="header">
            <div className="page-width">
                <Link to="/">
                    <img className="logo" src={'/icons/book-24px.svg'} alt="Book"/>
                    <div className="text">Books Books Books</div>
                </Link>
            </div>
        </div>
    );
};

export default Header;