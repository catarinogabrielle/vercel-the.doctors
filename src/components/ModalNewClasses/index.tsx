import React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";

import { FiX, FiUpload } from "react-icons/fi";

import { FiSearch } from "react-icons/fi";
import { DebounceInput } from "react-debounce-input";

interface ModalNewClassesProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalNewClasses({ isOpen, onRequestClose }: ModalNewClassesProps) {
  var modalStyles = { overlay: { zIndex: 10, background: "#41413f81" } };
  const [fileAvatar, setFileAvatar] = useState(null);
  const [input, setInput] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleFile(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    }

    const chosenFiles = Array.prototype.slice.call(e.target.files);
    const files = e.target.files[0];

    if (!chosenFiles) {
      return;
    }

    setFileAvatar(files);
    setUploadedFiles(chosenFiles.map((item) => item.name));
  }

  return (
    < >
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        className={styles.content}
        style={modalStyles}
      >
        <div className={styles.containerButton}>
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

        <main className={styles.contentForm}>
          <h1>Nova aula</h1>
          <form className={styles.form} >
            <input
              type="text"
              placeholder="Título da aula"
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select>
              <option>Aula que deseja escolher1</option>
              <option>Aula que deseja escolher2</option>
            </select>

            <textarea
              placeholder="Descreva sobre a aula..."
              className={styles.input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <h5>Material para aula</h5>
            <label className={styles.labelAvatar}>
              <span>
                <FiUpload size={20} color="#3d424a" />
              </span>
              <input
                type="file"
                accept=".docx, .pptx, .pdf"
                onChange={handleFile}
              />
              {uploadedFiles && (
                <div className={styles.boxFiles}>
                  <h1>{uploadedFiles}</h1>
                </div>
              )}
            </label>

            <div className={styles.boxInput}>
              <DebounceInput
                className={styles.inputSearch}
                debounceTimeout={500}
                placeholder="Pesquisar curso"
                onChange={(event) => setInput(event.target.value)}
              />
              <div
                className={styles.buttonSearch}
                title="pesquisar"
              >
                <FiSearch className={styles.icon} size={20} />
              </div>
            </div>

            <button className={styles.buttonAdd} type="submit">
              <p>Adicionar Aula</p>
            </button>
          </form>
        </main>
      </Modal>
    </>
  );
}
