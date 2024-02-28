// Number 1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function isOdd(numbers){
    return new Promise((resolve, reject) =>{
        if (numbers % 2 !== 0){
            resolve(numbers + ' is odd')
        }
        else{
            reject()
        }
    })

}

for (let i = 0; i <= numbers.length - 1; i++){
    isOdd(numbers[i]).then(ifOdd => console.log(ifOdd)).catch(error => {console.log(error)})
}


// For number 2, 3 and 4

const library = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
const limiter = library.length

function getRandomCharacter(library){
    return new Promise((resolve, reject) => {
       let randChar = ''
       randChar += library.charAt(Math.floor(Math.random() * limiter))

       setTimeout(() => {
        resolve(randChar),
        500
       })
    })
}

getRandomCharacter(library).then(char => console.log(char)).catch(error => {console.log(error)})

function getData(library){
    return new Promise((resolve, reject) => {
        let randChar = ''
       randChar += library.charAt(Math.floor(Math.random() * limiter))

       setTimeout(() => {
        reject('Rejected')
       }, 500);

    })
}

getData(library).then(char => {console.log(char)}).catch(error => {console.log(error)})


// Number 4


    function rejectResolve(library){
        return new Promise((resolve, reject) => {
        let count = 0
        let randChar = ''
            for (let i = 0; i < 2; i++){
        randChar += library.charAt(Math.floor(Math.random() * limiter))
        count++

        if(count % 2 === 0){
            
            setTimeout(() => {
                    resolve(randChar)
                    
                }, 500);
            } 
            else{
                setTimeout(() => {
                    reject('Reject')
                }, 500);
        }
            }

            
                
        })
    } 

    async function getrejectResolve() {
        try {
            const result = await rejectResolve(library);
            console.log(result);
            } catch(error) {
        console.log(`Error: ${error}`)
    }
    }

    getrejectResolve()

