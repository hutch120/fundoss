const glob = require("glob")
const fs = require('fs-extra')
const path = require('path')

async function collect() {
    try {
        const data = {}
        const productPackageObj = await fs.readJson('package.json')
        if (!productPackageObj) return
        const fundOSSEmail = productPackageObj?.fundoss
        if (!fundOSSEmail || fundOSSEmail === '') return
        data.email = fundOSSEmail
        data.packages = []
        const files = await findAllFundOSSFiles()
        await Promise.all(files.map(async (file) => {
            const filePath = path.dirname(file);
            const packagePath = filePath + '/package.json'
            const packageObj = await fs.readJson(packagePath)
            data.packages.push(packageObj?.name)
        }))
        console.log(data)
    } catch (err) {
        throw new Error('Failed to collect data')
    }
}

function findAllFundOSSFiles() {
    return new Promise(function (resolve, reject) {
        // Find all fundoss.json files in node_modules
        // Assumes this runs from project root folder
        const options = {}
        glob("node_modules/**/fundoss.json", options, function (er, files) {
            if (er) return reject(err)
            resolve(files)
        })
    });
}

function run() {
    collect()
}

module.exports = {
    run
}
