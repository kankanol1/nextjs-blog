import Link from 'next/link'
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import React from "react";
const name = '观澜数据'
export const siteTitle = '观澜数据'

export default function Layout({children, home}) {


  return (<div className={styles.container}>
        <Head>
          <link rel="stylesheet" href="/favicon.ico"/>
          <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
          />
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          <meta
              property="og:image"
              content={`https://og-image.now.sh/${encodeURI(
                  siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle}/>
          <meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <header className={styles.header}>
          {home ? (
              <>
                <img
                    src="/images/gl.jpg"
                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                    alt={name}/>
                <h2 className={utilStyles.heading2Xl}>{name}</h2>
              </>
          ) : (
              <>
                <Link href="/">
                  <a>
                    <img
                        src="/images/gl.jpg"
                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
          )}
        </header>
        {/*<main style={{height:'calc(100vh - 250px)',overflowY:'auto',overflowX:'hidden'}}>{children}</main>*/}
        <main>{children}</main>
        {!home && (
            <div className={styles.backToHome}>
              <Link href="/"><a>返回首页</a></Link>
            </div>
        )}
      </div>
  )
}