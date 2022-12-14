import { useState } from 'react'
import { Header } from '../../components/Header/index'
import styles from './styles.module.scss'
import Head from 'next/head'

import { FiCheck, FiDownload } from "react-icons/fi";

export default function Classroom() {
    const [active, setActive] = useState(0)
    const [listOfClasses, setListOfClasses] = useState([])

    function novaAba() {
        var win = window.open(`https://www.cifraclub.com.br/theo-rubia/pode-morar-aqui/imprimir.html`);
        win.focus();
    }

    return (
        <>
            <Head>
                <title>The.Doctors - Aula</title>
            </Head>

            <Header />

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.boxVideo}>
                        <div className={styles.video}>
                            <img alt="imagem teste" src="/banner1.png" />
                        </div>
                        <div className={styles.boxDescription}>
                            <h1>Descrição</h1>
                            <p>Descrição da aula aqui</p>
                        </div>
                        <div className={styles.material}>
                            <h2>Material para download</h2>

                            <div className={styles.boxMaterial}>

                                <button className={styles.card} onClick={() => novaAba()}>
                                    <div>
                                        <FiDownload color="#3d424a" size={26} />
                                    </div>
                                    <text>Material da aula {listOfClasses[active]?.title}</text>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardVideos}>
                        <div className={styles.scroll}>
                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>

                            <div className={styles.boxInfo} style={{ cursor: 'pointer' }}>
                                <h1>Titulo da aula</h1>
                                <button className={styles.buttonChech} title="check" >
                                    <FiCheck color="#ffffff" size={13} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}