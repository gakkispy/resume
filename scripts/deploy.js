const childProcess = require('child_process');

function deploy() {
  const splitCommands = [
    'git add -f dist',
    'git commit -m "Deploying" --quiet',
    `git subtree split --prefix dist -b gh-pages`,
    `git push origin gh-pages:gh-pages --force`,
    `git branch -D gh-pages`,
    `git reset --hard HEAD^`,
  ]
  childProcess.exec(splitCommands.join('&&'), (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  })
}

deploy()