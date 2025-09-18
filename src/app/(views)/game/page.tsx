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
    const [activePopup, setActivePopup] = useState<'none' | 'add' | 'edit'>('none');
    const [addScoreValues, setAddScoreValues] = useState<{ points: number, name: string }>({ points: 0, name: '' })

    // const getSchutters = async () => {  UserService.getAllGameShooters().then((res) => { setAllSchutters(res) })}
    const getSchutters = async () => {  setAllSchutters(items) }

    const openScore = (type: 'edit' | 'add', user: GameModel) => {
        setActivePopup(type);
        setActiveSchutter(user);
    }

    const addScore = async () => {
        await UserService.addScoreToShooter(activeSchutter._id, addScoreValues.points, addScoreValues.name);
        setActivePopup('none');
    }

    const editScore = () => {
        // await UserService.editScoreShooter(activeSchutter._id, addScoreValues.points, addScoreValues.name)
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
                                    <input type="radio" name="points" id={num.toString()} value={num} checked={addScoreValues.points === num} onChange={() => setAddScoreValues(prev => ({ ...prev, points: num }))}/>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.names}>  
                        {['top1','top2','topA','zijde1','zijde2','zijdeA','kalle','klein','kleinA','dikkop','special','uil'].map(name => (
                            <div key={name} className={styles.namessItem}>
                            <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                            <input
                                type="radio"
                                name="names"
                                id={name}
                                value={name}
                                checked={addScoreValues.name === name}
                                onChange={() => setAddScoreValues(prev => ({ ...prev, name }))}
                            />
                            </div>
                        ))}
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