import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  board: Array<string | null> = Array(9).fill(null);
  currentPlayer: string = 'X';
  winner: string | null = null;
  enableTicTocToee:boolean = false;

  handleMove(idx: number) {
    if (!this.board[idx] && !this.winner) { 
      this.board[idx] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else if (!this.board.includes(null)) {
        this.winner = 'Draw';
      }
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  back(value:any){
    if(value == true){
      this.enableTicTocToee = false;
    }
  }
  enableTicTocToe(val:any){
    console.log("val",val)
    if(val == true){
      this.enableTicTocToee = true;
    }
  }
  checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return true;
      }
    }
    return false;
  }
  resetGame() {
    this.board = Array(9).fill(null);
    this.winner = null;
    this.currentPlayer = 'X';
  }
}
