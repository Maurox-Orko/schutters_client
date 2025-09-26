"use client"

import { useEffect, useRef, useState } from 'react';
import styles from './edit.module.scss'
import UserService from '@/services/userservice';
import { SchutterModel } from '@/models/schutter.model';
import { PelotonModel } from '@/models/peloton.model';
import { getWebSocket, subscribe } from '@/services/socket';
import Navigation from '@/app/components/navigation/navigation';

export default function EditPage() {

  //#region Variables / State
    const [pelotonInputValue, setPelotonInputValue] = useState<string>('');
    const [schutterInputValue, setSchutterInputValue] = useState<{ name: string, peloton: string, invite: boolean }>({ name: '', peloton: '', invite: false });
    const [allSchutters, setAllSchutters] = useState<SchutterModel[]>([]);
    const [allPelotons, setAllPelotons] = useState<PelotonModel[]>([]);
    const [editSchutter, setEditSchutter] = useState<{ _id: string, name: string, peloton: string }>({ name: '', peloton: '', _id: '' })

  //#endregion


  //#region Functions / Handlers
    const websocket = async () => {
        getWebSocket();

        const unsubPelotons = subscribe('PELOTONS', (data: any) => { setAllPelotons(data); setPelotonInputValue(''); });
        const unsubShooters = subscribe('SHOOTERS', (data: any) => { setAllSchutters(data); setSchutterInputValue({ name: '', peloton: '', invite: false }); });
        return () => { unsubPelotons(); unsubShooters() }
    }

    const addPeloton = async () => {
        if (pelotonInputValue.trim() === '') return;
        await UserService.addPelotonName(pelotonInputValue)
    }

    const addSchutter = async () => {
        if (schutterInputValue.name.trim() === '' || schutterInputValue.peloton.trim() === '') return;
        await UserService.addNewShooter(schutterInputValue)
    }    

    const changePayed = async (item: SchutterModel) => { await UserService.paidMembershipChange(item) }

    const openSchutter = (schutter: SchutterModel) => { setEditSchutter({ name: schutter.name, _id: schutter._id, peloton: schutter.peloton._id }) }

    const saveChanges = async() => {
        if (editSchutter.name.trim() === '' || editSchutter.peloton.trim() === '') return;
        await UserService.changeShooterInfo(editSchutter);
        setEditSchutter({ name: '', peloton: '', _id: '' })
    }

    const deleteShooter = async (item: SchutterModel) => { await UserService.deleteShooter(item) }













    const fetchPelotons = async () => {
        try { await UserService.getPelotons().then((peletons) => { setAllPelotons(peletons); }); } 
        catch (error) { console.error("Failed to fetch pelotons:", error); }
    };

    const fetchSchutters = async () => {
        try { await UserService.getAllSchutters().then((schutters) => { setAllSchutters(schutters); }) } 
        catch (error) { console.error("Failed to fetch Schutters:", error); }
    }
  //#endregion

  //#region Effects / Lifecycle
    useEffect(() => {
        websocket();

        const fetchData = async () => {
            await fetchPelotons();  // wait for this to finish
            await fetchSchutters();  // runs only after fetchPelotons is done
        };
        fetchData();
    }, []);
  //#endregion

  //#region JSX / HTML

  return (
    <div className={styles.container}>
        <Navigation/>
        <div className={styles.inputs}>
            <div className={styles.inputs__peleton}>
                <h1>Nieuw peleton</h1>
                <input type="text" placeholder='peloton naam' value={pelotonInputValue} onChange={(e) => setPelotonInputValue(e.target.value)}/>
                <button onClick={addPeloton}>Toevoegen</button>
            </div>
            <div className={styles.inputs__user}>
                <h1>Nieuwe schutter</h1>
                <input type="text" placeholder='voor- en achternaam' value={schutterInputValue.name} onChange={(e) => setSchutterInputValue({...schutterInputValue, name: e.target.value})}/>
                 <select name="" id="" style={{ color: schutterInputValue.peloton === '' ? 'gray' : 'black'}} value={schutterInputValue.peloton} onChange={(e) => setSchutterInputValue({...schutterInputValue, peloton: e.target.value})}> 
                    <option value="" disabled>Kies een peleton</option>
                    { allPelotons.map((item, index) => (
                        <option value={item._id} key={index}>{ item.name }</option>
                    ))}
                </select>
                <label><input type="checkbox" checked={schutterInputValue.invite} onChange={(e) => setSchutterInputValue({...schutterInputValue, invite: e.target.checked})}/>Invité</label>
                <button onClick={addSchutter}>Toevoegen</button>
            </div>
        </div>
        <div className={styles.outputs}>
            <table>
                <colgroup>
                    <col style={{ width: '35%' }}/>
                    <col style={{ width: '20%' }}/>
                    <col style={{ width: '5%' }}/>
                    <col style={{ width: '15%' }}/>
                    <col style={{ width: '15%' }}/>
                    <col style={{ width: '10%' }}/>
                </colgroup>
                <thead>
                     <tr>
                        <td>Naam</td>
                        <td>Peloton</td>
                        <td>Lidgeld</td>
                        <td>Is invité</td>
                        <td># Aanwezigen</td>
                        <td></td>
                     </tr>
                 </thead>
                 <tbody>
                    { allSchutters.map((item, index) => (
                        <tr key={index} onClick={() => openSchutter(item)}>
                            <td>{item.name}</td>
                            <td>{item.peloton?.name}</td>
                            <td><input type="checkbox" checked={!!item.paidTime} onChange={() => changePayed(item)} onClick={(e) => { e.stopPropagation();}}/></td>
                            <td>{item.isInvite ? 'ja' : 'nee'}</td>
                            <td>{item.present}</td>
                            <td onClick={(e) => { e.stopPropagation(); deleteShooter(item) }}>delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        { editSchutter._id ? 
            <div className={styles.popup}>
                <div className={styles.popupCard}>
                    <h1>Bewerk schutter</h1> 
                    <div className={styles.popupCard__inputs}>
                        <input type="text" placeholder='Achternaam Voornaam' value={editSchutter.name} onChange={(e) => setEditSchutter({...editSchutter, name: e.target.value})}/>
                        <select name="" id="" value={editSchutter.peloton} onChange={(e) => setEditSchutter({...editSchutter, peloton: e.target.value})}> 
                        {/* <select name="" id="" value={schutterInputValue.peloton} onChange={(e) => setSchutterInputValue({...schutterInputValue, peloton: e.target.value})}>  */}
                            <option value="" disabled></option>
                            { allPelotons.map((item, index) => (
                                <option value={item._id} key={index}>{ item.name }</option>
                            ))}
                        </select>
                    </div>
                    <button onClick={saveChanges}>Wijzigingen opslaan</button>
                </div>
            </div> 
        : null }
    </div>
  );

  //#endregion
}