// sync v async 

console.log("start");

setTimeout(function() {
    console.log("async operation complete");
}, 1000);

console.log("end");
// Outputs:
// start
// end
// async operation complete (after 1 second)

// Promises

function asyncOperation(x) {
    return new Promise(function(resolve, reject) {
        if(x) {
            setTimeout(function() {
                resolve("Promise resolved!");
            }, 1000);
        }
        else {
            reject("Promise rejected!");
        }
    });
}
asyncOperation(true)
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    }); // Outputs: Promise resolved! (after 1 second)

asyncOperation(false)
    .then(function(message) {
        console.log(message);
    })
    .catch(function(error) {
        console.log(error);
    }); // Outputs: Promise rejected! (after 1 second)

// async/await

// async function
// await async result
// handle error with try/catch

async function runAsync() {
    try {
        const result = await asyncOperation(true);
        console.log(result); // Outputs: Promise resolved!
    } catch (error) {
        console.log(error);
    }
}

runAsync();

// fetch simulation with async/await

console.log("Fetching data...");

async function fetchData() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 1500);
        });
        console.log(data); // Outputs: Data fetched successfully!
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchData();
