import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  // View Control
  activeProject: string | null = null;

  // === Tic Tac Toe ===
  board: Array<string | null> = Array(9).fill(null);
  currentPlayer: string = 'X';
  winner: string | null = null;
  enableTicTocToee: boolean = false;

  // === Typing Speed Test ===
  typingSentences: string[] = [
    'The quick brown fox jumps over the lazy dog near the riverbank.',
    'Angular is a powerful framework for building scalable web applications.',
    'Artificial intelligence and machine learning are transforming modern development.',
    'Full stack developers bridge the gap between frontend design and backend logic.',
    'Cloud computing enables businesses to deploy and scale applications globally.',
    'Prompt engineering is the art of crafting precise instructions for AI agents.',
  ];
  typingText: string = '';
  typingInput: string = '';
  typingStarted: boolean = false;
  typingFinished: boolean = false;
  typingTimer: number = 0;
  typingInterval: any = null;
  typingWPM: number = 0;
  typingAccuracy: number = 100;
  typingCorrectChars: number = 0;
  typingTotalChars: number = 0;

  // === Password Generator ===
  passwordLength: number = 16;
  passwordIncludeUpper: boolean = true;
  passwordIncludeLower: boolean = true;
  passwordIncludeNumbers: boolean = true;
  passwordIncludeSymbols: boolean = true;
  generatedPassword: string = '';
  passwordStrength: string = 'Strong';
  passwordStrengthPercent: number = 100;
  passwordCopied: boolean = false;

  constructor() {
    this.pickRandomSentence();
    this.generatePassword();
  }

  // === View Navigation ===
  openProject(name: string) {
    this.activeProject = name;
    if (name === 'tictactoe') {
      this.enableTicTocToee = true;
    }
  }

  backToGrid() {
    this.activeProject = null;
    this.enableTicTocToee = false;
    this.resetTyping();
  }

  // Keep old API working
  enableTicTocToe(val: any) { this.openProject('tictactoe'); }
  back(value: any) { this.backToGrid(); }

  // === Tic Tac Toe Logic ===
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

  checkWinner(): boolean {
    const wins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of wins) {
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

  // === Typing Speed Test Logic ===
  pickRandomSentence() {
    this.typingText = this.typingSentences[Math.floor(Math.random() * this.typingSentences.length)];
  }

  onTypingInput(event: any) {
    this.typingInput = event.target.value;

    if (!this.typingStarted && this.typingInput.length > 0) {
      this.typingStarted = true;
      this.typingInterval = setInterval(() => {
        this.typingTimer++;
        this.calculateWPM();
      }, 1000);
    }

    // Calculate accuracy
    this.typingTotalChars = this.typingInput.length;
    this.typingCorrectChars = 0;
    for (let i = 0; i < this.typingInput.length; i++) {
      if (this.typingInput[i] === this.typingText[i]) {
        this.typingCorrectChars++;
      }
    }
    this.typingAccuracy = this.typingTotalChars > 0
      ? Math.round((this.typingCorrectChars / this.typingTotalChars) * 100)
      : 100;

    // Check if finished
    if (this.typingInput.length >= this.typingText.length) {
      this.typingFinished = true;
      clearInterval(this.typingInterval);
      this.calculateWPM();
    }
  }

  calculateWPM() {
    if (this.typingTimer > 0) {
      const wordsTyped = this.typingCorrectChars / 5;
      const minutes = this.typingTimer / 60;
      this.typingWPM = Math.round(wordsTyped / minutes);
    }
  }

  getCharClass(index: number): string {
    if (index >= this.typingInput.length) return 'char-pending';
    return this.typingInput[index] === this.typingText[index] ? 'char-correct' : 'char-wrong';
  }

  resetTyping() {
    this.typingInput = '';
    this.typingStarted = false;
    this.typingFinished = false;
    this.typingTimer = 0;
    this.typingWPM = 0;
    this.typingAccuracy = 100;
    this.typingCorrectChars = 0;
    this.typingTotalChars = 0;
    if (this.typingInterval) clearInterval(this.typingInterval);
    this.pickRandomSentence();
  }

  // === Password Generator Logic ===
  generatePassword() {
    let chars = '';
    if (this.passwordIncludeUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (this.passwordIncludeLower) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (this.passwordIncludeNumbers) chars += '0123456789';
    if (this.passwordIncludeSymbols) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (chars.length === 0) chars = 'abcdefghijklmnopqrstuvwxyz';

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.generatedPassword = password;
    this.passwordCopied = false;
    this.calculateStrength();
  }

  calculateStrength() {
    let score = 0;
    if (this.passwordLength >= 8) score++;
    if (this.passwordLength >= 12) score++;
    if (this.passwordLength >= 16) score++;
    if (this.passwordIncludeUpper) score++;
    if (this.passwordIncludeLower) score++;
    if (this.passwordIncludeNumbers) score++;
    if (this.passwordIncludeSymbols) score++;

    if (score >= 6) { this.passwordStrength = 'Strong'; this.passwordStrengthPercent = 100; }
    else if (score >= 4) { this.passwordStrength = 'Medium'; this.passwordStrengthPercent = 65; }
    else { this.passwordStrength = 'Weak'; this.passwordStrengthPercent = 30; }
  }

  copyPassword() {
    navigator.clipboard.writeText(this.generatedPassword).then(() => {
      this.passwordCopied = true;
      setTimeout(() => this.passwordCopied = false, 2000);
    });
  }

  getStrengthColor(): string {
    if (this.passwordStrength === 'Strong') return 'var(--accent-gold)';
    if (this.passwordStrength === 'Medium') return 'var(--accent-blue)';
    return '#EF4444';
  }
}
