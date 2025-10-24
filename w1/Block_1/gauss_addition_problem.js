/*
    MEM_0: total sum from 1 to 10
    MEM_1: next number to be added to the total sum in the loop
    MEM_2: kind of unnecessary, can check if MEM_1 is equal to 11 in each loop (It is necessary here because the result of mem_1 - 11 must be stored in memory somehow)
    
    FLOW:
    - Initialize mem_0 to 0, mem_1 to 1
    - loop infinitely:
    -   Check if mem_1 is 11. If it is, output the total sum and exit the loop
    -   If not, add mem_1 to total sum, then increase it by 1    
*/

// let mem_0 = 0
// let mem_1 = 1

// while (true)
// {
//     let mem_2 = mem_1
//     mem_2 -= 11

//     if (mem_2 == 0)
//     {
//         console.log(mem_0)
//         break
//     }

//     mem_0 += mem_1
//     mem_1 += 1
// }

// Optimisation
let total = 0, count = 1

while (count <= 10)
{
    total += count
    count++
}

console.log(total)

