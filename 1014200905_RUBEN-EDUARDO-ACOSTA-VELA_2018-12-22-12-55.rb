
def number_of_columns(n,m)

    # creo matriz de ceros de N x M
    matrix = Array.new(n, [])
    for i in (0...n)
        matrix[i] = Array.new(m, [])
    end

    numbers = []
    size = n*m

    # Creo array de numeros aleatorios diferentes entre 1 y N x M
    while true
        number = rand(size) + 1
        if not(numbers.include?(number))
            numbers.append(number)
        end
        if numbers.length == size
            break
        end
    end


    # Lleno matriz con numeros aleatorios diferentes entre 1 y N x M
    row = 0
    column = 0
    for i in numbers
        matrix[row][column] = i
        row += 1
        if row == n
            row = 0
            column += 1
        end
    end

    # matriz transpuesta
    transpose = matrix.transpose

    # Creo array con totales de cada columna
    total_columns = []

    for i in transpose
        total_columns.push(i.reduce :+)
    end

    # Obtengo promedio del total de las columnas pares
    even = []
    for i in (0...m).reject {|i| i%2!=0}
        even.push(total_columns[i])
    end

    average = (even.reduce :+).to_f / even.size.to_f


    # Cuento cuantas columnas están por encima del promedio de los
    # totales de todas las columnas pares
    number_columns = 0
    for i in total_columns
        if i>average
            number_columns += 1
        end
    end

    puts("Cantidad de columnas cuyo total es mayor que #{average} = #{number_columns}")

    return number_columns

end



number_of_columns(4,4)
