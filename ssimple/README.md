MMath : {
    MMath.middle([1, 4, 4]) // Среднее арифмитическое >> 3
    MMath.roundUp /* Округление */: { 
        MMath.roundUp(12, 5) // Оккругление до 5 >> 10
        MMath.roundUp(18, 10) || Math.roundUp(18) // Округление до 10 >> 20
        MMath.roundUp(17, [0, 100]) // Округление от и до >> 0
    }
    MMath
}