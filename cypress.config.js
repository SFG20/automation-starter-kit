const { defineConfig } = require('cypress')

module.exports = {
    default: defineConfig({
        projectId: 'evt7b4',
        e2e: {
            defaultCommandTimeout: 10000,
            env: {
                host: 'localhost',
                port: '3030',
                protocol: 'http',
            },
            specPattern: ['cypress/e2e/**/*.cy.{js, jsx}'],
            testIsolation: false,
            setupNodeEvents(on, config) {
                // implement node event listeners here
                on('task', {
                    log({ log, type = 'log' }) {
                        if (typeof log === 'object') {
                            log = JSON.stringify(log, null, 2)
                        }
                        console[type](log)
                        return null
                    },
                })
            },
        },
    }),
}
