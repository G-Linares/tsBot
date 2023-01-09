// Takes an array of items and chunk the items into a matrix
// Usefull for offset based pagination

// ---  items:T[] items to be chunked 
// --- chunk: number, how many items we want per matrix
// --- the function will return a 2d array of types, or a matriz

export function chunk<T>(items: T[], chunk: number): T[][] {
    // Initialize the matriz
    const chunks: T[][] = []

    // For loop to loop until i si more than our items available, increment by the given chunk
    // Each iteration will copy push targeted chunk from the passed items, to the chunks array
    for(let i = 0; i <items.length ; i += chunk){
        chunks.push(items.slice(i, i + chunk))
    }

    return chunks
}

// here's a playground you can check to understand the function 
// https://www.typescriptlang.org/play?#code/FDBmFcDsGMBcEsD2kAE0AWUDWAeAKgHwAU8sApgLYDOAXCngNoC6ANGppFnZOBQEZkATgEo6jJsxQBvYCjlpkVWO2y16zSQF4UzWfNCJBRADZll8FNoAMAbhQWcpSlQB0pyAHNY6FHYsBqbQxsYRl5cJVOVwAHcCp0EnJqFypjeGgyEjYAyKxhYT05AF8QcMEzcEFUYKjgEuBoRWUDREsUSDIAdxQAQUFBAEMATyIAJithF1B4Y2MiAHIAMUREABN5gobFRFM3RA8iGqwiFrYAFnygA
