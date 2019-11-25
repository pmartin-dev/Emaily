import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/auth/google">Log in with Google</a></li>
          </ul>
        );
      default:
        return (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/api/logout">Logout</a></li>
          </ul>
        );
    }
  }

  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">
            Emaily
          </Link>
          {this.renderContent ()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps (state) {
  return {auth: state.auth};
}

export default connect (mapStateToProps) (Header);
