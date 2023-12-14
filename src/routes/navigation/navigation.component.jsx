import { Fragment, useContext } from "react";

import {Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo} from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import {signOutUser} from '../../utils/firebase.utils.jsx';
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from './navigation.styles.jsx'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    
    const signOutHandler = async () => {
        await signOutUser();
    }

    return (
        <Fragment>
            <NavigationContainer>
                <Link className="logo-container" to='/'>
                    <CrownLogo className="logo" />
                </Link>
                <NavLinks>
                    <LogoContainer to='/shop'>
                        SHOP
                    </LogoContainer>
                    {currentUser ? (
                        <NavLink as='span' onClick={signOutHandler}> SIGN OUT </NavLink>
                        ) : (
                        <LogoContainer to='/auth'>
                            SIGN IN
                        </LogoContainer>
                        )}
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropDown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment >
    );
};

export default Navigation