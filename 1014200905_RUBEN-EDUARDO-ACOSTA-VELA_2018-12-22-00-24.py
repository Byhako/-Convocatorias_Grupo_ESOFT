import numpy as np
import random


def number_of_columns(N,M):
    # creo matriz de ceros de N x M
    matrix = np.zeros((N, M), dtype=int)

    numbers = []
    size = N*M

    # Creo array de numeros aleatorios diferentes entre 1 y N x M
    while True:
        number = random.randrange(1,size+1)
        if not(number in numbers):
            numbers.append(number)
        if len(numbers) == size:
            break

    # Lleno matriz con numeros aleatorios diferentes entre 1 y N x M
    n = 0
    m = 0
    for i in numbers:
        matrix[n][m] = i
        n += 1
        if n == N:
            n = 0
            m += 1

    # Creo array con totales de cada columna
    total_columns = []
    for i in range(M):
        total_columns.append(sum(matrix[:,i]))

    # Obtengo promedio del total de las columnas pares
    even = []
    for i in range(0,M,2):
        even.append(total_columns[i])
    average = np.mean(even)

    # Cuento cuantas columnas está por encima del promedio de los
    # totales de todas las columnas pares
    number_columns = 0
    for i in total_columns:
        if i>average:
            number_columns += 1

    print('Cantidad de columnas cuyo total es mayor que {} = {}'.format(average, number_columns))

    return number_columns

if __name__ == '__main__':
    N = 3
    M = 3

    columns = number_of_columns(N,M)
