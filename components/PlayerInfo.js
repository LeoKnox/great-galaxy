export default function PlayerInfo({ character }) {
  return (
    <div className="playerInfo">
      <h3>
        {character.name} | {character.level} {character.class} {"\t"}
        <progress id="hp" max={character.hp} value={character.hp} />
      </h3>
    </div>
  );
}
