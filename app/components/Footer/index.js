import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
// import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section style={{ color: 'white' }}>
        <FormattedMessage {...messages.authorGreeting} />
      </section>
      <section style={{ color: 'white' }}>☺</section>
      <section style={{ color: 'white' }}>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author1: (
              <A href="https://www.linkedin.com/in/iamnoelward/">Noel Ward</A>
            ),
            author2: (
              <A href="https://www.linkedin.com/in/brady-ward/">Brady Ward</A>
            ),
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
