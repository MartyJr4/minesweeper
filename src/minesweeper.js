const generatePlayerBoard = (numberOfRows, numberofColumns) => {
  let board = [''];
  for (numberOfRowsIndex = 0; numberOfRowsIndex < numberOfRows; numberOfRowsIndex++){
    let row = [''];
    for (numberofColumnsIndex = 0; numberofColumnsIndex < numberofColumns; numberofColumnsIndex++){
      row.push('');
    } board.push(row);
  } return board
}
generatePlayerBoard(2,5);
generatePlayerBoard(6,7);

/* const printBoard = board => {
  console.log("Current Board:");
  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
 ];
printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board); */
