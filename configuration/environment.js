const path = require('path');

module.exports = {
    paths: {
        /* Path to source files directory */
        source: path.resolve(__dirname, '../src/'),

        /* Path to built files directory */
        output: path.resolve(__dirname, '../dist/'),

        /* Path to static files */
        static: path.resolve(__dirname, '../static/'),
    },
    server: {
        host: 'localhost',
        port: 3000,
    },
    limits: {
        images: 8192,
        fonts: 8192,
    },
};
