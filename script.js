
    var player = "X";
    var cells = document.getElementsByTagName("td");
    var xWins = 0;
    var oWins = 0;
    for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", function () {
        if (this.textContent === "") {
          this.textContent = player;
          checkWin();
          player = player === "X" ? "O" : "X";
        }
      });
    }

    function checkWin() {
      var winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (var i = 0; i < winningConditions.length; i++) {
        var a = cells[winningConditions[i][0]].textContent;
        var b = cells[winningConditions[i][1]].textContent;
        var c = cells[winningConditions[i][2]].textContent;
        if (a === "" || b === "" || c === "") {
          continue;
        }
        if (a === b && b === c) {
          alert("Parabéns, o jogador " + player + " venceu!");
          clearBoard();
          updateWins(player);
          player = "X";
          return;
        }
      }
      var isTie = true;
      for (var i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
          isTie = false;
          break;
        }
      }
      if (isTie) {
        alert("Empate!");
        clearBoard();
        player = "X";
      }
    }

    function clearBoard() {
      for (var i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
      }
    }

    function restart() {
      clearBoard();
      player = "X";
    }

    function updateWins(player) {
      if (player === "X") {
        xWins++;
        document.getElementById("xWins").textContent = xWins;
      } else {
        oWins++;
        document.getElementById("oWins").textContent = oWins;
      }
    }

    function resetWins() {
      xWins = 0;
      oWins = 0;
      document.getElementById("xWins").textContent = xWins;
      document.getElementById("oWins").textContent = oWins;
    }
