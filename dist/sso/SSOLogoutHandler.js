import React from 'react';
import PropTypes from 'prop-types'; // This component will be shown while logout
// Provide a wrapper component.

class SSOLogoutHandler extends React.Component {
  componentDidMount() {
    if (this.props.redirectHandler) {
      this.props.redirectHandler();
    } else {
      window.location.href = "/";
    }
  }

  render() {
    let {
      WrapperComponent
    } = this.props;

    if (!WrapperComponent) {
      WrapperComponent = this.state.WrapperComponent;
    }

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(WrapperComponent, null));
  }

}

SSOLogoutHandler.defaultProps = {
  WrapperComponent: /*#__PURE__*/React.createElement("div", null, "Please wait while we signout!")
};
SSOLogoutHandler.propTypes = {
  redirectHandler: PropTypes.func,
  WrapperComponent: PropTypes.elementType
};
export default SSOLogoutHandler;