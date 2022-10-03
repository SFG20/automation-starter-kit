const { defineConfig } = require('cypress')
const fs = require('fs')

<<<<<<< HEAD
module.exports = defineConfig({
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },

})

{ chromeWebSecurity: true }

=======
// Get environment variables from .git for deploy. Github actions have replaced it.
// const [__, branch] = fs.readFileSync("../.git/HEAD", "utf-8").trim().split("refs/heads/")
// const branchURL = branch.split("/").join("-")

const users = require('./cypress/fixtures/users.json')
const servers = require('./cypress/fixtures/servers.json')
console.log(servers)
module.exports = {
    default: defineConfig({
        projectId: 'evt7b4',
        e2e: {
            defaultCommandTimeout: 10000,
            env: {
                host: 'localhost',
                port: '3030',
                protocol: 'http',
                users,
                servers,
            },
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

// npx cypress run --record --key 7f1c44fb-fa55-4a12-a518-f33ded694d04
>>>>>>> 6048b935e82fae3ac61b4cb1fb9be7218c0bd845
