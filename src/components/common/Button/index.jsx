import styles from './index.module.scss'

const Button = ({ primary, tertiary, children, className, ...rest }) => {
	return (
		<button
			className={`${styles.button} ${primary ? styles.primary : ''} ${tertiary ? styles.tertiary : ''} ${className || ''}`}
			{...rest}>
			{children}
		</button>
	)
}

const ButtonRow = ({ children, className, withLanguageSwitch, ...rest }) => {
	const rowClass = withLanguageSwitch ? styles.withLanguage : ''
	return <div className={`${styles.row} ${rowClass} ${className || ''}`} {...rest}>{children}</div>
}

export { Button, ButtonRow }
