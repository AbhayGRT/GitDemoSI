// import { readFile, writeFile } from 'fs/promises';
// import { join } from 'path';

// const filePath = join(process.cwd(), 'file.txt');

// async function updateFile() {
//   try {
//     const contents = await readFile(filePath, 'utf8');
//     console.log("File contents: ", contents);

//     const lowercase = contents.toLowerCase();

//     await writeFile(filePath, lowercase);
//     console.log("File Updated");
//   } catch (error) {
//     console.error("Error: ", error.message);
//   }
// }

// updateFile();

// console.log("Thank You..........");
// console.log("File Updates..............");

import {readFile, writeFile} from 'fs';
import {join} from 'path';
const filePath = join(process.cwd(), 'filesDemo/file.txt');

//read Asynchronously
readFile(filePath, 'utf8', (err, contents) => {
    if(err) {
        return 
    }
    console.log('File Contents : ', contents);

    const lowercase = contents.toLowerCase()
    writeFile(filePath, lowercase, function(err) {
    if(err) {
        throw err
    }
    console.log("file updated")
})
})



console.log("Thank you.....");
console.log("file updates.........");
