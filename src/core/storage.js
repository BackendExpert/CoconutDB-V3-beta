const fs = require('fs-extra')
const path = require('path')

let config = []

try {
    config = require(path.join(process.cwd(), 'coconut.config.json'))
} catch { }

class Stroge {
    static baseUrl = path.join(process.cwd(), config.dataDir || 'data')

    // check dir is alredy in

    static ensureDirectory() {
        fs.ensureDirSync(this.baseUrl)
    }

    // get current file path

    static getFilePath(collection) {
        this.ensureDirectory()
        return path.join(this.baseUrl, `${collection}.json`)
    }

    // read file

    static async readFile(collection) {
        const filepath = this.getFilePath(collection)

        if (await fs.pathExists(filepath)) {
            const data = await fs.readFile(filePath, 'utf-8');
            return JSON.parse(data);
        }
        return []
    }

    static async writeFile(collection) {
        const filePath = this.getFilePath(collection)
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    }

    static async createFile(collection) {
        const filePath = this.getFilePath(collection);
        await fs.writeFile(filePath, JSON.stringify([document], null, 2), 'utf-8');
    }
}


module.exports = Stroge