export default function GameOver({ player, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {player && <p>Congratulations, {player}!</p>}
      {!player && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Play Again</button>
      </p>
    </div>
  );
}
