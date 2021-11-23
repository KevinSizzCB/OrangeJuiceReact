// module.exports = (on, config) => {
//   require('@cypress/code-coverage/task')(on, config);
//   return config;
// };


// Funcionó
const injectDevServer = require("@cypress/react/plugins/react-scripts")

module.exports = (on, config) => {
  injectDevServer(on, config)
  return config
}



// import { startDevServer } from '@cypress/vite-dev-server'

// export default function (on, config) {
//   on('dev-server:start', (options) => {
//     const viteConfig = {
//       // import or inline your vite configuration from vite.config.js
//     }
//     return startDevServer({ options, viteConfig })
//   })
//   return config
// }

// module.exports = (on, config) => {
//   if (config.testingType === 'component') {
//     require('@cypress/react/plugins/react-scripts')(on, config)
//   }

//   return config
// }