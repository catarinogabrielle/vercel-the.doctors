import { useState } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Modal from 'react-modal'

import { ModalPopUp } from '../ModalPopUp'

import { FiLogOut } from 'react-icons/fi'

export type infoModalProps = {
    name: string;
    email: string;
    type: string;
}

export function Header() {
    const [modalItem, setModalItem] = useState()
    const [modalVisible, setModalVisible] = useState(false)

    function handleCloseModal() {
        setModalVisible(false)
    }

    async function handleOpenModal() {
        setModalVisible(true)
    }

    Modal.setAppElement('#__next')

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.infoContentHeader}>
                    <Link href="/dashboard">
                        <img alt="logo" src="/logo.png" />
                    </Link>

                    <a>Seja Bem Vindo (a) Marcelo Catarino</a>
                </div>

                <nav className={styles.menuNav}>
                    <Link href="/dashboard">
                        <a className={styles.linkHeader}>Home</a>
                    </Link>

                    <button onClick={handleOpenModal}>
                        <a className={styles.linkHeader}>Usuário</a>
                    </button>

                    <Link href="/">
                        <button title='Sair' className={styles.buttonOut}>
                            <FiLogOut className={styles.icon} size={24} />
                        </button>
                    </Link>
                </nav>

                {modalVisible && (
                    <ModalPopUp
                        isOpen={modalVisible}
                        onRequestClose={handleCloseModal}
                    />
                )}

            </div>
        </header>
    )
}