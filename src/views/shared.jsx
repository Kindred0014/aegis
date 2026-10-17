import useStore from "store";
import { Button, ButtonRow } from "components/common/Button";
import LanguageSwitch from "components/common/LanguageSwitch";
import Footer from "components/layout/Footer";
import { translateInterfaceText } from "utils/zh-CN";

import HRE from "assets/icons/flags/hre.png";
import Wood from "assets/icons/misc/wood.png";

// Assets

const GameMenu = ({ play = "Start typing", playAgain = "Play again", onPlay, options = "Options", showLanguageSwitch = false, showHome = false, onHome, className }) => {
  const { setOptionsModalOpen, endResult, handleGameStart, handleReturnHome, language } = useStore((state) => ({
    setOptionsModalOpen: state.setOptionsModalOpen,
    endResult: state.endResult,
    handleGameStart: state.handleGameStart,
    handleReturnHome: state.handleReturnHome,
    language: state.language,
  }));
  return (
    <ButtonRow withLanguageSwitch={showLanguageSwitch} className={className}>
      <Button onClick={onPlay || handleGameStart} style={{ width: showLanguageSwitch ? "100%" : showHome ? "100%" : "60%", marginRight: showHome ? 0 : undefined }} primary>
        {translateInterfaceText(endResult ? playAgain : play, language)}
      </Button>
      <Button onClick={() => setOptionsModalOpen(true)} style={{ width: showLanguageSwitch ? "100%" : showHome ? "100%" : "40%", position: "relative" }}>
        {translateInterfaceText(options, language)}
      </Button>
      {showHome && <Button onClick={onHome || handleReturnHome} style={{ width: "100%" }}>{translateInterfaceText("Return to home", language)}</Button>}
      {showLanguageSwitch && <LanguageSwitch />}
    </ButtonRow>
  );
};

const GameFooter = () => {
  const language = useStore((state) => state.language);
  return (
    <Footer>
      <ul>
        <li>
          Created with <img src={Wood} alt={language === "zh-CN" ? "木材" : "Wood"} /> in <img src={HRE} alt={language === "zh-CN" ? "神圣罗马帝国" : "Holy Roman Empire"} />
        </li>
      </ul>
    </Footer>
  );
};

export { GameMenu, GameFooter };
