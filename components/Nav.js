'use client';

import Constants from '../constants/Constants.js';
import styles from '../components/Nav.module.css'

export default function Nav(params) {
  const {cat, setCat, subcat, setSubcat, setPgnum, origin} = params;

  const handleNavClick = (newCat, newSubcat) => {        
    setCat(newCat)
    setSubcat(newSubcat);
    setPgnum(0);
    window.history.replaceState(null, "House of Sixten", origin + "/" + newCat + "/" + newSubcat + "/0");
  };

  const navItems = () => {
    if (cat != undefined && cat != null) {
      return(                
        <div className={styles.catcontainer + " " + styles.cat}>
          {
            Array.from(Constants.MENU.keys()).map((key) =>
              <div key={key + "div"}>
                <button
                  type="button"
                  key={key}
                  onClick={() => handleNavClick(key, Constants.MENU.get(key)[0])}
                  className={key == cat ? (styles.navitem + " " + styles.active) : styles.navitem}
                >
                  {Constants.FRIENDLYNAMES.get(key)}
                </button>
              </div>
            )
          }
        </div>
      );
    }
  };

  const subNavItems = () => {
    if (cat != undefined && cat != null && Constants.MENU.get(cat) != undefined) {
      return(
        <div className={styles.catcontainer + " " + styles.subcat}>
          {
            Constants.MENU.get(cat).map((key) =>
              <div key={key + "div"}>
                <button
                  type="button"
                  key={key}
                  onClick={() => handleNavClick(cat, key)}
                  className={key == subcat ? (styles.navitem + " " + styles.active) : styles.navitem}
                >
                  {Constants.FRIENDLYNAMES.get(key)}
                </button>
              </div>
            )
          }
        </div>
      );
    }        
  };
  
  const nav = (<div>{navItems()}</div>);

  const subNav = (<div>{subNavItems()}</div>);

  return (
    <div className={styles.overallcontainer}>      
      {nav}
      {subNav}
    </div>
  );
}