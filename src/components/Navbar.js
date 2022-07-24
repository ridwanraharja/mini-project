import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
import Navigation from "./Navigation";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const transitions = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  //   const toggleMenu = () => {
  //     setShowMenu(!showMenu);
  //     console.log(showMenu);
  //   };

  //   let menu;
  //   let menuMask;
  //   if (showMenu) {
  //     menu = (
  //       <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow-lg">
  //         The menu
  //       </div>
  //     );

  //     menuMask = (
  //       <div
  //         onClick={toggleMenu}
  //         className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-40"
  //       ></div>
  //     );
  //   }

  return (
    <nav className="">
      <span>
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {/* {menuMask}
      {menu} */}
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              className="fixed bg-black-t-50 top-0 left-0 w-full h-full z-50"
              style={styles}
              onClick={() => setShowMenu(!showMenu)}
            ></animated.div>
          )
      )}

      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow-lg p-3"
              style={styles}
            >
              <Navigation setShowMenu={() => setShowMenu(!showMenu)} />
            </animated.div>
          )
      )}
    </nav>
  );
}

export default Navbar;
