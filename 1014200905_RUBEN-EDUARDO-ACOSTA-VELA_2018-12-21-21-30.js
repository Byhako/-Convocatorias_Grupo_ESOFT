function number_of_columns (N,M) {
    // creo matriz de ceros de N x M
    let matrix = new Array(N)

    for (let i=0 ; i<N ; i++) {
        matrix[i] = new Array(M)
    }

    let numbers = []
    let size = N*M

    // Creo array de numeros aleatorios diferentes entre 1 y N x M
    while (true) {
        let number = Math.floor(Math.random()*size) + 1
        if (numbers.indexOf(number) === -1) {
            numbers.push(number)
        }
        if (numbers.length === size) {
            break
        }
    }

    // Lleno matriz con numeros aleatorios diferentes entre 1 y N x M
    let n = 0
    let m = 0

    for (let i in numbers) {
        matrix[n][m] = numbers[i]
        n++
        if (n === N) {
            n = 0
            m++
        }
    }

    // Creo array con totales de cada columna
    let total_columns = []

    for(let i=0 ; i<M ; i++){
        const column = matrix.map((value) => value[i])
        const sum = column.reduce((a, b) => a + b)
        total_columns.push(sum)
    }

    // Obtengo promedio del total de las columnas pares
    let even = []
    for(let i=0 ; i<M ; i=i+2) {
        even.push(total_columns[i])
    }

    let summation = even.reduce((a, b) => (a + b), 0)
    let average = summation / even.length

    // Cuento cuantas columnas está por encima del promedio de los
    // totales de todas las columnas pares
    let number_columns = 0
    for (i in total_columns) {
        if (total_columns[i] > average) {
            number_columns++
        }
    }

    console.log(`Cantidad de columnas cuyo total es mayor que ${average} = ${number_columns}`)

    return number_columns
}



N = 3
M = 4

const columns = number_of_columns(N,M)
