let lab1 = [5, 5, 5, 5, 10, 10]
let lab2 = [4, 5, 5, 5, 5, 5, 10]
let lab3 = [5, 10, 10, 15]
let lab4 = [10]
let lab5 = [5, 5, 5, 5, 5, 10, 10, 10, 10, 5]
let lab6 = [5, 5, 10, 5, 5, 10]
let quiz1 = 40

var s, p
s = 0
for (p in lab1) {s += lab1[p]}
let sum1 = s

s = 0
for (p in lab2) {s += lab2[p]}
let sum2 = s

s = 0
for (p in lab3) {s += lab3[p]}
let sum3 = s

s = 0
for (p in lab4) {s += lab4[p]}
let sum4 = s

s = 0
for (p in lab5) {s += lab5[p]}
let sum5 = s

s = 0
for (p in lab6) {s += lab6[p]}
let sum6 = s

let sums = [sum1, sum2, sum3, sum4, sum5, sum6]

s = 0
sums.forEach((x) => {s += x}) // computing labs average into var s
s /= sums.length

let total_score = 0.6 * (s) + 0.4 * (quiz1)

const results = {
    lab1: lab1, // array of scores for lab1
    lab2: lab2, // array of scores for lab2
    lab3: lab3, // array of scores for lab3
    lab4: lab4, // array of scores for lab4
    lab5: lab5, // array of scores for lab5
    lab6: lab6, // array of scores for lab6
    quiz1: quiz1, // score of quiz1
    sums: sums, // array of sums of each lab
    total_score: total_score, // computed total score
}

console.log(results)