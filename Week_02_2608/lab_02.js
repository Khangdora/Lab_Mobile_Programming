// PART 2 - Coding Challenge #1
function calcAverage(team) {
    return (team.score1 + team.score2 + team.score3) / 3;
}

function checkWinner(team_A, team_B) {
    aAverage = calcAverage(team_A);
    bAverage = calcAverage(team_B);
    if (aAverage >= bAverage * 2) {
        return team_A.name + " win (" + aAverage + " .vs " + bAverage + ")";
    } else if (bAverage >= bAverage * 2) {
        return team_B.name + " win (" + bAverage + " .vs " + aAverage + ")";
    } else {
        return "Both teams lost (" + aAverage + " .vs " + bAverage + ")";
    }
}

// PART 2 - Coding Challenge #2 (trùng với PART 1)
// PART 2 - Coding Challenge #3 (trùng với PART 3)
// PART 2 - Coding Challenge #4
function calcTip(value) {
    return ((value >= 50 && value <= 300) ? 0.15 : 0.2) * value;
}

const tips = [];
const totals = [];

function calcTip_Q4(bills) {
    for (const bill of bills) {
        const tip = calcTip(bill);
        const total = bill + tip;

        tips.push(tip);
        totals.push(total);
    }

    return "Mảng tips: " + tips + "\nMảng totals: " + totals;
}

//PART 2 - Coding Challenge #5
function printForecast(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i] + "°C in " + (i + 1) + " days\n";
    }
    return str.trim();
}

//DATA
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const [team1, team2, team3, team4] = [
    { name: 'Dolphins', score1: 44, score2: 23, score3: 71 },
    { name: 'Koalas', score1: 65, score2: 54, score3: 49 },
    { name: 'Dolphins', score1: 85, score2: 54, score3: 41 },
    { name: 'Koalas', score1: 23, score2: 34, score3: 27 }
]

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

console.log("Kết quả câu 1: \n" + checkWinner(team1, team2) + "\n" + checkWinner(team3, team4) +
    "\n\nKết quả câu 4: \n" + calcTip_Q4(bills) +
    "\n\nKết quả câu 5: \n" + printForecast(arr1) + "\n" + printForecast(arr2))