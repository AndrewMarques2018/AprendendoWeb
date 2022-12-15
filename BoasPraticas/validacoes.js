// metodo 1
const isDiretion1 = (direction) => {
    if (
        direction === 'up' ||
        direction === 'down' ||
        direction === 'left' ||
        direction === 'right'
    )  {
        return true
    }
    return false
}

// metodo 2
const directions = ['up', 'down', 'left', 'right']
const isDiretion2 = (direction) => directions.includes(direction)

console.log(isDiretion1('up'))
console.log(isDiretion2('up'))
