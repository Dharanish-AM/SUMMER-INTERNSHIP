import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [dice, setDice] = useState(1);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer(activePlayer === 0 ? 1 : 0);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const rollDice = () => {
    if (!playing) return;
    const rolled = Math.floor(Math.random() * 6) + 1;
    setDice(rolled);

    if (rolled === 1) {
      switchPlayer();
    } else {
      setCurrentScore((prev) => prev + rolled);
    }
  };

  const handleRoll = () => {
    if (!playing) return;
    if (intervalId) clearInterval(intervalId);

    rollDice();
    const newInterval = setInterval(rollDice, 3000);
    setIntervalId(newInterval);
  };

  const handleHold = () => {
    if (!playing) return;
    const updatedScores = [...scores];
    updatedScores[activePlayer] += currentScore;
    setScores(updatedScores);

    if (updatedScores[activePlayer] >= 100) {
      setPlaying(false);
      if (intervalId) clearInterval(intervalId);
    } else {
      switchPlayer();
    }
  };

  const handleNewGame = () => {
    if (intervalId) clearInterval(intervalId);
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setPlaying(true);
    setDice(1);
    setIntervalId(null);
  };

  return (
    <div className="players">
      {[0, 1].map((player) => (
        <section
          key={player}
          className={`player player--${player + 1} ${
            activePlayer === player ? "player--active" : ""
          }`}
          style={{
            background:
              !playing && activePlayer === player ? "#28a745" : "transparent",
          }}
        >
          <h2 className="name score" id={`name--${player}`}>
            Player {player + 1}
          </h2>
          <p className="score" id={`score--${player}`}>
            {scores[player]}
          </p>
          <div className="current">
            <p className="current-label">Current</p>
            <p className="current-score" id={`current--${player}`}>
              {activePlayer === player ? currentScore : 0}
            </p>
          </div>
        </section>
      ))}

      {playing && (
        <img
          src={`dice${dice}.jpg`}
          alt="playing dice"
          className="dice"
          id="dice"
          style={{ transform: `rotate(${Math.random() * 360}deg)` }}
        />
      )}

      <div className="button-group">
        <button className="btn" onClick={handleNewGame}>
          NEW GAME
        </button>
        <button className="btn" onClick={handleRoll}>
          ROLL DICE
        </button>
        <button className="btn" onClick={handleHold}>
          HOLD
        </button>
      </div>
    </div>
  );
}

export default App;
