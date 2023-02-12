import React from 'react';
import '../images/foto.jpg';

export default function Info() {
    return (
        <section className='info'>
            <img src={require('../images/foto.jpg')} alt='foto' className='info--photo'/>
            <h1 className='info--name'>Muhamad Iqbal Faturohman</h1>
            <h3 className='info--inst'>Telkom University</h3>
            <p className='email'>iqbalfatur@365.telkomuniversity.ac.id</p>
        </section>
    );
}
