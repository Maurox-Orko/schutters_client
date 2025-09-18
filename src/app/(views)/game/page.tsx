"use client"

import { useEffect, useState } from 'react';
import styles from './game.module.css'
import UserService from '@/services/userservice';
import { SchutterModel } from '@/models/schutter.model';
import { GameModel } from '@/models/game.model';


const items: GameModel[] = [
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3 },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', _id: '6', name: 'Buddaert David' },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné' },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny' },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico' },

    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3 },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', _id: '6', name: 'Buddaert David' },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné' },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny' },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico' },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3 },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', _id: '6', name: 'Buddaert David' },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné' },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny' },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico' },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3 },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', _id: '6', name: 'Buddaert David' },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné' },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny' },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico' },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3 },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', _id: '6', name: 'Buddaert David' },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné' },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny' },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico' },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3 },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', _id: '6', name: 'Buddaert David' },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné' },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny' },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico' },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3 },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', _id: '6', name: 'Buddaert David' },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné' },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny' },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico' },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ 'T', 'T', 'T', 'Ta', 'Td', 'P' ] },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3 },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ 'a' ] },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6 },
    { type: 'schutter', _id: '6', name: 'Buddaert David' },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné' },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny' },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico' },
]



export default function GamePage() {
    const [allSchutters, setAllSchutters] = useState<GameModel[]>([]);
    const [activeSchutter, setActiveSchutter] = useState<GameModel>({ _id: '', type: 'schutter', name: '', points: 0, score: [] })
    const [activePopup, setActivePopup] = useState< 'none' | 'add' | 'edit' >('none')

    const getSchutters = async () => { setAllSchutters(items) }

    const openScore = (type: 'edit' | 'add', user: GameModel) => {
        setActivePopup(type);
        setActiveSchutter(user);
        console.log('hheheeheheheheheh')
    }

    const addScore = () => {
        setActivePopup('none');
    }

    const editScore = () => {
        setActivePopup('none');
    }









    // useEffect(() => { UserService.getAllSchutters().then((res) => console.log('res', res)) }, []);
  return (
    <div className={styles.container}>
        { allSchutters.length === 0 ? 
            <div className={styles.start}>
                <button onClick={getSchutters}>Start spel</button>
            </div> 
            :
            <ul className={styles.list}> 
                {allSchutters.map((item, index) => (
                    item.type === "peloton" ? (
                        <li key={index} className={styles.header}>{ item.name }</li>
                    ) : (
                        <li key={index} className={styles.user} onClick={() => openScore('add', item)}>
                            <input type="checkbox" />
                            <p>{ item.name }</p>
                            <p>{ item.points }</p>
                            <p>{ item.score }</p>
                            <p onClick={(e) => { e.preventDefault(); openScore('edit', item)}}>edit</p>
                        </li>
                    )
                ))} 
            </ul>
        }
        { activePopup === 'add' ? 
            <div className={styles.popup}>
                <div className={styles.card}> 
                    <h1>Voeg score toe</h1>
                    <div className={styles.points}>
                        { Array.from({ length: 16 }, (_, i) => {
                            const num = i + 1;
                            return (
                                <div key={num} className={styles.pointsItem}>
                                    <label htmlFor={num.toString()}>{num}</label>
                                    <input type="radio" name="points" id={num.toString()} />
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.names}>
                        <div className={styles.namessItem}>
                            <label htmlFor="top1">Top 1</label>
                            <input type="radio" name="names" id="top1" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="top2">Top 2</label>
                            <input type="radio" name="names" id="top2" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="topA">Top A</label>
                            <input type="radio" name="names" id="topA" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="zijde1">Zijde 1</label>
                            <input type="radio" name="names" id="zijde1" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="zijde2">Zijde 2</label>
                            <input type="radio" name="names" id="zijde2" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="zijdeA">Zijde A</label>
                            <input type="radio" name="names" id="zijdeA" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="kalle">Kalle</label>
                            <input type="radio" name="names" id="kalle" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="klein">Klein</label>
                            <input type="radio" name="names" id="klein" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="kleinA">Klein A</label>
                            <input type="radio" name="names" id="kleinA" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="dikkop">Dikkop</label>
                            <input type="radio" name="names" id="dikkop" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="special">Special</label>
                            <input type="radio" name="names" id="special" />
                        </div>
                        <div className={styles.namessItem}>
                            <label htmlFor="uil">Uil</label>
                            <input type="radio" name="names" id="uil" />
                        </div>
                    </div>
                    <button onClick={addScore}>OPSLAAN</button>
                </div> 
            </div> 
        : activePopup === 'edit' ? 
            <div className={styles.popup}>
                <div className={styles.card}> EDIT </div> 
            </div> 
        :  null}

      {/* <ul className={styles.list}>
        {items.map((item, index) => (
            item.type === "peloton" ? (
                <li key={index} className={styles.header}>{ item.name }</li>
            ) : (
                <li key={index} className={styles.user}>
                    <p>{ item.name }</p>
                    <p>{ item.points }</p>
                    <p>{ item.score }</p>
                </li>
            )
        ))}
      </ul> */}
    </div>
  );
}