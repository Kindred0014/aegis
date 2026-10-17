/**
 * @file View before the game is started for the first time each session.
 * After the first playthrough, the player will bounce between the 'Game' and 'GameEnd' view,
 * so this view is only shown once every session/refresh.
 */

import { GameMenu, GameFooter } from '../shared'
import useStore from 'store'
import { translateInterfaceText } from 'utils/zh-CN'
import styles from './index.module.scss'

const TitleScreenView = () => {
	const language = useStore((state) => state.language)
	return (
		<div className={styles.container}>
			<h1>Aegis</h1>
			<h2>
				{translateInterfaceText('A tiny game to practise Age of Empires IV building shortcuts.', language)}
			</h2>
			<GameMenu showLanguageSwitch />
			<GameFooter />
		</div>
	)
}

export default TitleScreenView
