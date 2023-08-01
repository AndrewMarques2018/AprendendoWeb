
/*
Verdadeiros
1, 3, 5, 2, 357, -1, ...
' ', [], {}, Infinity, true, 'abc'

Falsos
0, false, "", null, NaN, Undefined
*/

console.log( 0 || false || null || NaN || undefined || "" || 123)  // retorna o primeiro elemento verdadeiro