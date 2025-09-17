"use client"

import { useEffect, useState } from 'react';
import styles from './edit.module.css'
import UserService from '@/services/userservice';
import { SchutterModel } from '@/models/schutter.model';
import { PeletonModel } from '@/models/peleton.model';


// function fetchInitData()







export default function EditPage() {
    const [peletonInputValue, setPeletonInputValue] = useState<string>('');
    const [schutterInputValue, setSchutterInputValue] = useState<{ name: string, peleton: string, invite: boolean }>({ name: '', peleton: '', invite: false });
    const [allSchutters, setAllSchutters] = useState<SchutterModel[]>([]);
    const [allPeletons, setAllPeletons] = useState<PeletonModel[]>([]);


    const fetchPeletons = async () => {
        try { await UserService.getPeletons().then((res) => { setAllPeletons(res); }); } 
        catch (error) { console.error("Failed to fetch peletons:", error); }
    };

    const fetchSchutters = async () => {
        try {
            console.log('Fetching schutters')
            await UserService.getAllSchutters().then((res) => { setAllSchutters(res); });
            console.log("Schuttters", allSchutters);
        } 
        catch (error) { console.error("Failed to fetch Schutters:", error); }
    }


    useEffect(() => {
        fetchPeletons();
        fetchSchutters();
    }, []);
    

    const changePayed = (index: number, item: unknown) => {
        console.log('yooooooooo')
    }

    const addPeleton = async () => {
        console.log('peleton name', peletonInputValue)
        if (peletonInputValue.trim() === '') return;
        await UserService.addPeletonName(peletonInputValue)
    }

    const addSchutter = async () => {
        if (schutterInputValue.name.trim() === '' || schutterInputValue.peleton.trim() === '') return;
        await UserService.addNewSchooter(schutterInputValue)
        console.log('PELEOTO?', schutterInputValue)
    }

  return (
    <div className={styles.container} >
        <div className={styles.inputs}>
            <div className={styles.peleton}>
                <h1>Nieuw peleton</h1>
                <input type="text" placeholder='peleton naam' value={peletonInputValue} onChange={(e) => setPeletonInputValue(e.target.value)} />
                <button onClick={addPeleton}>Toevoegen</button>
            </div>
            <div className={styles.user}>
                <h1>Nieuwe schutter</h1>
                <input type="text" placeholder='voor- en achternaam' value={schutterInputValue.name} onChange={(e) => setSchutterInputValue({...schutterInputValue, name: e.target.value})}/>
                <select name="" id="" value={schutterInputValue.peleton} onChange={(e) => setSchutterInputValue({...schutterInputValue, peleton: e.target.value})}> 
                    <option value="" disabled></option>
                    { allPeletons.map((item, index) => (
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
                        <td>Peleton</td>
                        <td>Lidgeld betaald</td>
                        <td># Invité</td>
                        <td># Aanwezigen</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {/* { allSchutters.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.peleton}</td>
                            <td><input type="checkbox" checked={item.payed} onChange={() => changePayed(index, item)}/></td>
                            <td>{item.invite}</td>
                            <td>{item.present}</td>
                            <td>add / delete</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    </div>
  );
}