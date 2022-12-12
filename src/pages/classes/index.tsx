import { useState, ChangeEvent, FormEvent } from 'react'
import { Header } from '../../components/Header/index'
import styles from './styles.module.scss'
import Head from 'next/head'
import Link from 'next/link'

import { FiUpload, FiArrowLeft } from 'react-icons/fi'

export default function Classes() {
    const [avatarUrlBanner, setAvatarUrlBanner] = useState('')
    const [imageAvatarBanner, setImageAvatarBanner] = useState(null)
    const [avatarUrlTeacher, setAvatarUrlTeacher] = useState('')
    const [imageAvatarTeacher, setImageAvatarTeacher] = useState(null)

    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [work, setWork] = useState('')
    const [info, setInfo] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')

    function handleFileBanner(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return
        }

        const image = e.target.files[0]

        if (!image) {
            return
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png') {

            setImageAvatarBanner(image);
            setAvatarUrlBanner(URL.createObjectURL(e.target.files[0]))
        }
    }

    function handleFileTeacher(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return
        }

        const image = e.target.files[0]

        if (!image) {
            return
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png') {

            setImageAvatarTeacher(image);
            setAvatarUrlTeacher(URL.createObjectURL(e.target.files[0]))
        }
    }

    return (
        <>
            <Head>
                <title>The.Doctors - Aulas</title>
            </Head>

            <Header />
            <div className={styles.container}>
                <main className={styles.content}>
                    <h1>Novo curso</h1>
                    <form className={styles.form}>
                        <input
                            type="text"
                            placeholder="Digite o titulo do curso"
                            className={styles.input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Descreva sobre o curso..."
                            className={styles.input}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Tempo de duração do curso"
                            className={styles.input}
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />

                        <h5>Banner do curso</h5>
                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={30} color="#3d424a" />
                            </span>
                            <input type="file" accept="image/png, image/jpeg" onChange={handleFileBanner} />
                            {avatarUrlBanner && (
                                <img
                                    className={styles.preview}
                                    src={avatarUrlBanner}
                                    alt="Banner do curso"
                                    width={250}
                                    height={250}
                                />
                            )}
                        </label>

                        <h2>Informações sobre o professor</h2>
                        <input
                            type="text"
                            placeholder="Nome do professor"
                            className={styles.input}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Função do professor"
                            className={styles.input}
                            value={work}
                            onChange={(e) => setWork(e.target.value)}
                        />
                        <textarea
                            placeholder="Descrição sobre o professor..."
                            className={styles.input}
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                        />

                        <h5>Foto do professor</h5>
                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={30} color="#3d424a" />
                            </span>
                            <input type="file" accept="image/png, image/jpeg" onChange={handleFileTeacher} />
                            {avatarUrlTeacher && (
                                <img
                                    className={styles.preview}
                                    src={avatarUrlTeacher}
                                    alt="Banner do curso"
                                    width={250}
                                    height={250}
                                />
                            )}
                        </label>

                        <button className={styles.buttonAdd} type="submit">
                            <p>Criar Curso</p>
                        </button>

                        <Link href="/myclasses">
                            <div className={styles.button}>
                                <FiArrowLeft size={24} color="#ffffff" />
                                <p>Minhas Aulas</p>
                            </div>
                        </Link>
                    </form>
                </main>
            </div>
        </>
    )
}