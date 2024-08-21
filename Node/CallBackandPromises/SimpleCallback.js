// function doSomething(cb){
//     console.log("Do Something.........")
//     cb();
// }

// const nextStep = () => console.log("Callback called");

// doSomething(nextStep)
// // doSomething(() => console.log("Callback called"))

// // It is also possible to pass a function that receive arguments;

// const calculateNameLength = (name,cb) => {
//     const length = name.length
//     cb(length)
// }

// calculateNameLength("Azure DevOps", (length) => console.log("The length is "  + length))

// // Timers and Intervals
// console.log("Before the setTimeOut ")
// const secondMilliSeconds = 1000;
// setTimeout(() => console.log("A second has passed"),secondMilliSeconds)
// console.log("After Timeout")

// var secondInMilliSeconds = 1000
 
// let totalExecutions = 0;
// console.log("Before the set timeout")
// setInterval(() => {
//     totalExecutions++;
//     console.log(`A second has passed, this is the ${totalExecutions} execution`)

// },secondInMilliSeconds);
// console.log('After setInterval')


// let totalExec = 0;
// console.log("Before the set timeout")
// const handle = setInterval(() => {
//     totalExec++;
//     console.log(`A second has passed, this is the ${totalExec} execution`)

//  if (totalExec == 15){clearInterval(handle)}},secondInMilliSeconds);
// console.log('After setInterval')

// const doSomething = (cb) => {
//     const error = new Error("Something went wrong")
//     cb(error,null)
// }

// doSomething((error = true,result) => {
//     error = true
//     if(error){
//         console.log("There was an error")
//         return;
//     }
//     console.log("Result: " + result)
//     console.log("Every thing went well")
// })

// readFile("docs.md", (err, mdContent) => {
//     convertMarkdownToHTML (mdContent, (err, htmlContent) => {
//     addCssStyles (htmlContent, (err, docs) => {
//     saveFile(docs, "docs.html", (err, result) => {
//     ftp.sync((err, result) => {
// })
// })
// })
// })
// })

//Promise Chaining
// fetch('https://api.demo.foo/v1/todo')
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(error => console.log(error));


// const setTimeOutPromise = (time) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => { reject() },time) });
// }

// console.log("Before set time out promise")
// setTimeOutPromise(1000).then(() => console.log('one second later')).catch(()=>{console.log("Error")});
// console.log("After set time out promise")

// Parallel promises -------------------

// const randomTimeOutPromise = () => {
//     return new Promise((resolve,reject) => {
//         const time = Math.floor(Math.random() * 1000);
//         setTimeout(() => {
//             console.log(`Promise resolved in ${time}ms`)
//             resolve(time);
//         },time)
//     })
// }

// Promise.all(
//     [
//         randomTimeOutPromise(),
//         randomTimeOutPromise(),
//         randomTimeOutPromise(),
//         randomTimeOutPromise(),
//         randomTimeOutPromise(),
    
//     ]
// ).then((results) => console.log("Result " + results));

// Promise.race([
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),
//     randomTimeOutPromise(),

// ]).then((results) => console.log("Result " + results));


// const generatePromise = shouldFail => {
//     return new Promise ((resolve,reject) => {
//         if (shouldFail){
//             return reject(new Error("Rejected!"));
//         }
//         resolve("Success!")
//     })

// }

// generatePromise(true).catch(error => console.log("Error message: ",error))


// const asyncFun = async (generateError) => {
//     if (generateError){
//         throw new Error("Error generated");
//     }
//     return 1
// };
// // asyncFun().then((result) => console.log(result));
// asyncFun(true).catch((error) => console.log(error));

// // Chaining promises
// generatePromise()
// .then(generatePromise)
// .then(result => {

// return generatePromise(true);
// })
// .then(() => console.log("This will be called"))
// .catch(error => console.log("Error message: ",error))

// const fetchData = async() => {
//     try {
//         const response = await fetch('https://api.demo.foo/v1/todo')
//         const json = await response.json()
//         console.log(json)

//     }
//     catch (error){
//         console.log(error)
//     }
// }

// fetchData()

const generatePromise = shouldFail => {
    return new Promise((resolve, reject) => {
        if(shouldFail) {
            return reject(new Error("Rejected!"));
        }
        resolve("Success!");
    });
};

generatePromise(true)
.then(result => console.log("Result: ", result))
.catch(error => console.log("Error message: ", error.message))
.finally(() => console.log("Promis settled"));

