import { Piece } from "../../types/game";

const boardState: string[][] = [
    [`R${Piece.Lion}`, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, `R${Piece.Tiger}`],
    [Piece.Empty, `R${Piece.Dog}`, Piece.Empty, Piece.Empty, Piece.Empty, `R${Piece.Cat}`, Piece.Empty],
    [`R${Piece.Rat}`, Piece.Empty, `R${Piece.Cheetah}`, Piece.Empty, `R${Piece.Wolf}`, Piece.Empty, `R${Piece.Elephant}`],
    [Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty],
    [Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty],
    [Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty],
    [`B${Piece.Elephant}`, Piece.Empty, `B${Piece.Wolf}`, Piece.Empty, `B${Piece.Cheetah}`, Piece.Empty, `B${Piece.Rat}`],
    [Piece.Empty, `B${Piece.Cat}`, Piece.Empty, Piece.Empty, Piece.Empty, `B${Piece.Dog}`, Piece.Empty],
    [`B${Piece.Tiger}`, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, Piece.Empty, `B${Piece.Lion}`],
];

export default boardState;
