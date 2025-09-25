"use client";

import styles from "./navigation.module.css";
import logo from "../../../../public/logo.png";
import title from "../../../../public/title.png";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/stores/isLoggedIn.store";

export default function Navigation() {

    const { isLoggedIn, login } = useAuth();

    return (
        <div className={styles.container}>
            <Link className={styles.button} href="/">
                <Image src={logo} alt="" className={styles.button__img}/>
            </Link>
            <Link className={styles.title} href="/">
                <Image src={title} alt="" className={styles.button__img}/>
            </Link>
            <nav className={styles.navigation}>
                <Link className={styles.navigation__button} href="/">Home</Link>
                { !isLoggedIn ?
                    <button className={styles.navigation__button} onClick={login}>Admin</button> 
                    :
                    <>
                        <Link className={styles.navigation__button} href="/game">Game</Link>
                        <Link className={styles.navigation__button} href="/edit">Input</Link>
                    </>
                }
            </nav>
        </div>
    )
}