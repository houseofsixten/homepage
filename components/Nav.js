'use client';

import React from 'react';
import { useState } from 'react';
import Gallery from './Gallery';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Constants from '../constants/Constants.js';
import styles from '../components/Nav.module.css'

export default function Nav(params) {
    
    const [cat, setCat] = useState(params.initCat);
    const [subCat, setSubCat] = useState(params.initSubCat);
    const [pageNumber, setPageNumber] = useState(0);

    const handleNavClick = (event, newValue) => {
        setCat(newValue);        
        setSubCat(Constants.MENU.get(newValue)[0]);
        if (Constants.PATHS.has(Constants.MENU.get(newValue)[0]))
        {
            setPageNumber(0);
            window.history.replaceState(null, "House of Sixten", Constants.PATHS.get(Constants.MENU.get(newValue)[0]));
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

    const handleSubNavClick = (event, newValue) => {    
        setSubCat(newValue);
        if (Constants.PATHS.has(newValue))
        {
            setPageNumber(0);
            window.history.replaceState(null, "House of Sixten", Constants.PATHS.get(newValue));
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
            <Tab size="small" label={key} key={key} value={key} className={key == cat ? styles.toolbarbuttonselected : styles.toolbarbutton}/>
        );
    });

    const dropItems = Array.from(Constants.MENU.keys()).map(function(key)
    {
        return(
            <MenuItem key={key} value={key} className={styles.menuitem}>{key}</MenuItem>
        );
    });

    const subNavItems = Constants.MENU.get(cat).map(function(key)
    {
        return(
            <Tab size="small" label={key} key={key} value={key} className={key == subCat ? styles.subtoolbarbuttonselected : styles.subtoolbarbutton}/>
        );
    });

    const subDropItems = Constants.MENU.get(cat).map(function(key)
    {
        return(
            <MenuItem key={key} value={key} className={styles.menuitem}>{key}</MenuItem>
        );
    });

    const nav = (<Tabs value={cat} onChange={handleNavClick} className={styles.navbar}>
                    {navItems}
                    </Tabs>);

    const drop = ( <Select value={cat} onChange={handleDropChange} className={styles.dropdown}>
                    {dropItems}
                    </Select>);

    const subNav = (<Tabs value={subCat} onChange={handleSubNavClick} className={styles.subnavbar}>
                    {subNavItems}
                    </Tabs>);

    const subDrop = ( <Select value={subCat} onChange={handleSubDropChange} className={styles.subdropdown}>
                    {subDropItems}
                    </Select>);

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