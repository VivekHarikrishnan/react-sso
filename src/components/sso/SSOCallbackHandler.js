import React from 'react';
import { SSOService } from './SSOService';
import PropTypes from 'prop-types';
const qs = require('qs');


class SSOCallbackHandler extends React.Component {
    async componentDidMount() {
        if(this.props.loader && this.props.loader.show) {
            this.props.loader.show();
        }

        let queryParams = qs.parse(window.location.search.replace("?", ""));
        // When query params has code.
        let is_valid = new Boolean(queryParams.code).valueOf();
        let authResponse = {};

        if(is_valid) {
            
            authResponse = await SSOService.invokeTokenEndpoint(this.props.token_endpoint_url, 
                                queryParams.code, 
                                this.props.config, 
                                this.props.auth_header);
            is_valid = authResponse.status === 200;
        }

        if(is_valid && authResponse.data) {
            // Set user session variables and allow user to sign-in.
            this.props.sessionHandler(authResponse.data);
            // Update the redirect URL depends on the app.
            window.location.href = this.props.redirectTo.authorized;
        } else {
            // Redirect to root page if the response is not valid.
            window.location.href = this.props.redirectTo.unauthorized;
        }

        if(this.props.loader && this.props.loader.hide) {
            this.props.loader.hide();
        }
    }

    render() {
        let { WrapperComponent } = this.props;
        if(!WrapperComponent) {
            WrapperComponent = this.state.WrapperComponent;
        }

        return <WrapperComponent />
    }
}


SSOCallbackHandler.defaultProps = {
    WrapperComponent: <div>Please wait while we authorize you!</div>
}

SSOCallbackHandler.propTypes = {
    loader: PropTypes.exact({
        show: PropTypes.func,
        hide: PropTypes.func
    }),
    redirectTo: PropTypes.exact({
        authorized: PropTypes.string.isRequired,
        unauthorized: PropTypes.string.isRequired
    }).isRequired,
    sessionHandler: PropTypes.func.isRequired,
    token_endpoint_url: PropTypes.string.isRequired,
    config: PropTypes.exact({
        grant_type: PropTypes.string.isRequired,
        client_id: PropTypes.string.isRequired,
        client_secret: PropTypes.string.isRequired,
        scope: PropTypes.string.isRequired,
        redirect_uri: PropTypes.string.isRequired,
    }).isRequired,
    auth_header: PropTypes.bool,
    WrapperComponent: PropTypes.elementType
};

export default SSOCallbackHandler;
