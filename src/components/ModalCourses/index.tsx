import Modal from "react-modal";
import styles from "./styles.module.scss";

import { FiX } from "react-icons/fi";

interface ModalNewClassesProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalCourses({ isOpen, onRequestClose }: ModalNewClassesProps) {
  var modalStyles = { overlay: { zIndex: 10, background: "#41413f81" } };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.container}
      style={modalStyles}
    >
      <div className={styles.containerButton}>
        <h1>Titulo do curso aqui!</h1>
        <button
          title="Usuário"
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
          style={{ background: "transparent", border: 0 }}
        >
          <FiX className={styles.icon} size={30} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.boxVideoInfo}>
          <div className={styles.video}>
            <img alt="imagem teste" src="/banner1.png" />
          </div>
          <div className={styles.class}>
            <h1>Aulas que serão lecionadas durante o curso</h1>
            <div className={styles.boxScrollClass}>
              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>

              <div className={styles.infoClass}>
                <text>Titulo aqui</text>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contentInfoCourse}>
          <h1>80h Horas</h1>
          <h1>Totalmente online</h1>
          <h1>Material de Apoio</h1>
          <h1>Certificado de conclusão</h1>
        </div>

        <div className={styles.description}>
          <h1>Descrição</h1>
          <text>Descrição sobre o curso aqui!</text>
        </div>

        <div className={styles.boxTeacher}>
          <img
            alt="titulo aqui"
            src="/foto.jpg"
          />
          <div className={styles.infoTeacher}>
            <h1>Gabrielle Catarino</h1>
            <h2>Desenvolvedora Full-stack</h2>
            <text>Trabalho com desenvolvimento, na area mobile e web</text>
          </div>
        </div>

        <button
          className={styles.button}
          title="iniciar curso"
          onClick={() => { }}
        >
          Iniciar Curso
        </button>
      </div>
    </Modal>
  );
}
