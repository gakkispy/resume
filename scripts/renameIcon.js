const path = require('path')
const fs = require('fs')

function renameIcon() {
    const folderPath = path.resolve(__dirname, '../src/svgs')
    fs.readdir(folderPath, (err, data) => {
        data.forEach((fileName => {
            if(fileName.includes('.svg')) {
                const fileNameArr = fileName.split('.')
                const newFileName = fileNameArr[0].split('-')[0]
                fs.rename(path.resolve(folderPath, fileName), path.resolve(folderPath, newFileName + '.' + fileNameArr[1]), (err) => {
                    if (err) throw err;
                    console.log(`rename success to ${newFileName}`);
                })
            }
        }))
    })
}

renameIcon()