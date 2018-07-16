// Students score, total possible score
// Return letter grade and percentage
// 15/20 -> you got a C (75%)!

const gradeCalc = function(score, totalPossibleScore) {
    const percentage = (score/totalPossibleScore) * 100
    let letterGrade
    if (percentage < 60) {
        letterGrade = "F"
    } else if (percentage < 70) {
        letterGrade = "D"
    } else if (percentage < 80) {
        letterGrade = "C"
    } else if (percentage < 90) {
        letterGrade = "B"
    } else {
        letterGrade = "A"
    }
    return `You got a ${letterGrade} (${percentage}%)!`
}

console.log(gradeCalc(15, 20))
console.log(gradeCalc(70, 90))
console.log(gradeCalc(12, 14))
console.log(gradeCalc(15, 20))