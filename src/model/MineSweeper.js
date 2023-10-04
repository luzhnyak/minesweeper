export class Minesweeper {
  constructor(fieldWidth, fieldHeight, maxMines) {
    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;
    this.maxMines = maxMines;
    this.field = [];

    // public int[,] Pole = new int[16,30];
  }

  changeStatus(i, j, status) {
    this.field[i][j].status = status;
  }

  cellCount(status) {
    let n = 0;
    for (let i = 0; i < this.fieldHeight; i++) {
      for (let j = 0; j < this.fieldWidth; j++) {
        if (this.field[i][j].status === status) {
          n++;
        }
      }
    }
    return n;
  }

  openAll() {
    for (let i = 0; i < this.fieldHeight; i++) {
      for (let j = 0; j < this.fieldWidth; j++) {
        if (this.field[i][j].status !== 'blast') {
          this.field[i][j].status = 'open';
        }
      }
    }
  }

  openAuto(i, j) {
    // alert('!');

    for (let k = -1; k < 2; k++) {
      for (let l = -1; l < 2; l++) {
        const posI = i + k;
        const posJ = j + l;

        if (
          posI >= 0 &&
          posJ >= 0 &&
          posI < this.fieldHeight &&
          posJ < this.fieldWidth &&
          !(posI === i && posJ === j) &&
          this.field[posI][posJ].status !== 'open'
        ) {
          this.field[posI][posJ].status = 'open';
          if (this.field[posI][posJ].value === 0) {
            this.openAuto(posI, posJ);
          }
        }
      }
    }
  }

  closeAll() {
    for (let i = 0; i < this.fieldHeight; i++) {
      for (let j = 0; j < this.fieldWidth; j++) {
        this.field[i][j].status = 'close';
      }
    }
  }

  generateField() {
    //Очищення поля від мін
    this.field = [];

    for (let i = 0; i < this.fieldHeight; i++) {
      this.field[i] = [];
      for (let j = 0; j < this.fieldWidth; j++) {
        this.field[i][j] = { status: 'close', value: 0 };
      }
    }

    //Мінування
    for (let m = 0; m < this.maxMines; m++) {
      let randI = Math.floor(Math.random() * this.fieldHeight);
      let randJ = Math.floor(Math.random() * this.fieldWidth);

      while (this.field[randI][randJ].value === -1) {
        //Исключаем попадание на уже существующую мину
        randI = Math.floor(Math.random() * this.fieldHeight);
        randJ = Math.floor(Math.random() * this.fieldWidth);
      }

      this.field[randI][randJ].value = -1; //Помечаем кнопки-мины
    }

    //Пересчитуємо скільки мін навколо простої кнопки

    for (let i = 0; i < this.fieldHeight; i++) {
      for (let j = 0; j < this.fieldWidth; j++) {
        if (this.field[i][j].value === -1) continue;
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
              this.field[posI][posJ].value === -1
            )
              mines++;
          }
        }
        this.field[i][j].value = mines;
      }
    }
  }
}
