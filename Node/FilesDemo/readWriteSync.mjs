import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
const filePath = join(process.cwd(), 'file.txt');

// read synchronously
const fileContents = readFileSync(filePath, 'utf8');
console.log('File Contents : ', fileContents);

const upperCaseContent = fileContents.toUpperCase();
writeFileSync(filePath, upperCaseContent)

