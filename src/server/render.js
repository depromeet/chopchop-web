import React from 'react';
import { renderToString } from 'react-router-server';
import { StaticRouter } from 'react-router';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import App from 'shared/App';

const render = async (location) => {
    const store = configureStore();

    const { html } = await renderToString(
        <StaticRouter location={location}>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>
    );
    const helmet = Helmet.renderStatic();
    return {
        html,
        state: store.getState(),
        helmet
    };
};

export default render;