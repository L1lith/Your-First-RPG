const { join } = require('path')
const { renameSync, rmdirSync, rmdir } = require('fs')

const exportDirectory = join(__dirname, 'docs')

// exports.onPreInit = () => {
//   if (process.argv[2] === 'build') {
//     fs.rmdirSync(path.join(__dirname, 'dist'), { recursive: true })
//     fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'public_dev'))
//   }
// }

// exports.onPostBuild = () => {
//   rmdirSync(exportDirectory, { recursive: true })
//   renameSync(path.join(__dirname, 'public'), exportDirectory)
// }
