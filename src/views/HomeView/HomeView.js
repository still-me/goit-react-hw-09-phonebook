import { Link } from 'react-router-dom';

import './HomeView.scss';
import routes from '../../routes';
import Section from '../../components/Section';
import { BouncyDiv, BounceInRightSpan } from './animatedComponents';

const HomeView = () => (
  <Section>
    <BouncyDiv className="home__welcome">
      <h1 className="home__main-title">Welcome to phone book!</h1>
      <p>This application was created for storage your contacts</p>
      <p className="home__sign-up">
        For first using you should
        <BounceInRightSpan className="sign-up__link">
          <Link className="login__link" to={routes.register}>
            Sign Up
          </Link>
        </BounceInRightSpan>
      </p>
    </BouncyDiv>
  </Section>
);

export default HomeView;
