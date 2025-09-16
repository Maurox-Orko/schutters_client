"use client"

import styles from './edit.module.css'


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

    const changePayed = (index: number, item: unknown) => {
        console.log('yooooooooo')
    }

  return (
    <div className={styles.container} >
        <div className={styles.inputs}>
            <div className={styles.peleton}>
                <h1>Nieuw peleton</h1>
                <input type="text" placeholder='peleton naam' />
                <button>Toevoegen</button>
            </div>
            <div className={styles.user}>
                <h1>Nieuwe schutter</h1>
                <input type="text" />
                <select name="" id="">
                    <option value="">Peleton</option>
                </select>
                <label ><input type="checkbox" />Invité</label>
                <button>Toevoegen</button>
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