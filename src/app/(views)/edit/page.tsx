"use client"

import { useEffect, useState } from 'react';
import styles from './edit.module.css'
import UserService from '@/services/userservice';


const users: { name: string, peleton: string, payed: boolean, invite: number, present: number }[] = [
    { name: 'Vanhollebeke Martin', peleton: 'parijs', payed: true, invite: 1, present: 2 },
    { name: 'Decoster René ', peleton: 'parijs', payed: false, invite: 5, present: 1 },
    { name: 'Pacqueu Olivier ', peleton: 'parijs', payed: true, invite: 1, present: 2 },
    { name: 'Laforce Dirk ', peleton: 'parijs', payed: true, invite: 1, present: 6 },
    { name: 'Buddaert David ', peleton: 'parijs', payed: false, invite: 9, present: 2 },
    { name: 'Giraldo Daphné ', peleton: 'parijs', payed: true, invite: 1, present: 7 },
    { name: 'Vandermaes Berny ', peleton: 'De daltons', payed: false, invite: 1, present: 2 },
    { name: 'Vandeputte Nico ', peleton: 'De daltons', payed: false, invite: 1, present: 2 },
    { name: 'Van Maele Thomas ', peleton: 'De daltons', payed: true, invite: 2, present: 0 },
    { name: 'Demares Johnny ', peleton: 'De daltons', payed: false, invite: 0, present: 2 },
    { name: 'Vanhollebeke Martin', peleton: 'parijs', payed: true, invite: 1, present: 2 },
    { name: 'Decoster René ', peleton: 'parijs', payed: false, invite: 5, present: 1 },
    { name: 'Pacqueu Olivier ', peleton: 'parijs', payed: true, invite: 1, present: 2 },
    { name: 'Laforce Dirk ', peleton: 'parijs', payed: true, invite: 1, present: 6 },
    { name: 'Buddaert David ', peleton: 'parijs', payed: false, invite: 9, present: 2 },
    { name: 'Giraldo Daphné ', peleton: 'parijs', payed: true, invite: 1, present: 7 },
    { name: 'Vandermaes Berny ', peleton: 'De daltons', payed: false, invite: 1, present: 2 },
    { name: 'Vandeputte Nico ', peleton: 'De daltons', payed: false, invite: 1, present: 2 },
    { name: 'Van Maele Thomas ', peleton: 'De daltons', payed: true, invite: 2, present: 0 },
    { name: 'Demares Johnny ', peleton: 'De daltons', payed: false, invite: 0, present: 2 },
    { name: 'Vanhollebeke Martin', peleton: 'parijs', payed: true, invite: 1, present: 2 },
    { name: 'Decoster René ', peleton: 'parijs', payed: false, invite: 5, present: 1 },
    { name: 'Pacqueu Olivier ', peleton: 'parijs', payed: true, invite: 1, present: 2 },
    { name: 'Laforce Dirk ', peleton: 'parijs', payed: true, invite: 1, present: 6 },
    { name: 'Buddaert David ', peleton: 'parijs', payed: false, invite: 9, present: 2 },
    { name: 'Giraldo Daphné ', peleton: 'parijs', payed: true, invite: 1, present: 7 },
    { name: 'Vandermaes Berny ', peleton: 'De daltons', payed: false, invite: 1, present: 2 },
    { name: 'Vandeputte Nico ', peleton: 'De daltons', payed: false, invite: 1, present: 2 },
    { name: 'Van Maele Thomas ', peleton: 'De daltons', payed: true, invite: 2, present: 0 },
    { name: 'Demares Johnny ', peleton: 'De daltons', payed: false, invite: 0, present: 2 },
]

export default function EditPage() {
    const [peletonInputValue, setPeletonInputValue] = useState<string>('');
    const [schutterInputValue, setSchutterInputValue] = useState<{ name: string, peleton: string, invite: boolean }>({ name: '', peleton: '', invite: false });

    useEffect(() => {
        const fetchPeletons = async () => {
            try {
                console.log('Fetching')
                const peletons = await UserService.getPeletons();
                console.log("Peletons", peletons);
            } 
            catch (error) { console.error("Failed to fetch peletons:", error); }
        };

        fetchPeletons();
    }, []);
    

    const changePayed = (index: number, item: unknown) => {
        console.log('yooooooooo')
    }

    const addPeleton = async () => {
        if (peletonInputValue.trim() === '') return;
        await UserService.addPeletonName(peletonInputValue)
        console.log('peleton name', peletonInputValue)
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
                    <option value="Peleton">Peleton</option>
                    <option value="Screamingg">Screamingg</option>
                    <option value="De daltons">De Daltons</option>
                    <option value="Parijs">Parijs</option>
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
                    { users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.peleton}</td>
                            <td><input type="checkbox" checked={item.payed} onChange={() => changePayed(index, item)}/></td>
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
}