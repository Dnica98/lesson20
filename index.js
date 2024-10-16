

// const obj = {
//     name:'alex',
//     job:'dev',
//     age:'33'
// }

// const arr =['str','str1','str2']

// for(let index in arr) {
//     console.log('for in', index)
// }

// for(let value of arr) {
//     console.log('for of', value)
// }

// const arr = [
//     {   closeToHome: true,
//         high: false,
//         black: true,
//         name: true,
//     },
//     {   closeToHome: true,
//         high: false,
//         black: true,
//         name:false,
//     },
// ]

// const showObj = (list) =>{
//     return list.reduce((acc,curr) =>{
//         const accValues = Object.values(acc)
//         const filtredAcc = accValues.filter( item => item)
//         const currValues = Object.values(curr).filter(item => item)

//         // console.log('acc' , filtredAcc)
//         // console.log('curr' , currValues)

//         return filtredAcc.length > currValues.length ? acc : curr;
//     }) 
// }


// console.log(showObj(arr))

const arr = [1,4,2,4,6,4,2,5,7]

const sortareCrescator = arr.sort((a,b) => a - b)
//    console.log(sortareCrescator)

const sortareDescrescator = arr.sort((a,b) => b - a)
//    console.log(sortareDescrescator)

const numPare = arr.filter(item => item % 2 === 0)
//  console.log(numPare)

const numImpare = arr.filter(item => item % 2)
//  console.log(numImpare)


 const sortFunc = (numList) =>{
    const even = numList.filter(item => item % 2 ===0).sort((a,b)=>a-b)
    const odd = numList.filter(item => item % 2 !== 0).sort((a,b)=>b-a)

    return [...even, ...odd]

 }

 console.log(sortFunc(arr))
