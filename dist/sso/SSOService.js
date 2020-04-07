const qs = require('qs');

const axios = require('axios');

export const SSOService = {
  invokeTokenEndpoint
}; // Method to invoke OAuth Token endpoint with the code and other OAuth2 attributes to get
// access_token, refresh_token and other auth attributes.

async function invokeTokenEndpoint(token_endpoint_url, code, config, auth_header) {
  const data = {
    code,
    ...config
  };
  const requestOptions = {
    method: 'POST',
    url: token_endpoint_url,
    data: qs.stringify(data)
  };

  if (auth_header) {
    requestOptions.auth = {
      username: config.client_id,
      password: config.client_secret
    };
  }

  const response = await axios(requestOptions).catch(err => err.response);
  return response;
}