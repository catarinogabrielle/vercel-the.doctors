import { useState } from 'react'
import { Header } from '../../components/Header/index'
import styles from './styles.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Modal from 'react-modal'

import { FiFolderPlus, FiPlus } from "react-icons/fi";
import { ModalNewClasses } from '../../components/ModalNewClasses'

export type infoProps = {
  id: string;
  title: string;
  image: string;
  teachername: string;
  teacherphoto: string;
  teacherwork: string;
  teacherinfo: string;
  description: string;
  time: string;
}

export default function MyClasses() {
  const [modalItem, setModalItem] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const [infoList, setInfoList] = useState()

  function handleCloseModal() {
    setModalVisible(false)
  }

  async function handleOpenModal() {
    setModalItem(infoList)
    setModalVisible(true)
  }

  Modal.setAppElement('#__next')

  return (
    <>
      <Head>
        <title>The.Doctors - Criar Cursos</title>
      </Head>

      <Header />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentButton}>
            <h1>Cursos</h1>
            <div className={styles.boxButton}>
              <button
                title="Adicionar aulas"
                className={styles.buttonClasses}
                onClick={() => handleOpenModal()}
              >
                Adicionar aulas
                <FiFolderPlus
                  color="#FFFFFF"
                  size={19}
                  className={styles.icon}
                />
              </button>
              <Link href="/classes">
                <button title="Novo curso" className={styles.buttonCreate}>
                  Novo curso
                  <FiPlus color="#FFFFFF" size={20} className={styles.icon} />
                </button>
              </Link>
            </div>
          </div>

          <div className={styles.contentCard}>
            <div key={Math.random()} className={styles.card}>
              <img
                className={styles.imageCard}
                alt="titulo aqui"
                src='./imageCurso.jpg'
              />
              <p>titulo aqui</p>
            </div>
          </div>
        </div>
      </div>

      {modalVisible && (
        <ModalNewClasses
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
  );
}