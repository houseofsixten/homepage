import styles from '../components/Landing.module.css';

export default function Landing(params) {
  const {origin} = params;

  const handleNavClick = (newCat, newSubcat) => {
    window.location.href = origin + "/" + newCat + "/" + newSubcat + "/0";
  };

  return(
    <div className={styles.container}>

      <h1 className={styles.header}>House of Sixten</h1>

      <p>Choose a gallery below or use the top navigation.</p>

      <div className={styles.buttonsholder}>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonabout}
              onClick={() => {handleNavClick("home", "about")}}
          >
              <div className={styles.labelshade}>About</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttoncobra}
              onClick={() => {handleNavClick("magic", "lotuscobraisevil")}}
          >
              <div className={styles.labelshade}>Lotus Cobra is Evil</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonfairy}
              onClick={() => {handleNavClick("touhou", "fairyring")}}
          >
              <div className={styles.labelshade}>Fairy Ring</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonchildren}
              onClick={() => {handleNavClick("touhou", "autumnchildren")}}
          >
              <div className={styles.labelshade}>Autumn Children</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonillusion}
              onClick={() => {handleNavClick("touhou", "illusion")}}
          >
              <div className={styles.labelshade}>Use Your Illusion</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonephemeral}
              onClick={() => {handleNavClick("touhou", "ephemeral")}}
          >
              <div className={styles.labelshade}>Ephemeral</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonadmiral}
              onClick={() => {handleNavClick("kancolle", "admiral")}}
          >
              <div className={styles.labelshade}>The Legendary Admiral</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonchicago}
              onClick={() => {handleNavClick("kancolle", "chicago")}}
          >
              <div className={styles.labelshade}>Sweet Home Chicago</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonflatland}
              onClick={() => {handleNavClick("kancolle", "flatland")}}
          >
              <div className={styles.labelshade}>Flatland</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonfgo}
              onClick={() => {handleNavClick("fate", "fgo")}}
          >
              <div className={styles.labelshade}>Fate Grand Order</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonhololive}
              onClick={() => {handleNavClick("fate", "hololive")}}
          >
              <div className={styles.labelshade}>Hololive</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttonorifox}
              onClick={() => {handleNavClick("arknights", "orifox")}}
          >
              <div className={styles.labelshade}>Orifox Cluster</div>
          </button>
          <button
              type="button"
              className={styles.imagebutton + " " + styles.buttontrinidad}
              onClick={() => {handleNavClick("bluearchive", "trinidad")}}
          >
              <div className={styles.labelshade}>Escuela Trinidad</div>
          </button>
      </div>         

    </div>
  );
}