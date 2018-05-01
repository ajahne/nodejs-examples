//from docs: https://nodejs.org/docs/latest-v6.x/api/child_process.html
const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
const version = spawn('node', ['-v']);

const addHandlers = (cmd) => {
  cmd.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  cmd.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  cmd.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

addHandlers(ls);
addHandlers(version);
