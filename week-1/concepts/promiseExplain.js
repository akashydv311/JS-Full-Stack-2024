
// 1


function getWather() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            // resolve('sunnny')
            reject('No Found')
        }, 2000)
    })
}

/*
getWather().then(
    function (data) {
        console.log("First ", data);
    },
    function (data) {
        console.log("Second ", data);
    }
)
*/

getWather().then((success, error) => {
    if (success) {
        console.log(success);
    } else {
        console.log(error);
    }
})

