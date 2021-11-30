const { readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

writeFileSync('./content/result-sync.txt', 'Hello World', {
    flag: 'a'
})

// to append without overwriting the file

writeFileSync('./content/result-sync.txt', ' This is without overwritiing', {
    flag: 'a'
})

console.log('done with the task');
console.log('starting with next one');