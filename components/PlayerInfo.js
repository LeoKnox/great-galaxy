export default function PlayerInfo({ character }) {
  return (
    <div className="playerInfo">
      <h3>
        {character.name} | {character.level} {character.class}
      </h3>
    </div>
  );
}
