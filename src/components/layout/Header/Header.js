import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../../common/Icon/Icon';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Grid>
          <Row between="md" middle="xs">
            <Col md={3} lg={3}>
              <Link to="/">
                <div className={styles.logo}>
                  <span className={styles.name}>
                    R
                    <span>
                      <Icon name="compass" />
                    </span>
                    undaWorld
                  </span>
                </div>
              </Link>
            </Col>
            <Col md={6}>
              <nav>
                <NavLink to="/trips" activeClassName="active">
                  Trips
                </NavLink>
                <NavLink to="/countries" activeClassName="active">
                  Countries
                </NavLink>
                <NavLink to="/regions" activeClassName="active">
                  Regions
                </NavLink>
                <NavLink to="/info" activeClassName="active">
                  Contact
                </NavLink>
              </nav>
            </Col>
            <Col md={3} lg={2}>
              <div className={styles.contact}>
                <Icon name="phone" />
                <span>678.243.8455</span>
              </div>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
