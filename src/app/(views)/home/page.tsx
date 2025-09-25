"use client"

import UserService from '@/services/userservice';
import styles from './home.module.css'
import React, { useEffect, useState } from 'react';
import { GamePelotonModel } from '@/models/game.model';
import { getWebSocket, subscribe } from '@/services/socket';
import Navigation from '@/app/components/navigation/navigation';


export default function HomePage() {
  const [allSchutters, setAllSchutters] = useState<GamePelotonModel[]>([ new GamePelotonModel() ]);

  useEffect(() => { 
    getGame().then(res => { 
      setAllSchutters(res.pelotons); 
      startWebsocket();
    }).catch(err => { console.warn("Game fetch failed (handled):", err instanceof Error ? err.message : err); });
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
        { allSchutters.length >= 1 && allSchutters[0]._id  ? allSchutters.map((item, index) => (
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
        )) : <div className={styles.noContainer}><p className={styles.noText}>Geen spel actief op dit moment.</p></div> }
      </ul>
    </div>
  );
}

