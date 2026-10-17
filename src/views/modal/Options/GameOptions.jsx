import { useCallback } from "react";
import useStore from "store";
import { translateInterfaceText, translateCivilizationName, translateBuildingName } from "utils/zh-CN";
import Checkbox from "components/common/Checkbox";
import { WrapSegmentedInputComponent, WrapCheckboxComponent } from "./shared";
import styles from "./gameOptions.module.scss";

// Assets
import IconGeneric from "assets/icons/flags/generic.png";
import IconMongol from "assets/icons/flags/mongol.png";
import IconRus from "assets/icons/flags/rus.png";
import IconChinese from "assets/icons/flags/chinese.png";
import IconDelhi from "assets/icons/flags/delhi.png";
import IconAbbasid from "assets/icons/flags/abbasid.png";
import IconMalians from "assets/icons/flags/malians.png";
import IconOttomans from "assets/icons/flags/ottomans.png";
import IconByzantines from "assets/icons/flags/byzantines.png";
import IconJapanese from "assets/icons/flags/japanese.png";
import IconSengoku from "assets/icons/flags/sengoku.png";
import IconTemplar from "assets/icons/flags/templar.png";
import IconLancaster from "assets/icons/flags/lancaster.png";
import IconGoldenHorde from "assets/icons/flags/golden-horde.png";
import IconTughlaq from "assets/icons/flags/tughlaq.png";
import IconMacedonian from "assets/icons/flags/macedonian.png";
import IconJin from "assets/icons/flags/jin.png";

import SingleIcon from "assets/icons/ui/single.svg";
import GridIcon from "assets/icons/ui/grid.svg";

const GameOptions = () => {
  /**
   * Get all option values and setters from Zustand
   */
  const {
    scoreLimit,
    setScoreLimit,
    showLabeledKeys,
    setShowLabeledKeys,
    iconDisplayStyle,
    handleSetIconDisplayStyle,
    buildingFilter,
    setBuildingFilter,
    language,
  } = useStore((state) => ({
    scoreLimit: state.scoreLimit,
    setScoreLimit: state.setScoreLimit,
    showLabeledKeys: state.showLabeledKeys,
    setShowLabeledKeys: state.setShowLabeledKeys,
    iconDisplayStyle: state.iconDisplayStyle,
    handleSetIconDisplayStyle: state.handleSetIconDisplayStyle,
    buildingFilter: state.buildingFilter,
    setBuildingFilter: state.setBuildingFilter,
    language: state.language,
  }));
  const { ages, types, group } = buildingFilter;
  const tr = (text) => translateInterfaceText(text, language);

  /**
   * Handle building filter
   */
  const handleFilter = useCallback(
    (category, key, isCheckbox) => {
      const obj = buildingFilter;
      if (isCheckbox) obj[category][key] = !obj[category][key];
      else obj[category] = key;
      setBuildingFilter(obj);
    },
    [buildingFilter, setBuildingFilter]
  );

  return (
    <div className={styles.container}>
      <h2>{tr("Options")}</h2>
      <h3>{tr("Building options")}</h3>
      <WrapSegmentedInputComponent
        name={`buildings`}
        label={tr("Number of buildings each game")}
        value={scoreLimit}
        onValueChange={(value) => setScoreLimit(value)}
        options={[{ value: 25 }, { value: 50 }, { value: 100 }]}
      />
      <WrapSegmentedInputComponent
        className={styles.civilizations}
        name={`civ`}
        label={tr("Civilization")}
        value={group}
        onValueChange={(value) => handleFilter("group", value)}
        options={[
          {
            icon: IconGeneric,
            title: translateCivilizationName("GENERIC", language),
            value: "GENERIC",
          },
          {
            icon: IconAbbasid,
            title: translateCivilizationName("ABBASID", language),
            value: "ABBASID",
          },
          {
            icon: IconChinese,
            title: translateCivilizationName("CHINESE", language),
            value: "CHINESE",
          },
          {
            icon: IconMongol,
            title: translateCivilizationName("MONGOL", language),
            value: "MONGOL",
          },
          {
            icon: IconRus,
            title: translateCivilizationName("RUS", language),
            value: "RUS",
          },
          {
            icon: IconDelhi,
            title: translateCivilizationName("DELHI", language),
            value: "DELHI",
          },
          {
            icon: IconMalians,
            title: translateCivilizationName("MALIANS", language),
            value: "MALIANS",
          },
          {
            icon: IconOttomans,
            title: translateCivilizationName("OTTOMANS", language),
            value: "OTTOMANS",
          },
          {
            icon: IconJapanese,
            title: translateCivilizationName("JAPANESE", language),
            value: "JAPANESE",
          },
          {
            icon: IconByzantines,
            title: translateCivilizationName("BYZANTINES", language),
            value: "BYZANTINES",
          },
          {
            icon: IconSengoku,
            title: translateCivilizationName("SENGOKU", language),
            value: "SENGOKU",
          },
          {
            icon: IconTemplar,
            title: translateCivilizationName("TEMPLAR", language),
            value: "TEMPLAR",
          },
          {
            icon: IconLancaster,
            title: translateCivilizationName("LANCASTER", language),
            value: "LANCASTER",
          },
          {
            icon: IconGoldenHorde,
            title: translateCivilizationName("GOLDEN_HORDE", language),
            value: "GOLDEN_HORDE",
          },
          {
            icon: IconTughlaq,
            title: translateCivilizationName("TUGHLAQ", language),
            value: "TUGHLAQ",
          },
          {
            icon: IconMacedonian,
            title: translateCivilizationName("MACEDONIAN", language),
            value: "MACEDONIAN",
          },
          {
            icon: IconJin,
            title: translateCivilizationName("JIN", language),
            value: "JIN",
          },
        ]}
      />
      <WrapCheckboxComponent label={tr("Building ages")} id="ages">
        {Object.keys(ages).map((el, i) => (
          <Checkbox value={ages[el]} onChange={() => handleFilter("ages", el, true)} key={i}>
            {tr("Age")}
            <span
              style={{
                textTransform: "uppercase",
                marginLeft: "0.25em",
              }}
            >
              {el}
            </span>
          </Checkbox>
        ))}
      </WrapCheckboxComponent>
      <WrapCheckboxComponent label={tr("Building types")}>
        {Object.keys(types).map((el, i) => (
          <Checkbox value={types[el]} onChange={() => handleFilter("types", el, true)} key={i}>
            {tr(el)}
          </Checkbox>
        ))}
      </WrapCheckboxComponent>
      {/*
       * Display
       */}
      <h3>{tr("Display options")}</h3>
      <WrapSegmentedInputComponent
        name={`showLabels`}
        label={tr("Show labelled or blank key caps")}
        value={showLabeledKeys}
        onValueChange={(value) => setShowLabeledKeys(value)}
        options={[
          {
            children: tr("Labelled keys"),
            value: "SHOW",
            icon: <span className={styles.iconKey}>Q</span>,
          },
          {
            children: tr("Slowly fade in labels"),
            value: "FADE_IN",
            icon: (
              <span className={styles.iconKey}>
                <span className={styles.fade}>Q</span>
              </span>
            ),
          },
          {
            children: tr("Blank keys"),
            value: "HIDE",
            icon: (
              <span className={styles.iconKey}>
                <span className={styles.blank}>Q</span>
              </span>
            ),
          },
        ]}
      />
      <WrapSegmentedInputComponent
        name={`iconDisplayStyle`}
        label={tr("Icon style")}
        value={iconDisplayStyle}
        onValueChange={(value) => handleSetIconDisplayStyle(value)}
        options={[
          {
            children: tr("Icon + Name"),
            value: "SINGLE",
            icon: SingleIcon,
          },
          { children: tr("Icon in grid"), value: "GRID", icon: GridIcon },
          {
            children: tr("Name only"),
            value: "NAME",
            icon: <span className={styles.iconName}>{translateBuildingName("House", language)}</span>,
          },
        ]}
      />
    </div>
  );
};

export default GameOptions;
