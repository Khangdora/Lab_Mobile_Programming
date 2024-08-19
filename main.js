function BMI(person) {
    return person.mass / (person.height * person.height)
}

function markHigherBMI(person_A, person_B) {
    return BMI(person_A) > BMI(person_B)
}

function markHigherBMItoString(person_A, person_B) {
    if (markHigherBMI(person_A, person_B)) {
        return person_A.name + '\'s BMI is higher than ' + person_B.name + '\'s!';
    } else {
        return person_B.name + '\'s BMI is higher than ' + person_A.name + '\'s!';
    }
}

function markHigherBMItoStringwithBMI(person_A, person_B) {
    if (markHigherBMI(person_A, person_B)) {
        return person_A.name + '\'s BMI (' + BMI(person_A).toFixed(1) + ') is higher than ' + person_B.name + '\'s (' + BMI(person_B).toFixed(1) + ')!';
    } else {
        return person_B.name + '\'s BMI (' + BMI(person_B).toFixed(1) + ') is higher than ' + person_A.name + '\'s (' + BMI(person_A).toFixed(1) + ')!';
    }
}

//Bắt đầu câu 3
function averageTeam(team) {
    return (team.score1 + team.score2 + team.score3) / 3
}

function compareTeam(team_A, team_B) {
    var teamA = averageTeam(team_A);
    var teamB = averageTeam(team_B);
    if (teamA > teamB) {
        return 'Team A wins with an average score of ' + teamA.toFixed(2);
    } else if (teamA < teamB) {
        return 'Team B wins with an average score of ' + teamB.toFixed(2);
    } else {
        return 'It\'s a draw! Both teams have an average score of ' + teamA.toFixed(2);
    }
}

function compareTeamwithCondition(team_A, team_B) {
    var teamA = averageTeam(team_A);
    var teamB = averageTeam(team_B);
    if (teamA > teamB) {
        if (teamA >= 100) {
            return 'Team ' + team_A.name + ' wins with an average score of ' + teamA.toFixed(2);
        } else {
            return 'Unknown'
        }
    } else if (teamB > teamA) {
        if (teamB >= 100) {
            return 'Team ' + team_B.name + ' wins with an average score of ' + teamB.toFixed(2)
        } else {
            return 'Unknown'
        }
    } else {
        return 'It\'s a draw! Both teams have an average score of ' + teamA.toFixed(2);
    }
}

function compareTeamwithCondition2(team_A, team_B) {
    var teamA = averageTeam(team_A);
    var teamB = averageTeam(team_B);
    if (teamA > teamB && teamA >= 100) {
        return 'Team ' + team_A.name + ' wins with an average score of ' + teamA.toFixed(2);
    } else if (teamB > teamA && teamB >= 100) {
        return 'Team ' + team_B.name + ' wins with an average score of ' + teamB.toFixed(2);
    } else if (teamA == teamB && teamA >= 100) {
        return 'It\'s a draw! Both teams have an average score of ' + teamA.toFixed(2);
    } else {
        return 'Unknown'
    }
}

function tip(value) {
    return ((value >= 50 && value <= 300) ? 0.15 : 0.2) * value;
}

function tiptoString(value) {
    total = value + tip(value);
    return 'The bill was ' + value + ', the tip was ' + tip(value) + ', and the total value ' + total.toFixed(2)
}

//Đối tượng
const [user1, user2, user3, user4] = [
    { name: 'Marks', mass: 78, height: 1.69 },
    { name: 'John', mass: 92, height: 1.95 },
    { name: 'Marks', mass: 95, height: 1.88 },
    { name: 'John', mass: 85, height: 1.76 }
]

const [team1, team2, team3, team4] = [
    { name: 'Dolphins', score1: 96, score2: 108, score3: 89 },
    { name: 'Koalas', score1: 88, score2: 91, score3: 110 },
    { name: 'Dolphins', score1: 97, score2: 112, score3: 101 },
    { name: 'Koalas', score1: 109, score2: 95, score3: 106 }
]

const bill_values = [275, 40, 430]

console.log("Kết quả câu 1: \n" + markHigherBMI(user1, user2) + ", " + markHigherBMI(user3, user4) +
    "\n\nKết quả câu 2.1: \n" + markHigherBMItoString(user1, user2) + "\n" + markHigherBMItoString(user3, user4) +
    "\n\nKết quả câu 2.2: \n" + markHigherBMItoStringwithBMI(user1, user2) + "\n" + markHigherBMItoStringwithBMI(user3, user4) +
    "\n\nKết quả câu 3.2: \n" + compareTeam(team1, team2) + '\n' + compareTeam(team3, team4) +
    "\n\nKết quả câu 3.3: \n" + compareTeamwithCondition(team1, team2) + '\n' + compareTeamwithCondition(team3, team4) +
    "\n\nKết quả câu 3.3: \n" + compareTeamwithCondition2(team1, team2) + '\n' + compareTeamwithCondition2(team3, team4) +
    "\n\nKết quả câu 4: \n" + tiptoString(bill_values[0]) + '\n' + tiptoString(bill_values[1]) + '\n' + tiptoString(bill_values[2]))