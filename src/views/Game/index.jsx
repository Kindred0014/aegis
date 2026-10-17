/**
 * @file THe main game view, which shows the actual game during play.
 */

import useStore from "store";
import { IconSingle, IconGrid, IconName, Keys, Score } from "components/game/";
import { Button } from "components/common/Button";
import styles from "./index.module.scss";
import { translateInterfaceText } from "utils/zh-CN";

const GameView = () => {
  const { recipe, score, scoreLimit, iconDisplayStyle, handleGameEnd } = useStore((state) => ({
    recipe: state.recipe,
    score: state.score,
    scoreLimit: state.scoreLimit,
    iconDisplayStyle: state.iconDisplayStyle,
    handleGameEnd: state.handleGameEnd,
    currentBuilding: state.recipe ? state.recipe[state.score] : null,
    currentA: state.recipe ? state.recipe[state.tick] : null,
  }));
  const useGrid = iconDisplayStyle === "GRID";
  const language = useStore((state) => state.language);
  return recipe ? (
    <div className={styles.container}>
      <div
        className={`
					${styles.game}
					${useGrid ? styles.grid : null}`}
      >
        {useGrid ? <IconGrid /> : iconDisplayStyle === "NAME" ? <IconName /> : <IconSingle />}
        <Keys />
      </div>
      <div className={styles.bottom}>
        <Score score={score} scoreLimit={scoreLimit} />
        <Button onClick={handleGameEnd} tertiary>
          {translateInterfaceText("End game", language)}
        </Button>
      </div>
    </div>
  ) : (
    // Catch error if user hasn't selected any building
    // by selecting neither any age nor type.
    <div className={styles.error} onClick={() => handleGameEnd()}>
      <h3>{translateInterfaceText("No building selected", language)}</h3>
      <p>{translateInterfaceText("Click anywhere to end this session and change your settings.", language)}</p>
    </div>
  );
};

export default GameView;
