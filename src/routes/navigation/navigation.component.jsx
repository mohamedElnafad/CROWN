import { Fragment, useContext } from "react";
import { Outlet, Link, useSearchParams } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { CartShoppingContext } from "../../contexts/cart-shoping.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import DropDown from "../../components/dropdown/dropdown.component";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { showDropDwon } = useContext(CartShoppingContext);
  console.log(showDropDwon);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {showDropDwon && <DropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
