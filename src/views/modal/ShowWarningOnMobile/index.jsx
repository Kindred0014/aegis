/**
 * @file Because the website is not usable on mobile devices, we show a conditional
 * screen that allows the visitor to email themselves the link -- for later use.
 */

import { useState } from "react";
import { useWindowSize, useEffectOnce } from "hooks/";
import styles from "./index.module.scss";
import useStore from "store";
import { translateInterfaceText } from "utils/zh-CN";

const MOBILE_WIDTH = 769;
const MAIL_SUBJECT = "[Reminder] Aegis: Age of Empires IV shortcut practice";
const MAIL_BODY = "https://www.aegis.lol/";

const ShowWarningOnMobileView = () => {
  const language = useStore((state) => state.language);
  const [showMobileOnlyMsg, setShowMobileOnlyMsg] = useState(false);
  const { width } = useWindowSize();
  useEffectOnce(() => {
    if (width < MOBILE_WIDTH) setShowMobileOnlyMsg(true);
  });

  return showMobileOnlyMsg ? (
    <div className={styles.container}>
      <h2>{translateInterfaceText("Aegis is a typing game that requires keyboard input and doesn't work on mobile devices.", language)}</h2>
      <div>
        <a href={`mailto:?subject=${translateInterfaceText(MAIL_SUBJECT, language)}&body=${MAIL_BODY}`}>{translateInterfaceText("📧 Email yourself this link for later", language)}</a>
        <button onClick={() => setShowMobileOnlyMsg(false)}>{translateInterfaceText("Show game anyway", language)}</button>
      </div>
    </div>
  ) : null;
};

export default ShowWarningOnMobileView;
