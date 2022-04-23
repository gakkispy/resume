const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs')
const childProcess = require('child_process');

const dateFormat = () => {
    const date = new Date()
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
}
const colorRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g
async function print(link) {
    const argv = process.argv[2]
    const outputPath = path.resolve(__dirname, '../output')
    if (!fs.existsSync(outputPath)) fs.mkdirSync(outputPath)
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link);
    if(argv && argv.includes('color')) {
        console.log('print colorful one')
        await page.click('.color-btn')
    }else{
        await page.click('.black-btn')
    }
    const colorFolderDatePath = `${outputPath}/${dateFormat()}`
    const typeFolderPath = `${colorFolderDatePath}/${argv || 'black'}`
    if(!fs.existsSync(colorFolderDatePath))  fs.mkdirSync(colorFolderDatePath)
    if(!fs.existsSync(typeFolderPath))  fs.mkdirSync(typeFolderPath)
    const title = await page.title()
    await page.pdf({ path: `${typeFolderPath}/${title}.pdf`, format: 'a4', printBackground: true });
    await browser.close();
    console.log('success print')
}

function main() {
    console.log(process.cwd())
    const cmd = childProcess.spawn('npm.cmd', ['run',  'dev'])
    cmd.stdout.on('data', (data) => {
        const link = data.toString().match(/Local:\s(.+)[\r\n]/)
        if(link) {
            print(link[1].trim().replace(colorRegex,"")).then(() => {
                childProcess.exec('taskkill /pid ' + cmd.pid + ' /T /F')
            })
        }
    });
    
    cmd.stderr.on('data', (data) => {
        console.error(data.toString());
    })
}

main()