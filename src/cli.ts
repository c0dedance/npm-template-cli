import { cac } from 'cac'

import { version } from '../package.json'
// import { resolveConfig } from './config'

const cli = cac('cmd').version(version).help()

cli
  .command('[root]', 'start server')
  .alias('format')
  .action(async (root: string) => {

  })

cli
  .command('build [root]', 'build for production')
  .action(async (root: string) => {
    // root = path.resolve(root)
    // const config = await resolveConfig(root, 'build', 'production')
    // await build(root, config)
  })

cli.parse()
