import styles from '@/app/page.module.css'
import Image from 'next/image'
import nextConfig from '@/../next.config'
const BASE_PATH = nextConfig.basePath || ''

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src={`${BASE_PATH}/file.svg`}
          alt='File icon'
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src={`${BASE_PATH}/window.svg`}
          alt='Window icon'
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src={`${BASE_PATH}/globe.svg`}
          alt='Globe icon'
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  )
}
