"use client"

import UserService from '@/services/userservice';
import styles from './home.module.css'
import React, { useEffect, useState } from 'react';
import { GamePelotonModel } from '@/models/game.model';
import { getWebSocket, subscribe } from '@/services/socket';
import Navigation from '@/app/components/navigation/navigation';

const items: { type: 'peloton' | 'schutter', name: string, points?: number, score?: string[] }[] = [
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peloton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },

    
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peloton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peloton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peloton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peloton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peloton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peloton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
    { type: 'schutter', name: 'Giraldo Daphné' },
    { type: 'peloton', name: 'De Daltons' },
    { type: 'schutter', name: 'Vandermaes Berny' },
    { type: 'schutter', name: 'Vandeputte Nico' },
    { type: 'peloton', name: 'Parijs' },
    { type: 'schutter', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', name: 'Decoster René', points: 3 },
    { type: 'schutter', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', name: 'Buddaert David' },
]


export default function HomePage() {
    const [allSchutters, setAllSchutters] = useState<GamePelotonModel[]>([ new GamePelotonModel() ]);

    useEffect(() => { 
      getGame().then(res => { 
        setAllSchutters(res.pelotons); 
        startWebsocket();
      })
    }, []);


    const getGame = async() => { return await UserService.getGame() }
    
      const startWebsocket = () => { 
        getWebSocket(); 
        const unsubscribe = subscribe('GAME', (data: any) => { setAllSchutters(data.pelotons); })
        return () => { unsubscribe(); }
      }


  return (
    <div className={styles.container}>
      <Navigation />
      <ul className={styles.list}>
        { allSchutters.map((item, index) => (
            <React.Fragment key={item._id}>
              <li key={index} className={styles.header}>{ item.name }</li>
              { item.shooters.map((shooter,sIndex) => (
                <li key={sIndex} className={styles.user}>
                    <p>{ shooter.name }</p>
                    <p>{ shooter.points }</p>
                    <p>{ shooter.marks.map((s) => s.label).join(', ') }</p>
                </li>
              ))}
            </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

