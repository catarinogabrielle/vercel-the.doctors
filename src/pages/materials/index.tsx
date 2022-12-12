import { Header } from '../../components/Header/index'
import styles from './styles.module.scss'
import Head from 'next/head'

import { FiDownload } from 'react-icons/fi'

export type infoProps = {
    id: string;
    title: string;
    status: boolean;
    draft: boolean;
    material: string;
    description: string;
    myclasse_id: string;
}

interface infoCourses {
    info: infoProps[];
}

export default function Materials({ info }: infoCourses) {
    function novaAba() {
        var win = window.open(`https://www.cifraclub.com.br/theo-rubia/pode-morar-aqui/imprimir.html`);
        win.focus()
    }

    return (
        <>
            <Head>
                <title>The.Doctors - Materiais</title>
            </Head>

            <Header />

            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.boxTitle}>
                        <h1>Materiais Disponiveis</h1>
                    </div>
                    <div className={styles.boxCard}>
                        <button className={styles.card} onClick={() => novaAba()} >
                            <FiDownload color="#3d424a" size={26} />
                            <text>titulo da aula aqui!</text>
                        </button>
                    </div>

                    <div className={styles.boxCard}>
                        <button className={styles.card} onClick={() => novaAba()} >
                            <FiDownload color="#3d424a" size={26} />
                            <text>titulo da aula aqui!</text>
                        </button>
                    </div>

                    <div className={styles.boxCard}>
                        <button className={styles.card} onClick={() => novaAba()} >
                            <FiDownload color="#3d424a" size={26} />
                            <text>titulo da aula aqui!</text>
                        </button>
                    </div>

                    <div className={styles.boxCard}>
                        <button className={styles.card} onClick={() => novaAba()} >
                            <FiDownload color="#3d424a" size={26} />
                            <text>titulo da aula aqui!</text>
                        </button>
                    </div>

                    <div className={styles.boxCard}>
                        <button className={styles.card} onClick={() => novaAba()} >
                            <FiDownload color="#3d424a" size={26} />
                            <text>titulo da aula aqui!</text>
                        </button>
                    </div>

                    <div className={styles.boxCard}>
                        <button className={styles.card} onClick={() => novaAba()} >
                            <FiDownload color="#3d424a" size={26} />
                            <text>titulo da aula aqui!</text>
                        </button>
                    </div>

                    <div className={styles.boxCard}>
                        <button className={styles.card} onClick={() => novaAba()} >
                            <FiDownload color="#3d424a" size={26} />
                            <text>titulo da aula aqui!</text>
                        </button>
                    </div>

                    <div className={styles.boxCard}>
                        <button className={styles.card} onClick={() => novaAba()} >
                            <FiDownload color="#3d424a" size={26} />
                            <text>titulo da aula aqui!</text>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}