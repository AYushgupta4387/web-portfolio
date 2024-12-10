import { useReducer } from "react";
import styles from "./Game.module.css";
import Button from "../../components/Button/Button";

const gameRules = [
  "Click Start to begin the game.",
  "Guess the randomly generated number by clicking on a dice.",
  "If you guess correctly, earn 5 points and win the game.",
  "If you guess incorrectly, one dice image will be removed.",
  "Each wrong guess reduces your points by 1.",
  "If only one dice remains and your guess is wrong, you lose.",
];

const initialState = {
  availableNumbers: Array.from({ length: 6 }, (_, index) => index + 1),
  status: "ready", // These are the different status our app can be in -> 'ready', 'active', 'finished'
  points: 5,
  highscore: 0,
  randomlyGeneratedNumber: null,
};

function gameReducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        status: "active",
        randomlyGeneratedNumber: Math.ceil(Math.random() * 6),
      };

    case "diceClick": {
      const selectedNumber = action.payload;

      if (
        state.points > 1 &&
        selectedNumber === state.randomlyGeneratedNumber
      ) {
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      }

      if (
        state.points === 2 &&
        selectedNumber !== state.randomlyGeneratedNumber
      ) {
        return {
          ...state,
          status: "finished",
          highscore:
            state.points > state.highscore ? state.points : state.highscore,
        };
      }

      if (
        state.points > 2 &&
        selectedNumber !== state.randomlyGeneratedNumber
      ) {
        return {
          ...state,
          points: state.points - 1,
          availableNumbers: state.availableNumbers.filter(
            (elem) => elem !== selectedNumber
          ),
        };
      }

      return state;
    }

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };

    case "restart":
      return { ...initialState, highscore: state.highscore, status: "ready" };

    default:
      throw new Error("Unknown action type: " + action.type);
  }
}

function Game() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { availableNumbers, status, points, highscore } = state;

  const startGame = function () {
    dispatch({ type: "start" });
  };

  const handleDiceClick = function (elem) {
    dispatch({ type: "diceClick", payload: elem });
  };

  const restartGame = function () {
    dispatch({ type: "restart" });
  };

  return (
    <div className={styles.gameContainer}>
      <h1 className="open-sans-700">The Dice Game 🎲</h1>
      {status === "ready" && (
        <>
          <div className={`${styles.gameDetailsContainer} open-sans-500`}>
            <h2>Game Rules</h2>
            <ol>
              {gameRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ol>
          </div>
          <Button
            buttonClass="mainButton"
            customClass="gameButton"
            onClick={startGame}
          >
            Start Game
          </Button>
        </>
      )}

      {status === "active" && (
        <div className={styles.diceImagesContainer}>
          {availableNumbers.map((elem) => {
            return (
              <img
                onClick={() => handleDiceClick(elem)}
                className={styles.diceImage}
                src={`./dices/Dice-${elem}.png`}
                alt={`Dice-${elem}`}
                key={elem}
              ></img>
            );
          })}
        </div>
      )}

      {status === "finished" && (
        <div className={`${styles.finishScreenContainer} open-sans-500`}>
          {points === 1 && (
            <p>Oh no! You had a back luck. No worries, try again.</p>
          )}

          {points > 1 && (
            <>
              <p>Good Job! Your score is {points} points.</p>
              <p>The current highscore is {highscore} points.</p>
            </>
          )}

          <Button
            buttonClass="mainButton"
            customClass="gameButton"
            onClick={restartGame}
          >
            Restart Game
          </Button>
        </div>
      )}
    </div>
  );
}

export default Game;
