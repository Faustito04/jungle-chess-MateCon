import { Piece } from "../types/game";

const getPieceValue = (piece: string) => {
	switch (piece) {
		case Piece.Rat:
			return 1;
		case Piece.Cat:
			return 2;
		case Piece.Dog:
			return 3;
		case Piece.Wolf:
			return 4;
		case Piece.Cheetah:
			return 5;
		case Piece.Tiger:
			return 6;
		case Piece.Lion:
			return 7;
		case Piece.Elephant:
			return 8;
		default:
			return -1;
	}
};

export const canEat = (p1: string, p2: string) => {
	if (p2.length === 1) return true;
	if (p1[0] === p2[0]) return false;
	return (
		getPieceValue(p1[1]) > getPieceValue(p2[1]) ||
		getPieceValue(p1[1]) + 7 === getPieceValue(p2[1])
	);
};
