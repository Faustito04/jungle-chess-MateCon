import { FC, useMemo, useState } from "react";
import { GameObject } from "../types/game";
import Image from "next/image";
import { isEvenInMatrix } from "../helpers/math";

interface Props {
  object: GameObject,
  x: number,
  y: number,
  isActive: boolean,
  isPossibleMove: boolean,
  onClick: (isActive: boolean) => void
}

const GameSquare: FC<Props> = ({ object, x, y, isActive, isPossibleMove, onClick }) => {
  const [isLight] = useState(() => isEvenInMatrix(x, y));

  const color = useMemo(() => {
    if (object === GameObject.Water)
      return isLight ? 'bg-secondary-500' : 'bg-secondary-700';
    else
      return isLight ? 'bg-primary-500' : 'bg-primary-700';
  }, [object, isLight]);

  return (
    <div
      className={`${color} w-16 h-16 grid place-items-center`}
      onClick={() => onClick(isPossibleMove)}
    >
      {isActive && <div className='bg-[rgba(255,255,0,0.3)] w-full h-full' />}
      {isPossibleMove && <div className='absolute bg-[rgba(40,40,40,0.8)] w-4 h-4 rounded-full z-20' />}
      {object === GameObject.End &&
        <Image
          src="/static/assets/objects/end.png"
          alt="end object"
          width={48}
          height={48}
          draggable={false}
        />}
      {object === GameObject.Trap &&
        <Image
          src="/static/assets/objects/trap.png"
          alt="end object"
          width={48}
          height={48}
          draggable={false}
        />}
    </div>
  )
}

export default GameSquare;
