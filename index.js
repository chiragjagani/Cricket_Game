let scoreStr = localStorage.getItem("Score");
      let score;
      resetScore(scoreStr);
      function resetScore(scoreStr) {
        score = scoreStr
          ? JSON.parse(scoreStr)
          : {
              win: 0,
              lost: 0,
              tie: 0,
            };
        score.displayScore = function () {
          return `Score: Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
        };

        showResult();
      }

      function generatecomputerMove() {
        // this will generate random number between 0 and 3
        let randomNum = Math.round(Math.random() * 3);
        if (randomNum > 0 && randomNum <= 1) {
          return "Bat";
        } else if (randomNum > 1 && randomNum <= 2) {
          return "Ball";
        } else {
          return "Stump";
        }
      }

      function getResult(userMove, computerMove) {
        if (userMove === "Bat") {
          if (computerMove === "Ball") {
            score.win++;
            return "User won.";
          } else if (computerMove === "Bat") {
            score.tie++;
            return `It's a tie.`;
          } else if (computerMove === "Stump") {
            score.lost++;
            return "Computer has won.";
          }
        } else if (userMove === "Ball") {
          if (computerMove === "Ball") {
            score.tie++;
            return `It's a tie`;
          } else if (computerMove === "Bat") {
            score.lost++;
            return "Computer has won";
          } else if (computerMove === "Stump") {
            score.win++;
            return "User won.";
          }
        } else if (userMove === "Stump") {
          if (computerMove === "Ball") {
            score.lost++;
            return "Computer has won.";
          } else if (computerMove === "Bat") {
            score.win++;
            return "User won.";
          } else if (computerMove === "Stump") {
            score.tie++;
            return `It's a tie.`;
          }
        }
      }
      function showResult(userMove, computerMove, resultMsg) {
        console.log(score);
        localStorage.setItem("Score", JSON.stringify(score));
        document.querySelector(".user-move").innerText = userMove
          ? `You have chosen ${userMove}`
          : ``;
        document.querySelector(".computer-move").innerText = computerMove
          ? `Computer chocie is ${computerMove}`
          : "";
        document.querySelector(".result").innerText = resultMsg || "";
        document.querySelector(".score").innerText = score.displayScore();
      }