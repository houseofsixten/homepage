'use client';

import React from 'react';
import { useState } from 'react';
import Gallery from './Gallery';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Constants from '../constants/Constants.js';
import styles from '../components/Nav.module.css'

export default function Nav(params) {
    
    const [cat, setCat] = useState(params.initCat);
    const [subCat, setSubCat] = useState(params.initSubCat);
    const [pageNumber, setPageNumber] = useState(0);

    const handleNavClick = (event) => {        
        setCat(event.target.textContent);        
        setSubCat(Constants.MENU.get(event.target.textContent)[0]);
        if (Constants.PATHS.has(Constants.MENU.get(event.target.textContent)[0]))
        {
            setPageNumber(0);
            window.history.replaceState(null, "House of Sixten", Constants.PATHS.get(Constants.MENU.get(event.target.textContent)[0]));
        }
    };

    const handleDropChange = (event) => {
        setCat(event.target.value);        
        setSubCat(Constants.MENU.get(event.target.value)[0]);
        if (Constants.PATHS.has(Constants.MENU.get(event.target.value)[0]))
        {
            setPageNumber(0);
            window.history.replaceState(null, "House of Sixten", Constants.PATHS.get(Constants.MENU.get(event.target.value)[0]));
        }
    };

    const handleSubNavClick = (event) => {    
        setSubCat(event.target.textContent);
        if (Constants.PATHS.has(event.target.textContent))
        {
            setPageNumber(0);
            window.history.replaceState(null, "House of Sixten", Constants.PATHS.get(event.target.textContent));
        }
    };

    const handleSubDropChange = (event) => {    
        setSubCat(event.target.value);
        if (Constants.PATHS.has(event.target.value))
        {
            setPageNumber(0);
            window.history.replaceState(null, "House of Sixten", Constants.PATHS.get(event.target.value));
        }
    };
    
    const navItems = Array.from(Constants.MENU.keys()).map(function(key)
    {
        return(
            <div key={key} onClick={handleNavClick}
                className={key == cat ? styles.toolbarbuttonselected : styles.toolbarbutton}>
                {key}
            </div>
        );
    });

    const dropItems = Array.from(Constants.MENU.keys()).map(function(key)
    {
        return(
            <option key={key} value={key} className={styles.menuitem}>{key}</option>
        );
    });

    const subNavItems = Constants.MENU.get(cat).map(function(key)
    {
        return(
            <div key={key} onClick={handleSubNavClick}
                className={key == subCat ? styles.subtoolbarbuttonselected : styles.subtoolbarbutton}>
                {key}
            </div>
        );
    });

    const subDropItems = Constants.MENU.get(cat).map(function(key)
    {
        return(
            <option key={key} value={key} className={styles.menuitem}>{key}</option>
        );
    });

    const nav = (<div className={styles.navbar}>
                    {navItems}
                    </div>);

    const drop = ( <select value={cat} onChange={handleDropChange} className={styles.dropdown}>
                    {dropItems}
                   </select>);

    const subNav = (<div className={styles.subnavbar}>
                    {subNavItems}
                    </div>);

    const subDrop = ( <select type="select" value={subCat} onChange={handleSubDropChange} className={styles.subdropdown}>
                       {subDropItems}
                      </select>);

    return (

        <div className={styles.topnav}>
        {nav}
        {drop}
            <div className={styles.subnav}>
            {subNav}
            {subDrop}
                <div className={styles.pages}>
                    <Gallery cat={cat} subCat={subCat} pageNumber={pageNumber} setPageNumber={setPageNumber} />
                </div>
            </div>              
        </div>

    );
}