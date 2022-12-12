import { useState } from 'react'
import Head from 'next/head'
import styles from '../../../styles/home.module.scss'

import { Input } from '../../components/ui/Input/index'
import { Button } from '../../components/ui/Button/index'

import Link from 'next/link'

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loading, setLoading] = useState(false)

    return (
        <>
            <Head>
                <title>Faça seu cadastro agora!</title>
            </Head>

            <div className={styles.containerCenter}>
                <img className={styles.image} src="./logo.png" alt="logo community" />

                <div className={styles.login}>
                    <p>Criando sua conta</p>

                    <form>
                        <Input
                            placeholder="Digite seu usuário"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <Input
                            placeholder="Digite seu email"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            placeholder="Sua senha"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Link href="/">
                            <Button
                                type="submit"
                                loading={loading}
                            >
                                Cadastrar
                            </Button>
                        </Link>
                    </form>

                    <Link href="/">
                        <a className={styles.text}>Já possui uma conta? Faça login!</a>
                    </Link>
                </div>
            </div>
        </>
    )
}
