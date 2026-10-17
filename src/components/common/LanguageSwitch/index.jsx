import { useCallback, useRef, useState } from "react";
import useStore from "store";
import { Button } from "components/common/Button";
import { useLocalStorage, useOnClickOutside } from "hooks";
import { LOCAL_STORAGE_KEY } from "store/constants";
import { translateInterfaceText } from "utils/zh-CN";
import styles from "./index.module.scss";

const LanguageSwitch = () => {
  const {
    language,
    setLanguage,
    showBeforeFirstGame,
    scoreLimit,
    buildingFilter,
    showLabeledKeys,
    keyboardLayout,
    iconDisplayStyle,
  } = useStore((state) => ({
    language: state.language,
    setLanguage: state.setLanguage,
    showBeforeFirstGame: state.showBeforeFirstGame,
    scoreLimit: state.scoreLimit,
    buildingFilter: state.buildingFilter,
    showLabeledKeys: state.showLabeledKeys,
    keyboardLayout: state.keyboardLayout,
    iconDisplayStyle: state.iconDisplayStyle,
  }));
  const [, saveOptions] = useLocalStorage(LOCAL_STORAGE_KEY, {});
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  useOnClickOutside(containerRef, closeMenu);

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    setIsOpen(false);
    saveOptions({
      showBeforeFirstGame,
      scoreLimit,
      buildingFilter,
      showLabeledKeys,
      keyboardLayout,
      iconDisplayStyle,
      language: nextLanguage,
    });
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsOpen(false);
      }}
    >
      <Button
        type="button"
        className={styles.trigger}
        aria-label={translateInterfaceText("Language", language)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        title={translateInterfaceText("Language", language)}
        onClick={() => setIsOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4 4.5h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-3.5l-3.5 3v-3H6a2 2 0 0 1-2-2z" />
          <path d="M10 8.5h10a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-3.5-3H12a2 2 0 0 1-2-2v-2" />
          <path d="M7 10.5l1.5-3 1.5 3M7.6 9.4h1.8M14 13.5h4M16 12l-1.5 4M16 12l1.5 4" />
        </svg>
      </Button>
      {isOpen && (
        <div className={styles.menu} role="menu" aria-label={translateInterfaceText("Language", language)}>
          <button
            type="button"
            className={`${styles.option} ${language === "en" ? styles.selected : ""}`}
            role="menuitemradio"
            aria-checked={language === "en"}
            onClick={() => changeLanguage("en")}
          >
            English
          </button>
          <button
            type="button"
            className={`${styles.option} ${language === "zh-CN" ? styles.selected : ""}`}
            role="menuitemradio"
            aria-checked={language === "zh-CN"}
            onClick={() => changeLanguage("zh-CN")}
          >
            简体中文
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitch;
