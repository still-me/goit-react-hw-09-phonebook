import { Link } from 'react-router-dom';

import './HomeView.scss';
import routes from '../../utils/routes';
import Section from '../../components/Section';
import {
  FadeInDownDiv,
  BounceInRightSpan,
} from '../../utils/animatedComponents';

const HomeView = () => (
  <Section>
    <FadeInDownDiv className="home__welcome">
      <h1 className="home__main-title">Welcome to your contacts book!</h1>
      <p>This application was created for storage your contacts</p>
      <p className="home__sign-up">
        For first using you should
        <BounceInRightSpan className="sign-up__link">
          <Link className="login__link" to={routes.register}>
            Sign Up
          </Link>
        </BounceInRightSpan>
      </p>
    </FadeInDownDiv>
  </Section>
);

export default HomeView;
