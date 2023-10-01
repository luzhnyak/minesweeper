class Minesweeper {
  constructor(fieldWidth, fieldHeight, maxMines) {
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
    this.maxMines = maxMines;
    this.field = [];

    // public int[,] Pole = new int[16,30];
  }

  generateField() {
    //Очищення поля від мін
    this.field = [];

    for (let i = 0; i < this.fieldHeight; i++) {
      this.field[i] = [];
    }

    //Мінування
    for (let m = 0; m < this.maxMines; m++) {
      let randI = Math.floor(Math.random() * this.fieldHeight);
      let randJ = Math.floor(Math.random() * this.fieldWidth);

      while (this.field[randI][randJ] === -1) {
        //Исключаем попадание на уже существующую мину
        randI = Math.floor(Math.random() * this.fieldHeight);
        randJ = Math.floor(Math.random() * this.fieldWidth);
      }

      this.field[randI][randJ] = -1; //Помечаем кнопки-мины
    }

    //Пересчитуємо скільки мін навколо простої кнопки

    for (let i = 0; i < this.fieldHeight; i++) {
      for (let j = 0; j < this.fieldWidth; j++) {
        if (this.field[i][j] === -1) continue;
        //Пересчитываем сколько мин вокруг обычной кнопки, обходим массив 3х3 вокруг нее
        let mines = 0;
        for (let k = -1; k < 2; k++) {
          for (let l = -1; l < 2; l++) {
            let posI = i + k;
            let posJ = j + l;
            if (
              l !== 2 &&
              k !== 2 &&
              posI >= 0 &&
              posI < this.fieldHeight &&
              posJ >= 0 &&
              posJ < this.fieldWidth &&
              this.field[posI][posJ] === -1
            )
              mines++;
          }
        }
        this.field[i][j] = mines;
      }
    }
  }
}

export const mineSweeper = new Minesweeper(10, 10, 10);
mineSweeper.generateField();
