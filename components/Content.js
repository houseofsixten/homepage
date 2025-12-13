import Landing from "./Landing";
import About from "./About";
import Cobra from "./Cobra";
import Fairy from "./Fairy";
import Autumn from "./Autumn";
import Illusion from "./Illusion";
import Ephemeral from "./Ephemeral";
import Gallery from "./Gallery";

export default function Content(params) {
  const {cat, setCat, subcat, setSubcat, pgnum, setPgnum, origin} = params;

  const renderDescription = () => {
    switch(subcat) {
      case "landing":
      return (
          <Landing
            setCat={setCat}
            setSubcat={setSubcat}
            origin={origin}
          />
      );
    case "about":
      return ( <About /> );
    case "lotuscobraisevil":
      return ( <Cobra /> );
    case "fairyring":
      return ( <Fairy /> );
    case "autumnchildren":
      return ( <Autumn /> );
    case "illusion":
      return ( <Illusion /> );
    case "ephemeral":
      return ( <Ephemeral /> );
    default:
      break;
    }
  }

  const renderGallery = () => {
    if (cat != "home") {
      return (
        <Gallery
          cat={cat}
          subcat={subcat}
          pgnum={pgnum}
          setPgnum={setPgnum}
          origin={origin}
        />
      );
    }
  }

  return (
    <div>
      {renderDescription()}
      {renderGallery()}
    </div>
  )
};