import React from 'react';
import '../images/foto.jpg';

export default function Info() {
    return (
        <main className='info--items'>
            <div className='info--bio'>
                <img src={require('../images/foto.jpg')} alt="Foto" />
                <h1>Muhamad Iqbal Faturohman</h1>
                <h3>Mahasiswa Telkom University</h3>
                <h4>iqbalfatur@student.telkomuniversity.ac.id</h4>
            </div>
        </main>
    );
}
