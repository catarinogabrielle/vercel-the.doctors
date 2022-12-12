import Modal from 'react-modal'
import styles from './styles.module.scss'

import { FiX } from 'react-icons/fi'

interface ModalPopUpProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function ModalPopUp({ isOpen, onRequestClose }: ModalPopUpProps) {
    var modalStyles = { overlay: { zIndex: 10, background: "#41413f81" } };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.content}
            style={modalStyles}
        >

            <div className={styles.containerButton}>
                <button
                    title='Usuário'
                    type="button"
                    onClick={onRequestClose}
                    className="react-modal-close"
                    style={{ background: 'transparent', border: 0 }}
                >
                    <FiX className={styles.icon} size={30} />
                </button>
            </div>

            <div className={styles.containerForm}>
                <h2>Detalhes do usuário</h2>

                <form>
                    <label>
                        Nome de usuário
                        <input value="Marcelo Catarino" type="text" name="name" />
                    </label>

                    <label>
                        Email
                        <input value="email do usuario" type="text" name="email" />
                    </label>

                    <label>
                        Status
                        <input value="status do usuario(professor ou estudante)" type="text" name="name" />
                    </label>
                </form>
            </div>

        </Modal>
    )
}