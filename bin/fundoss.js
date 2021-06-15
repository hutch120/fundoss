#!/usr/bin/env node

var fundoss

try {
    fundoss = require('../src')
} catch (err) {
    // Silently ignore syntax errors in Node.js 0.12 and 4. ?? I'm guessing anyone still using this isn't going to start funding OSS.
    console.log('err', err)
}

try {
    if (fundoss) {
        fundoss.run()
    }
} catch (err) {
    console.error(err.stack || err.message || err)
    console.error('\nReport this issue: https://github.com/hutch120/fundoss\n')
}

