/**
 * Functions to limit the frequency that messages are shown.
 */

const { tmpdir } = require('os')
const { statSync, unlinkSync, writeFileSync } = require('fs')
const { join } = require('path')
const fs = require('fs-extra')

const LIMIT_FILE_PATH = join(tmpdir(), 'funding-message-shown')
const LIMIT_TIMEOUT = 60 * 1000 // 1 minute

function projectHasFundOSSConfigInPackage() {
  try {
    const productPackageObj = fs.readJsonSync('package.json')
    if (!productPackageObj) return false
    if (productPackageObj?.fundoss) return true
  } catch (err) {
    // console.log('Failed to read product package.json', err)
  }
  return false
}

function isShownRecently() {
  try {
    const { mtime: lastShown } = statSync(LIMIT_FILE_PATH)
    return Date.now() - lastShown < LIMIT_TIMEOUT
  } catch (e) { }
  return false
}

function markShown() {
  try {
    writeFileSync(LIMIT_FILE_PATH, '')
  } catch (err) { }
}

// Only used in tests
function clearShown() {
  try {
    unlinkSync(LIMIT_FILE_PATH)
  } catch (err) { }
}

module.exports = {
  isShownRecently,
  markShown,
  clearShown,
  projectHasFundOSSConfigInPackage
}
