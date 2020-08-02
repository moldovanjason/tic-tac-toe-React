    import React from "react";

<div className="page">
    //create your first component
    export class Home extends React.Component {
        constructor() {
            super();
            this.state = {
                player: null,
                winner: null,
                message: "",
                nextUserInput: "X",
                allCells: ["", "", "", "", "", "", "", "", ""],
                player1: ["", "", "", "", "", "", "", "", ""], //X//
                player2: ["", "", "", "", "", "", "", "", ""], //O//
                winning: [
                    [1, 1, 1, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 1, 1, 1, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 1, 1, 1],
                    [1, 0, 0, 1, 0, 0, 1, 0, 0],
                    [0, 1, 0, 0, 1, 0, 0, 1, 0],
                    [0, 0, 1, 0, 0, 1, 0, 0, 1],
                    [1, 0, 0, 0, 1, 0, 0, 0, 1],
                    [0, 0, 1, 0, 1, 0, 1, 0, 0]
                ]
            };
        }

        handleClick = cellId => {
            var currentCells = this.state.allCells.map(
                (element, i) =>
                    this.state.allCells[i] === "" && cellId === i
                        ? this.state.nextUserInput
                        : element
            );
            this.setState({ allCells: currentCells });

            this.setState({
                nextUserInput: this.state.nextUserInput === "X" ? "O" : "X"
            });
            this.winnerCheck(currentCells);
        };

        winnerCheck = currentCells => {
            this.state.winning.forEach(winningCombo => {
                var winner = null;
                let counter = 0;
                for (let i = 0; i < winningCombo.length; i++) {
                    if (winningCombo[i] == 1) {
                        if (currentCells[i] == this.state.nextUserInput) {
                            counter++;
                            if (counter > 2) {
                                this.setState({
                                    winner: this.state.nextUserInput
                                });
                                this.setState({
                                    message: `${
                                        this.state.nextUserInput
                                    } has won the game!!!`
                                });
                                this.setState({
                                    allCells: ["", "", "", "", "", "", "", "", ""]
                                });
                            }
                        }
                    }
                }
            });
        };

        render() {
            return (
                <div className="page text-center mt-5">
                    <div>{this.state.message}</div>
                    <div className="title">TIC-TAC-TOE!</div>
                    <div className="game-row1">
                        <div className="cell" onClick={() => this.handleClick(0)}>
                            {this.state.allCells[0]}
                        </div>
                        <div className="cell" onClick={() => this.handleClick(1)}>
                            {this.state.allCells[1]}
                        </div>
                        <div className="cell" onClick={() => this.handleClick(2)}>
                            {this.state.allCells[2]}
                        </div>
                    </div>
                    <div className="game-row1">
                        <div className="cell" onClick={() => this.handleClick(3)}>
                            {this.state.allCells[3]}
                        </div>
                        <div className="cell" onClick={() => this.handleClick(4)}>
                            {this.state.allCells[4]}
                        </div>
                        <div className="cell" onClick={() => this.handleClick(5)}>
                            {this.state.allCells[5]}
                        </div>
                    </div>
                    <div className="game-row1">
                        <div className="cell" onClick={() => this.handleClick(6)}>
                            {this.state.allCells[6]}
                        </div>
                        <div className="cell" onClick={() => this.handleClick(7)}>
                            {this.state.allCells[7]}
                        </div>
                        <div className="cell" onClick={() => this.handleClick(8)}>
                            {this.state.allCells[8]}
                        </div>
                    </div>
                </div>
            );
        }
    }
</div>