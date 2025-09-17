"use client"

import { useEffect, useState } from 'react';
import styles from './edit.module.css'
import UserService from '@/services/userservice';
import { SchutterModel } from '@/models/schutter.model';
import { PelotonModel } from '@/models/peloton.model';
import { getWebSocket, subscribe } from '@/services/socket';

export default function EditPage() {

  //#region Variables / State
    const [pelotonInputValue, setPelotonInputValue] = useState<string>('');
    const [schutterInputValue, setSchutterInputValue] = useState<{ name: string, peloton: string, invite: boolean }>({ name: '', peloton: '', invite: false });
    const [allSchutters, setAllSchutters] = useState<SchutterModel[]>([]);
    const [allPelotons, setAllPelotons] = useState<PelotonModel[]>([]);

  //#endregion


  //#region Functions / Handlers
    const websocket = async () => {
    getWebSocket();

    const unsubPelotons = subscribe('PELOTONS', (data: any) => { setAllPelotons(data); setPelotonInputValue(''); });
    const unsubShooters = subscribe('SHOOTERS', (data: any) => { console.log('SHOOTERS RESULT', data); setAllSchutters(data); setSchutterInputValue({ name: '', peloton: '', invite: false }); });
    return () => { unsubPelotons(); unsubShooters() }
    }

    const addPeloton = async () => {
        if (pelotonInputValue.trim() === '') return;
        await UserService.addPelotonName(pelotonInputValue)
    }

    const addSchutter = async () => {
        if (schutterInputValue.name.trim() === '' || schutterInputValue.peloton.trim() === '') return;
        await UserService.addNewSchooter(schutterInputValue)
    }
    

    const changePayed = (index: number, item: unknown) => {
        console.log('yooooooooo')
    }














    const fetchPelotons = async () => {
        try { await UserService.getPelotons().then((peletons) => { setAllPelotons(peletons); console.log('PELETONSSS', peletons) }); } 
        catch (error) { console.error("Failed to fetch pelotons:", error); }
    };

    const fetchSchutters = async () => {
        try {
            console.log('Fetching schutters')
            const result = await UserService.getAllSchutters();
            console.log('result', result)
            console.log("Schuttters", allSchutters);
        } 
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
    <div className={styles.container} >
        <div className={styles.inputs}>
            <div className={styles.peloton}>
                <h1>Nieuw peloton</h1>
                <input type="text" placeholder='peloton naam' value={pelotonInputValue} onChange={(e) => setPelotonInputValue(e.target.value)} />
                <button onClick={addPeloton}>Toevoegen</button>
            </div>
            <div className={styles.user}>
                <h1>Nieuwe schutter</h1>
                <input type="text" placeholder='voor- en achternaam' value={schutterInputValue.name} onChange={(e) => setSchutterInputValue({...schutterInputValue, name: e.target.value})}/>
                <select name="" id="" value={schutterInputValue.peloton} onChange={(e) => setSchutterInputValue({...schutterInputValue, peloton: e.target.value})}> 
                    <option value="" disabled></option>
                    { allPelotons.map((item, index) => (
                        <option value={item._id} key={index}>{ item.name }</option>
                    ))}
                </select>
                <label ><input type="checkbox" checked={schutterInputValue.invite} onChange={(e) => setSchutterInputValue({...schutterInputValue, invite: e.target.checked})}/>Invité</label>
                <button onClick={addSchutter}>Toevoegen</button>
            </div>
        </div>
        <div className={styles.outputs}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Naam</td>
                        <td>Peloton</td>
                        <td>Lidgeld betaald</td>
                        <td># Invité</td>
                        <td># Aanwezigen</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    { allSchutters.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.peloton?.name}</td>
                            <td><input type="checkbox" checked={item.paidTime} onChange={() => changePayed(index, item)}/></td>
                            <td>{item.invite}</td>
                            <td>{item.present}</td>
                            <td>add / delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );

  //#endregion
}