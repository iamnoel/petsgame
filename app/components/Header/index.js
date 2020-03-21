import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './galaxy-header-image.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <A href="/">
        <Img
          className="headerImage"
          src={Banner}
          alt="react-boilerplate - Logo"
        />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/game">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        <HeaderLink to="/pets">
          <FormattedMessage {...messages.pets} />
        </HeaderLink>
        <HeaderLink to="/store">
          <FormattedMessage {...messages.store} />
        </HeaderLink>
        <HeaderLink to="/register">
          <FormattedMessage {...messages.register} />
        </HeaderLink>
        <HeaderLink to="/login">
          <FormattedMessage {...messages.login} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
