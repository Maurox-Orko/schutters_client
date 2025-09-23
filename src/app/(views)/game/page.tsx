"use client"

import React, { useEffect, useState } from 'react';
import styles from './game.module.css'
import UserService from '@/services/userservice';
import { GamePelotonModel, GameShooterModel } from '@/models/game.model';
import { getWebSocket, subscribe } from '@/services/socket';



export default function GamePage() {
    const [allSchutters, setAllSchutters] = useState<GamePelotonModel[]>([ new GamePelotonModel() ]);
    const [activeSchutter, setActiveSchutter] = useState<GameShooterModel>(new GameShooterModel());
    const [activePopup, setActivePopup] = useState<'none' | 'add' | 'edit'>('none');
    const [addScoreValues, setAddScoreValues] = useState<{ points: number, name: string }>({ points: 0, name: '' })
    const [editScoreValues, setEditScoreValues] = useState<{ points: number, score: { name: string }[] }>({ points: 0, score: [{ name: "" }] });
    const [gameID, setGameID] = useState<string>('')
    

    useEffect(() => { getGame().then(res => { setAllSchutters(res.pelotons); setGameID(res.shootingID); })}, [])

    const getSchutters = async () => { 
        getWebSocket();
        const unsubscribe = subscribe('GAME', (data: any) => { setAllSchutters(data.pelotons); setGameID(data._id) });
        UserService.startGame()
        return () => { unsubscribe(); }
    }

    const openScore = (type: 'edit' | 'add', user: GameShooterModel) => {
        setActivePopup(type);
        setActiveSchutter(user);
        if (type === "edit") { setEditScoreValues({ points: user.points ?? 0, score: user.marks ?? [{ name: "" }] })}
    }

    const addScore = async () => {        
        // TODO Lotte: error handeling 
        await UserService.addScoreToShooter(gameID, activeSchutter._id, addScoreValues.points, addScoreValues.name);
        setAddScoreValues({ points: 0, name: '' });
        setActivePopup('none');
    }

    const editScore = async () => {
        // markID
        // TODO Lotte: error handeling 
        console.log('EDIT SCORE ', activeSchutter._id, editScoreValues.points, editScoreValues.score)
        // await UserService.editScoreShooter(activeSchutter._id, editScoreValues.points, editScoreValues.score)
        setEditScoreValues({ points: 0, score: [{ name: "" }] });
        setActivePopup('none');
    }

    // const togglePresent = async (shooterID: string) => { await UserService.togglePresent(shooterID) }
    const togglePresent = async (shooterID: string) => { 
        console.log('TOGGLE PRESENT ', shooterID); 
        // setAllSchutters(prev => prev.map(shooter => shooter._id === shooterID ? { ...shooter, present: !shooter.present } : shooter ))
    }

    const getGame = async() => { return await UserService.getGame() }









    // useEffect(() => { UserService.getAllSchutters().then((res) => console.log('res', res)) }, []);
  return (
    <div className={styles.container}>
        { !allSchutters || (allSchutters.length <= 1 && !allSchutters[0]._id)  ? 
            <div className={styles.start}>
                <button onClick={getSchutters}>Start spel</button>
            </div> 
            :
            <ul className={styles.list}> 
                {allSchutters.map((item) => (
                    <React.Fragment key={item._id}>
                    <li className={styles.header}>{item.name}</li>

                    {item.shooters.map((shooter) => (
                        <li key={shooter._id} className={`${styles.user} ${shooter._id === activeSchutter?._id ? styles.active : ''} ${!shooter.presentTime ? styles.absent : ''}`} onClick={() => openScore('add', shooter)}>
                        <input type="checkbox" checked={!!shooter.presentTime} onChange={(e) => { e.stopPropagation(); togglePresent(shooter._id); }} onClick={(e) => e.stopPropagation()} />
                        <p>{shooter.name}</p>
                        <p>{shooter.points}</p>
                        <p>{shooter.marks?.map((s) => s.name).join(', ')}</p>
                        <p onClick={(e) => { e.stopPropagation(); openScore('edit', shooter); }}> edit </p>
                        </li>
                    ))}
                    </React.Fragment>
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
                <div className={styles.card}> 
                    <h1>Pas score aan</h1>
                    <input type="number" value={editScoreValues.points} onChange={(e) => setEditScoreValues(prev => ({ ...prev, points: Number(e.target.value) }))}/>
                    <div className={styles.scoreNames}>
                        { editScoreValues.score.map((score, index) => ( 
                            <input key={index} type="text" value={score.name} 
                                onChange={(e) => setEditScoreValues((prev) => {
                                    const newScores = [...prev.score];        // copy array
                                    newScores[index] = { ...newScores[index], name: e.target.value }; // update only this one
                                    return { ...prev, score: newScores };     // return updated state
                                })}
                            /> 
                        ))}
                    </div>
                    <button onClick={editScore}>Wijzigingen opslaan</button>
                </div> 
            </div> 
        :  null}
    </div>
  );
}