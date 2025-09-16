"use client"

import UserService from '@/services/userservice';
import styles from './home.module.css'
import { useEffect } from 'react';

const items: { type: 'peleton' | 'schutter', name: string, points?: number, score?: string[] }[] = [
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peleton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },

    
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peleton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peleton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peleton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peleton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peleton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peleton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peleton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peleton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
]


export default function HomePage() {
    useEffect(() => { UserService.getSchutters().then((res) => console.log('res', res)) }, []);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {items.map((item, index) => (
            item.type === "peleton" ? (
                <li key={index} className={styles.header}>{ item.name }</li>
            ) : (
                <li key={index} className={styles.user}>
                    <p>{ item.name }</p>
                    <p>{ item.points }</p>
                    <p>{ item.score }</p>
                </li>
            )
        ))}
      </ul>
    </div>
  );
}



