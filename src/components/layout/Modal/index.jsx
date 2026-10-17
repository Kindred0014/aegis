import styles from './modal.module.scss'
import Modal from 'react-modal'
import useStore from 'store'
import { translateInterfaceText } from 'utils/zh-CN'

const ModalWindow = ({ isOpen, onRequestClose, children, ...rest }) => {
	const language = useStore((state) => state.language)
	return (
		<Modal
			parentSelector={() => document.querySelector('#root')}
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className={styles['modal-content']}
			overlayClassName={styles['modal-overlay']}
			closeTimeoutMS={200}>
			<button
				className={styles['modal-btn-close']}
				aria-label={translateInterfaceText('Close', language)}
				onClick={onRequestClose}>
				✗
			</button>
			{children}
		</Modal>
	)
}

export default ModalWindow
