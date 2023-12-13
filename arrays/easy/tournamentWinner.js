// Day 3, Wed, 13/12/23

// 4. Tournament Winner

// There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team recieves 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that recieves the most amount of points.

// Given an array of pairs representing  the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains informaiton about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team in the corresponding competition won and a 0 means that the away team won. It's guaranteed that exacly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

// Sample Input

// competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]

// results = [0, 0, 1]

// Sample Output

// "Python"
// C# beats HTML, Python Beast C#, and Python Beats HTML.
// HTML - 0 points
// C# - 3 points
// Python - 6 point

// Time O(n), where n is the number of competitions that we have. Because we need to loop through all of our competitions in our array
// Space O(k), k is the number of teams that we have competing in our tournament

const HOME_TEAM_WON = 1;
function tournamentWinner(competitions, results) {
  let currentBestTeam = "";
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    let result = results[i];
    let [homeTeam, awayTeam] = competitions[i];

    let winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(scores, 3, winningTeam);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
}

function updateScores(scores, points, team) {
  if (!(team in scores)) scores[team] = 0;
  scores[team] += points;
}

// Time O(n), where n is the number of competitions that we have. Because we need to loop through all of our competitions in our array
// Space O(k), k is the number of teams that we have competing in our tournament
