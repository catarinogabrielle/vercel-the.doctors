import { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/home.module.scss'

import { Input } from '../components/ui/Input/index'
import { Button } from '../components/ui/Button/index'
import Link from 'next/link'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)

  return (
    <>
      <Head>
        <title>Faça seu login!</title>
      </Head>

      <div className={styles.containerCenter}>
        <img className={styles.image} src="./logo.png" alt="logo community" />

        <div className={styles.login}>
          <form>
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

            <Link href="/dashboard">
              <Button
                type="submit"
                loading={loading}
              >
                Acessar
              </Button>
            </Link>
          </form>

          <Link href="/signup">
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}

