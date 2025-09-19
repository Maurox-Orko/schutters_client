"use client"

import { useState } from 'react';
import styles from './game.module.css'
import UserService from '@/services/userservice';
import { GameModel } from '@/models/game.model';


const items: GameModel[] = [
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ { name: 'T' }, { name: 'T' }, { name: 'T' }, { name: 'Ta' }, { name: 'Td' }, { name: 'P' } ], present: false },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3, present: false },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ { name: 'a' } ], present: false },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6, present: false },
    { type: 'schutter', _id: '6', name: 'Buddaert David', present: false },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné', present: false },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny', present: false },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico', present: false },


    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ { name: 'T' }, { name: 'T' }, { name: 'T' }, { name: 'Ta' }, { name: 'Td' }, { name: 'P' } ], present: false },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3, present: false },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ { name: 'a' } ], present: false },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6, present: false },
    { type: 'schutter', _id: '6', name: 'Buddaert David', present: false },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné', present: false },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny', present: false },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico', present: false },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ { name: 'T' }, { name: 'T' }, { name: 'T' }, { name: 'Ta' }, { name: 'Td' }, { name: 'P' } ], present: false },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3, present: false },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ { name: 'a' } ], present: false },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6, present: false },
    { type: 'schutter', _id: '6', name: 'Buddaert David', present: false },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné', present: false },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny', present: false },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico', present: false },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ { name: 'T' }, { name: 'T' }, { name: 'T' }, { name: 'Ta' }, { name: 'Td' }, { name: 'P' } ], present: false },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3, present: false },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ { name: 'a' } ], present: false },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6, present: false },
    { type: 'schutter', _id: '6', name: 'Buddaert David', present: false },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné', present: false },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny', present: false },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico', present: false },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ { name: 'T' }, { name: 'T' }, { name: 'T' }, { name: 'Ta' }, { name: 'Td' }, { name: 'P' } ], present: false },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3, present: false },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ { name: 'a' } ], present: false },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6, present: false },
    { type: 'schutter', _id: '6', name: 'Buddaert David', present: false },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné', present: false },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny', present: false },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico', present: false },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ { name: 'T' }, { name: 'T' }, { name: 'T' }, { name: 'Ta' }, { name: 'Td' }, { name: 'P' } ], present: false },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3, present: false },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ { name: 'a' } ], present: false },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6, present: false },
    { type: 'schutter', _id: '6', name: 'Buddaert David', present: false },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné', present: false },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny', present: false },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico', present: false },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ { name: 'T' }, { name: 'T' }, { name: 'T' }, { name: 'Ta' }, { name: 'Td' }, { name: 'P' } ], present: false },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3, present: false },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ { name: 'a' } ], present: false },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6, present: false },
    { type: 'schutter', _id: '6', name: 'Buddaert David', present: false },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné', present: false },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny', present: false },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico', present: false },
    { type: 'peloton', _id: '1', name: 'Parijs' },
    { type: 'schutter', _id: '2', name: 'Vanhollebeke Martin', points: 1, score: [ { name: 'T' }, { name: 'T' }, { name: 'T' }, { name: 'Ta' }, { name: 'Td' }, { name: 'P' } ], present: false },
    { type: 'schutter', _id: '3', name: 'Decoster René', points: 3, present: false },
    { type: 'schutter', _id: '4', name: 'Pacque Olivier', points: 5, score: [ { name: 'a' } ], present: false },
    { type: 'schutter', _id: '5', name: 'LaForce Dirk', points: 6, present: false },
    { type: 'schutter', _id: '6', name: 'Buddaert David', present: false },
    { type: 'schutter', _id: '7', name: 'Giraldo Daphné', present: false },
    { type: 'peloton', _id: '8', name: 'De Daltons' },
    { type: 'schutter', _id: '9', name: 'Vandermaes Berny', present: false },
    { type: 'schutter', _id: '10', name: 'Vandeputte Nico', present: false },
]



export default function GamePage() {
    const [allSchutters, setAllSchutters] = useState<GameModel[]>([ new GameModel() ]);
    const [activeSchutter, setActiveSchutter] = useState<GameModel>(new GameModel())
    const [activePopup, setActivePopup] = useState<'none' | 'add' | 'edit'>('none');
    const [addScoreValues, setAddScoreValues] = useState<{ points: number, name: string }>({ points: 0, name: '' })
    const [editScoreValues, setEditScoreValues] = useState<{ points: number, score: { name: string }[] }>({ points: 0, score: [{ name: "" }] });

    // const getSchutters = async () => {  UserService.getAllGameShooters().then((res) => { setAllSchutters(res) })}
    const getSchutters = async () => {  setAllSchutters(items) }

    const openScore = (type: 'edit' | 'add', user: GameModel) => {
        setActivePopup(type);
        setActiveSchutter(user);
        if (type === "edit") { setEditScoreValues({ points: user.points ?? 0, score: user.score ?? [{ name: "" }] })}
    }

    const addScore = async () => {
        console.log('ADD SCORE ', activeSchutter._id, addScoreValues.points, addScoreValues.name)
        // TODO Lotte: error handeling 
        // await UserService.addScoreToShooter(activeSchutter._id, addScoreValues.points, addScoreValues.name);
        setAddScoreValues({ points: 0, name: '' });
        setActivePopup('none');
    }

    const editScore = async () => {
        // TODO Lotte: error handeling 
        console.log('EDIT SCORE ', activeSchutter._id, editScoreValues.points, editScoreValues.score)
        // await UserService.editScoreShooter(activeSchutter._id, editScoreValues.points, editScoreValues.score)
        setEditScoreValues({ points: 0, score: [{ name: "" }] });
        setActivePopup('none');
    }

    // const togglePresent = async (shooterID: string) => { await UserService.togglePresent(shooterID) }
    const togglePresent = async (shooterID: string) => { 
        console.log('TOGGLE PRESENT ', shooterID); 
        setAllSchutters(prev => prev.map(shooter => shooter._id === shooterID ? { ...shooter, present: !shooter.present } : shooter ))
    }









    // useEffect(() => { UserService.getAllSchutters().then((res) => console.log('res', res)) }, []);
  return (
    <div className={styles.container}>
        { allSchutters.length <= 1 && !allSchutters[0]._id ? 
            <div className={styles.start}>
                <button onClick={getSchutters}>Start spel</button>
            </div> 
            :
            <ul className={styles.list}> 
                {allSchutters.map((item, index) => (
                    item.type === "peloton" ? (
                        <li key={index} className={styles.header}>{ item.name }</li>
                    ) : (
                        <li key={index} className={`${styles.user} ${item._id === activeSchutter._id ? styles.active : ''} ${!item.present ? styles.absent : ''}`} onClick={() => openScore('add', item)} >
                            {/* <input type="checkbox" checked={item.present} onClick={(e) => e.stopPropagation()}/> */}
                            <input type="checkbox" checked={!!item.present} onChange={(e) => { e.stopPropagation(); togglePresent(item._id); }} onClick={(e) => e.stopPropagation()}/>
                            <p>{ item.name }</p>
                            <p>{ item.points }</p>
                            <p>{item.score?.map(s => s.name).join(", ")}</p>
                            <p onClick={(e) => { e.stopPropagation(); openScore('edit', item)}}>edit</p>
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