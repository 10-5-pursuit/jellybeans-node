const jellybeansJS = require('./jellybeans')
const jellyBeansJSON = require('./jellybeans.json')

// console.log(jellybeansJS)

const salty = jellybeansJS.filter((bean) => {
    return bean.flavorType === 'salty'
})
// console.log(salty)


const showByFlavor = (flavor) => {
    return jellybeansJS.filter((bean) => {
        return bean.flavorType === flavor
    })
}


// console.log( showByFlavor(process.argv[2]) )

const compareFunction = (a, b) => a.color < b.color ? -1 : 1


const organizeByColor = (candies) => {
    return candies.sort(compareFunction)
}

console.log(organizeByColor(jellyBeansJSON))