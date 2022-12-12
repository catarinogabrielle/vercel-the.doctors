import { useState } from "react";
import { Header } from "../../components/Header/index";
import styles from "./styles.module.scss";
import Head from "next/head";
import Modal from "react-modal";

import { ModalCourses } from "../../components/ModalCourses";

import { FiSearch } from "react-icons/fi";

export type ClasseProps = {
  id: string;
  title: string;
  status: boolean;
  draft: boolean;
  material: string;
  description: string;
  myclasse_id: string;
}

interface InfoCourses {
  info: CourseProps[];
}

type CourseProps = {
  id: string;
  description: string;
  image: string;
  teacherinfo: boolean;
  teachername: string;
  teacherphoto: string;
  teacherwork: string;
  time: string;
  title: string;
}

export default function Courses({ info }: InfoCourses) {
  const [classes, setClasses] = useState<ClasseProps[]>()
  const [modalVisible, setModalVisible] = useState(false)

  function handleCloseModal() {
    setModalVisible(false)
  }

  async function handleOpenModal() {
    setModalVisible(true)
  }

  Modal.setAppElement("#__next")

  return (
    <>
      <Head>
        <title>The.Doctors - Cursos</title>
      </Head>

      <Header />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.boxTitle}>
            <h1>Novos Cursos</h1>
            <div className={styles.boxInput}>
              <input
                type="text"
                placeholder="Pesquisar curso"
              />
              <button className={styles.buttonSearch} title="pesquisar">
                <FiSearch
                  className={styles.icon}
                  size={20}
                />
              </button>
            </div>
          </div>
          <div className={styles.boxCard}>
            <div
              className={styles.card}
              onClick={handleOpenModal}
            >
              <img
                className={styles.imageCard}
                alt="titulo aqui"
                src="/imageCurso.jpg"
              />
              <div className={styles.descriptionCard}>
                <p>Titulo aqui</p>
                <div className={styles.course}>
                  <p>Curso Online</p>
                </div>
              </div>
            </div>

            <div
              className={styles.card}
              onClick={handleOpenModal}
            >
              <img
                className={styles.imageCard}
                alt="titulo aqui"
                src="/imageCurso.jpg"
              />
              <div className={styles.descriptionCard}>
                <p>Titulo aqui</p>
                <div className={styles.course}>
                  <p>Curso Online</p>
                </div>
              </div>
            </div>

            <div
              className={styles.card}
              onClick={handleOpenModal}
            >
              <img
                className={styles.imageCard}
                alt="titulo aqui"
                src="/imageCurso.jpg"
              />
              <div className={styles.descriptionCard}>
                <p>Titulo aqui</p>
                <div className={styles.course}>
                  <p>Curso Online</p>
                </div>
              </div>
            </div>

            <div
              className={styles.card}
              onClick={handleOpenModal}
            >
              <img
                className={styles.imageCard}
                alt="titulo aqui"
                src="/imageCurso.jpg"
              />
              <div className={styles.descriptionCard}>
                <p>Titulo aqui</p>
                <div className={styles.course}>
                  <p>Curso Online</p>
                </div>
              </div>
            </div>

            <div
              className={styles.card}
              onClick={handleOpenModal}
            >
              <img
                className={styles.imageCard}
                alt="titulo aqui"
                src="/imageCurso.jpg"
              />
              <div className={styles.descriptionCard}>
                <p>Titulo aqui</p>
                <div className={styles.course}>
                  <p>Curso Online</p>
                </div>
              </div>
            </div>

            <div
              className={styles.card}
              onClick={handleOpenModal}
            >
              <img
                className={styles.imageCard}
                alt="titulo aqui"
                src="/imageCurso.jpg"
              />
              <div className={styles.descriptionCard}>
                <p>Titulo aqui</p>
                <div className={styles.course}>
                  <p>Curso Online</p>
                </div>
              </div>
            </div>

            <div
              className={styles.card}
              onClick={handleOpenModal}
            >
              <img
                className={styles.imageCard}
                alt="titulo aqui"
                src="/imageCurso.jpg"
              />
              <div className={styles.descriptionCard}>
                <p>Titulo aqui</p>
                <div className={styles.course}>
                  <p>Curso Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalVisible && (
        <ModalCourses
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
        />
      )}
    </>
  );
}
