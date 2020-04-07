<h1 align="center">Welcome to react-sso 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/react-sso" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-sso.svg">
  </a>
  <a href="https://twitter.com/\_vivek\_hari" target="_blank">
    <img alt="Twitter: \_vivek\_hari" src="https://img.shields.io/twitter/follow/\_vivek\_hari.svg?style=social" />
  </a>
</p>

> A ReactJS package to support SSO based authorization & redirects.

### 🏠 [Homepage](https://github.com/VivekHarikrishnan/react-sso)

## Install

```sh
npm install react-sso
```

## Usage

```sh
import { SSOCallbackHandler } from 'react-sso';

<SSOCallbackHandler loader={{
            show: () => showLoaderJSFunc(),
            hide: () => hideLoaderJSFunc()
        }}
        redirectTo={{
            authorized: "/landing_page",
            unauthorized: "/unauthorized"
        }}
        sessionHandler={sessionHandlerJSFunc}
        token_endpoint_url={"https://your_domain_token_endpoint_url"}
        config={{
            client_id: "oauth_client_id",
            client_secret: "oauth_client_secret",
            redirect_uri: window.location.origin + "/auth/callback",
            "scope": "profile",
            "grant_type": "authorization_code"
        }}
        auth_header={true}
        WrapperComponent={<div>We authorizing you, please wait a moment</div>} />
```

## Author

👤 **Vivek Harikrishnan**

* Website: https://github.com/VivekHarikrishnan
* Twitter: [@\_vivek\_hari](https://twitter.com/\_vivek\_hari)
* Github: [@VivekHarikrishnan](https://github.com/VivekHarikrishnan)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/VivekHarikrishnan/react-sso/issues). 

## Show your support

Give a ⭐️ if this project helped you!