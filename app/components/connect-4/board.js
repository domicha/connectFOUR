import React from 'react';
import classNames from 'classnames';
import Connect4 from './lib';
import Cell from './cell';

export default class Board extends React.Component {

  /**
   * Render all the things
   * @return {JSX}
   */
  render() {

    // SHORTCUT TO PROPS BOARD
    let board = this.props.board;

    // GRID CSS CLASSES
    let boardClasses = classNames({
      'connect4-board': true,
      'connect4-board--active': board.isActive,
      'connect4-board--inactive': !board.isActive
    });

    // ARRAY OF CELLS
    let cells = board.grid.map((column, y) => {
      return (
        <div className="connect4-column" key={`column-${y}`}>

          {column.map((cell, x) => {

            let cellClasses = classNames({
              'connect4-cell': true,
              'connect4-cell--red': (cell === 'red'),
              'connect4-cell--blue': (cell === 'blue')
            });

            return (
              <Cell key={`cell-${x}-${y}`}
                x={x}
                y={y}
                cell={cell.toString()}
                nextPlayer={board.nextPlayer}
                addPiece={this.props.addPiece} />
            );

          })}
        </div>
      );
    });


    return (
      <div className={boardClasses}>
        {cells}
      </div>
    );
  }

}

/**
 * REQUIRED PROPERTIES
 * @type {Object}
 */
Board.propTypes = {
  board: React.PropTypes.instanceOf(Connect4.Board),
  addPiece: React.PropTypes.func.isRequired
};
