#! /usr/bin/env node

const commander = require('commander')
const cmd = require('node-cmd')
commander.version('1.0.0')
  .option('-a, --aaa', '这是一条aaa的命令')
  .option('-b, --bbb', '这是一条bbb的命令')
  .option('-c, --ccc [name]', '这是一条ccc的命令')
  .parse(process.argv);

if (commander.aaa) {
  console.log('aaa')
}

if (commander.bbb) {
  console.log('bbb')
}

if (commander.ccc) {
  console.log('ccc', commander.ccc)
}

commander
  .command('init <extensionId>')
  .description('init extension project')
  .action((extensionId) => {
    id = extensionId;
    console.log(`init Extension Project "${extensionId}"`);
  
    cmd.get(
      `
      mkdir -p static/${extensionId}

      mkdir tmp
      mkdir tmp/source-file
      mkdir tmp/build-file
      curl -o tmp/source-file/index.js 
      `
    )
  })