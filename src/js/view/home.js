import React from "react";

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
		var currentPlayer1 = this.state.allCells.map(
			(element, i) =>
				this.state.allCells[i] === "" && cellId === i
					? this.setState.nextUserInput
					: element
		);
		this.setState.state({ allCells: currentCells });

		// if (this.state.nextUserInput === "X")
		// 	var currentPlayer1 = this.state.player1.map(
		// 		(element, i) =>
		// 			this.state.player1[i] === "" && cellId === i
		// 				? this.setState.nextUserInput
		// 				: element
		// 	);
		// this.setState.state({ player1: currentCells1 });

		// if (this.state.nextUserInput === "O")
		// 	var currentPlayer2 = this.state.player2.map(
		// 		(element, i) =>
		// 			this.state.player2[i] === "" && cellId === i
		// 				? this.setState.nextUserInput
		// 				: element
		// 	);
		// this.setState.state({ player2: currentCells2 });
		// currentCells is identifying the cell that is clicked.
		// compare each index to the cell clicked and assigned new value from the nextUserInput
		this.setState({ allCells: currentCells });
		this.setState({
			nextUserInput: this.state.nextUserInput === "X" ? "O" : "X"
		});
        this.winnterCheck(currentCells);
        

    };


    winnerCheck=currentCells =>{
        this.state.winning.forEach(winningCombo=>{
            var winner = null;
            let counter = 0;
            for(let i=0;i<winningCombo.length.i++){
                if(winningCombo[i]==1){
                    if(currentCells[i]==this.state.nextUserInput){
                         counter++; 
                         if (counter>2) {
                            this.setState({
                                winner:this.state.nextUserInput
                            });
                            this.setState({message:`${this.state.nextPlayerInput} has won the game!!!`});
                            this.setState({
                                allCells: ["", "", "", "", "", "", "", "", ""]
                            });
                        }
                    }
                }
            }
        })
    }


	render() {
		return (
			<div className="page text-center mt-5">
                <div>{this.state.message}</div>
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
