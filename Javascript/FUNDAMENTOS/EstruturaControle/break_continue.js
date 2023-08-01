const alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's']

for (i in alfabeto) {
    if (++i % 3 == 0) continue
    console.log (alfabeto[i-1])

    if(i == 10) break
}

externo: for (i in alfabeto){
    for (j in alfabeto){
        if(j == 5) continue
        if(j == 10) break
        if(i == 7) break externo
        console.log('i=',i,'j=',j)
    }
}