/**
 * @file Shows an initial message the first time the game is played.
 * Used to ask user for correct keyboard settings to improve the UX and avoid confusion.
 */

import useStore from "store";
import { useLocalStorage } from "hooks";
import { deriveKeyboardLayout } from "utils/keyboard";
import { LOCAL_STORAGE_KEY, KEYBOARD_DEFAULT_LAYOUTS } from "store/constants";
import { GameMenu } from "../shared";
import Keyboard from "components/common/Keyboard";
import styles from "./index.module.scss";
import { translateInterfaceText } from "utils/zh-CN";

const BeforeFirstGame = () => {
  const { setShowBeforeFirstGame, keyboardLayout, language } = useStore((state) => ({
    setShowBeforeFirstGame: state.setShowBeforeFirstGame,
    keyboardLayout: state.keyboardLayout,
    language: state.language,
  }));

  /**
   * Write showBeforeFirstGame to local storage to hide the message for future sessions.
   */
  const [localStorageOptions, setLocalStorageOptions] = useLocalStorage(LOCAL_STORAGE_KEY);

  const handleBeforeFirstGame = () => {
    setShowBeforeFirstGame(false);
    setLocalStorageOptions({
      showBeforeFirstGame: false,
      ...localStorageOptions,
    });
  };

  // Get current keyboard mapping
  const currentLayout = deriveKeyboardLayout(KEYBOARD_DEFAULT_LAYOUTS(), keyboardLayout);

  const layoutNames = {
    NULL: translateInterfaceText("Custom", language),
    DVORAK: translateInterfaceText("Dvorak", language),
  };
  const currentLayoutName = layoutNames[currentLayout] || currentLayout;

  return (
    <div className={styles.container}>
      <div>
        <h2>
          {language === "zh-CN"
            ? translateInterfaceText("keyboard check", language).replace("{layout}", currentLayoutName)
            : `The keyboard layout is set to ${currentLayoutName}, is that correct?`}
        </h2>
        <Keyboard keyboardLayout={keyboardLayout} />
      </div>
      <GameMenu play={"Looks good!"} options={"Change layout"} onPlay={handleBeforeFirstGame} />
    </div>
  );
};

export default BeforeFirstGame;
