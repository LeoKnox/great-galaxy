export default function PlayerInfo({ character }) {
  return (
    <div className="playerInfo">
      <h3>
        {character.name} | {character.level} {character.class}
      </h3>
      <progress id="hp" max={character.hp} value={character.hp} />
    </div>
  );
}

