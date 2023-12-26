// 1.Compare two Json Object

const objectA={name:'person',age:25}
const objectB={age1:25,name:'person'}

// compare two Json or Object have same property name
function compareObject(objectOne,objectTwo){
    const objectOneKeys= Object.keys(objectOne)
    const objectTwoKeys= Object.keys(objectTwo)
    if(objectOneKeys.length!==objectTwoKeys.length){
        return false
    }
    objectOneKeys.forEach(key=>{
        if(!objectTwoKeys.includes(key)){
            return false
        }
    })
    return true
}

// Print statement
console.log('Compare two json object :',compareObject(objectA,objectB))


// 2.Display all country flag using given api

// Fetch Function call

async function apiCallforDetails(){
    const res=await fetch('https://restcountries.com/v3.1/all')
    const countryDetails=await res.json()
    
    
    console.log('All Country Name',countryDetails.map(data=>data.flag))
    
}


// Fetch Function Invoke

apiCallforDetails()

// 3.Display all country details using given api

// Fetch Function call

async function apiCall(){
    const res=await fetch('https://restcountries.com/v3.1/all')
    const countryDetails=await res.json()
    console.log('Country Details',countryDetails.map(data=>({
        name:data.name.common,
        regions:data.region,
        subRegions:data.subregion,
        population:data.population
    })))
}


// Fetch Function Invoke

apiCall()