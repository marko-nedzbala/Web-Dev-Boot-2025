
console.log('testing the first Node script of the course');


console.log(process.argv);

if(process.argv[2] === 'something') {
    console.log("It's something");
}

const fs = require('fs');
const folderName = process.argv[2] || 'Project';
 
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index2.html`, '');
    fs.writeFileSync(`${folderName}/app2.js`, '');
    fs.writeFileSync(`${folderName}/styles2.css`, '');
} catch (e) {
    console.log("SOMETHING WENT WRONG!!!");
    console.log(e);
}



























