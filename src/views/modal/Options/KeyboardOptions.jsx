import useStore from "store";
import { useState, useRef, useCallback } from "react";
import { useOnClickOutside, useKeyPress, useEffectOnce } from "hooks";
import { WrapSegmentedInputComponent } from "./shared";
import { Button } from "components/common/Button";
import LanguageSwitch from "components/common/LanguageSwitch";
import { deriveKeyboardLayout } from "utils/keyboard";
import styles from "./keyboardOptions.module.scss";
import { translateBuildingName, translateInterfaceText } from "utils/zh-CN";
import { isCommonBuildingExcluded } from "utils/game";

// Assets
import buildings from "assets/buildings";

import { KEYBOARD_DEFAULT_LAYOUTS } from "store/constants";

const KeyboardOptions = () => {
  /**
   * Get all option values and setters from Zustand
   */
  const { keyboardLayout, setIndividualKey, setEntireKeyboardLayout, buildingFilter, language, handleGameStart, setOptionsModalOpen } = useStore((state) => ({
    keyboardLayout: state.keyboardLayout,
    setIndividualKey: state.setIndividualKey,
    setEntireKeyboardLayout: state.setEntireKeyboardLayout,
    buildingFilter: state.buildingFilter,
    language: state.language,
    handleGameStart: state.handleGameStart,
    setOptionsModalOpen: state.setOptionsModalOpen,
  }));

  /**
   * Handle re-mapping of keys.
   * If the user clicks a key, keyCanBeMapped will be set to the to-be-mapped key
   * and will listen for changes through the useKeyPress hook.
   * If the user can cancel the action by clicking outside the grid or ESCing (which closes the modal).
   */
  const gridRef = useRef();
  const [keyCanBeMapped, setKeyCanBeMapped] = useState("");

  // Cancel key rebind when clicked outside of keymap area
  useOnClickOutside(gridRef, () => setKeyCanBeMapped(""));

  useKeyPress((key) => {
    if (!keyCanBeMapped) return;
    if (key === "Escape") return setKeyCanBeMapped("");

    const row = keyCanBeMapped[0];
    const col = keyCanBeMapped[1];

    // If the new key is already mapped, re-move the mapping from the other occurence
    let isDuplicate;
    keyboardLayout.forEach((row, i) => {
      const duplicate = row.indexOf(key);
      if (duplicate > -1) {
        isDuplicate = [i, duplicate];
      }
    });
    if (isDuplicate) {
      setIndividualKey(isDuplicate[0], isDuplicate[1], "?");
    }
    setIndividualKey(row, col, key);
    setKeyCanBeMapped("");
  });

  /**
   * Handle keyboard defaul layout menu
   */
  const handleKeyboardLayoutChange = useCallback(
    (layout) => {
      const defaultLayouts = KEYBOARD_DEFAULT_LAYOUTS();
      // If the user clicks the Custom button, reset all key mappings
      if (layout === "CUSTOM") {
        setEntireKeyboardLayout(defaultLayouts.undefined);
      } else setEntireKeyboardLayout(defaultLayouts[layout]);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  /**
   * Misc settings
   */

  // We want to show a css animation once key changes, but we don't want to flash the keys initially.
  // We inject the CSS var for the animation color programmatically after the initial animation has been run.
  const [keyHighlightOnChange, setkeyHighlightOnChange] = useState("rgba(255,255,255,0)");
  useEffectOnce(() => {
    const injectCSSVarAfterInitialAnimCycle = setTimeout(() => setkeyHighlightOnChange("rgba(255,255,255,0.3)"), 300);
    return () => clearTimeout(injectCSSVarAfterInitialAnimCycle);
  });

  // Show or hide building icon overlay
  const [showKeyboardIconOverlay, setShowKeyboardIconOverlay] = useState("I");

  return (
    <div className={styles.container}>
      <h2>{translateInterfaceText("Keyboard profile", language)}</h2>
      <p>{translateInterfaceText("Select an existing profile or re-map individual keys by clicking on the respective button.", language)}</p>
      <div className={styles.inner}>
        <h3 style={{ alignSelf: "flex-start" }}>{translateInterfaceText("Current layout", language)}</h3>
        <WrapSegmentedInputComponent
          name={`keymapOverlay`}
          value={deriveKeyboardLayout(KEYBOARD_DEFAULT_LAYOUTS(), keyboardLayout) || "NULL"}
          onValueChange={(value) => handleKeyboardLayoutChange(value)}
          options={[
            { children: translateInterfaceText("QWERTY", language), value: "QWERTY" },
            { children: translateInterfaceText("QWERTZ", language), value: "QWERTZ" },
            { children: translateInterfaceText("AZERTY", language), value: "AZERTY" },
            { children: translateInterfaceText("Dvorak", language), value: "DVORAK" },
            { children: translateInterfaceText("Custom", language), value: "NULL" },
          ]}
        />
        <div className={styles.grid} ref={gridRef}>
          {keyboardLayout.map((el, row) => {
            return (
              <div className={styles.row} key={row}>
                {el.map((el, col) => {
                  const matchesCell = (el) =>
                    el.shortcut[1][0] === row.toFixed() &&
                    el.shortcut[1][2] === col.toFixed() &&
                    el.age === showKeyboardIconOverlay;
                  const building =
                    buildings.find(
                      (el) => el.group === buildingFilter.group && matchesCell(el)
                    ) || buildings.find(
                      (el) => el.group === "COMMON" && matchesCell(el) &&
                        !isCommonBuildingExcluded(el, buildingFilter.group)
                    );
                  const keyCanBeRemapped = row === keyCanBeMapped[0] && col === keyCanBeMapped[1];

                  return (
                    <button
                      onClick={() => setKeyCanBeMapped([row, col])}
                      style={{
                        "--flash": keyHighlightOnChange,
                      }}
                      className={`
												${styles.key} 
                                                ${styles.highlight} 
												${keyCanBeRemapped ? styles.rebind : null}
												${el === "?" ? styles.missing : null}	

										`}
                      key={el === "?" ? col : el}
                    >
                      <span>{keyCanBeRemapped ? translateInterfaceText("Press Key", language) : el}</span>
                      {building && showKeyboardIconOverlay && (
                        <div
                          className={`
														${styles.icon} 
														`}
                        >
                          <img src={building.icon} alt={translateBuildingName(building.name, language)} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
        <WrapSegmentedInputComponent
          name={`d`}
          label={``}
          value={showKeyboardIconOverlay}
          onValueChange={(value) => setShowKeyboardIconOverlay(value)}
          options={[
            //{ children: 'Hide', value: null },
            { children: `${translateInterfaceText("Age", language)} I`, value: "I" },
            { children: `${translateInterfaceText("Age", language)} II`, value: "II" },
            { children: `${translateInterfaceText("Age", language)} III`, value: "III" },
            { children: `${translateInterfaceText("Age", language)} IV`, value: "IV" },
          ]}
          style={{ width: 356 }}
        />
      </div>
      <div className={styles.footerActions}>
        <Button
          className={styles.startGame}
          primary
          onClick={() => {
            handleGameStart();
            setOptionsModalOpen(false);
          }}
        >
          {translateInterfaceText("Start game", language)}
        </Button>
        <LanguageSwitch />
      </div>
    </div>
  );
};

export default KeyboardOptions;
