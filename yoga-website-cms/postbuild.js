import fs from 'fs'
import path from 'path'

const source = path.join('static', '_redirects')
const destination = path.join('dist', '_redirects')

fs.copyFileSync(source, destination)
console.log('✅ _redirects file copied to dist/')
