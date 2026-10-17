/**
 * @file The GameEnd screen which shows result/stats and affords the player to play another round.
 */

import useStore from "store";
import useBuilding from "hooks/useBuilding";
import Message from "components/common/Message";
import { Table, TableRow, TableItem } from "components/gameEnd/Table";
import { GameMenu, GameFooter } from "views/shared";
import { MIN_BUILDING_TRESHOLD } from "store/constants";
import styles from "./index.module.scss";
import { translateInterfaceText } from "utils/zh-CN";

const GameEndView = () => {
  const language = useStore((state) => state.language);
  const { score, endResult } = useStore((state) => ({
    score: state.score,
    endResult: state.endResult,
  }));
  const notEnoughData = score < MIN_BUILDING_TRESHOLD;
  const resultItems = Array.isArray(endResult) ? endResult : [];
  const hasResult = resultItems.length >= 5;

  // Since we only get a endResult array with a bunch of objects, we first
  // take it apart to get the interesint pieces.Button

  // TODO: Add TypeScript to make this safe

  const numPlayedBuildings = {
    value: resultItems[0]?.value ?? score,
    type: resultItems[0]?.type || "buildings",
  };
  const apm = {
    value: resultItems[1]?.value ?? 0,
    type: resultItems[1]?.type || "actions per minute",
  };
  const accuracy = {
    value: resultItems[2]?.value ?? 0,
    type: resultItems[2]?.type || "accuracy",
  };

  // The endResult array just supplies us with the fastest and slowest building name and time.
  // We get the corresponding icon and shortcut (for visual purposes) by using the custom useBuilding hook.
  const slowest = {
    name: resultItems[3]?.value?.[0] || 0,
    time: resultItems[3]?.value?.[1] ?? 0,
    type: resultItems[3]?.type || "slowest building",
  };
  const fastest = {
    name: resultItems[4]?.value?.[0] || 0,
    time: resultItems[4]?.value?.[1] ?? 0,
    type: resultItems[4]?.type || "fastest building",
  };
  const slowestBuildingWithIcon = useBuilding(slowest.name);
  const fastestBuildingWithIcon = useBuilding(fastest.name);

  return hasResult ? (
    <div className={styles.container}>
      <h2 style={{ alignSelf: "flex-start" }}>{translateInterfaceText("Your result", language)}</h2>
      <Table>
        {notEnoughData && <Message>{translateInterfaceText("Stats require at least {count} played buildings.", language).replace("{count}", MIN_BUILDING_TRESHOLD)}</Message>}
        <TableRow>
          <TableItem value={numPlayedBuildings.value} label={translateInterfaceText(numPlayedBuildings.type, language)} disabled={notEnoughData} />
          <TableItem value={notEnoughData ? 0 : apm.value} label={translateInterfaceText(apm.type, language)} disabled={notEnoughData} />
          <TableItem
            value={notEnoughData ? 0 : accuracy.value}
            label={translateInterfaceText(accuracy.type, language)}
            unit={"%"}
            disabled={notEnoughData}
          />
        </TableRow>
        <TableRow>
          <TableItem
            showBuilding={slowestBuildingWithIcon}
            value={slowest.time}
            label={translateInterfaceText(slowest.type, language)}
            disabled={notEnoughData}
            unit={language === "zh-CN" ? "秒/个" : "sec/avg"}
          />
          <TableItem
            showBuilding={fastestBuildingWithIcon}
            value={fastest.time}
            label={translateInterfaceText(fastest.type, language)}
            disabled={notEnoughData}
            unit={language === "zh-CN" ? "秒/个" : "sec/avg"}
          />
        </TableRow>
      </Table>
      <GameMenu showHome className={styles.menu} />
      <GameFooter />
    </div>
  ) : (
    <div style={{ padding: "4rem 0" }}>{translateInterfaceText("Couldn't fetch end result.", language)}</div>
  );
};

export default GameEndView;
