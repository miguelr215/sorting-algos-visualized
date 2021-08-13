import React from 'react';
import Button from '../Button/Button';
import { GiHamburgerMenu as Hamburger } from 'react-icons/gi';
import { GrClose as Close } from 'react-icons/gr';
import './style.css'; 

const TopBar = ({ mobileNavOpen, toggleMobileNav, children }) => {
    return(
        <header className='TopBar'>
            <div className='TopBar__Row'>
                <section className='TopBar__Section'>
                    <Button 
                        icon={mobileNavOpen ? Close : Hamburger}
                        className='TopBar__MenuButton'
                        iconClass='TopBar__Icon'
                        onClick={toggleMobileNav}
                    />

                    <h1 className='TopBar__Title'>Sorting Algorithms Visualized</h1>
                </section>
                <section className='TopBar__Section TopBar__Section_align_end'>
                    {children}
                </section>
            </div>
        </header>
    );
};

export default TopBar;