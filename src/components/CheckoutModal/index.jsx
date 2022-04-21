import React, { useState } from 'react';
import './styles.css';
import { db } from '../../firebase/config';
import { addDoc, collection } from "firebase/firestore";

const CheckoutModal = ({ hideModal, cart, total }) => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Se hizo el submit");
        console.log(nombre, direccion);
        if (nombre === "" || email === "" || direccion === "" || telefono === ""){
            return
        }
        const order = {
            buyer: {
                nombre: nombre,
                email: email,
                direccion: direccion,
                telefono: telefono
            },
            items: {
                cart
            },
            total: total
        }
        console.log(order);
        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then(({id})=> alert(`Order generada con id ${id}`));
        hideModal();
    }

  return (
    <div className='modalContainer'>
            <div className='modal'>
                <h2>Finalizar Compra</h2>
                <button
                    style={
                        { position: 'absolute', top: '20px', right: '20px' }
                    }
                    onClick={hideModal}
                >X
                </button>
                <form className='finishPurchaseForm' onSubmit={onSubmit}>
                    <input
                        placeholder='Nombre'
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <input
                        placeholder='Email'
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder='Direccion'
                        id="direccion"
                        value={direccion}
                        onChange={e => setDireccion(e.target.value)}
                    />
                    <input
                        placeholder='Telefono'
                        id="telefono"
                        value={telefono}
                        onChange={e => setTelefono(e.target.value)}
                    />
                    <button type='submit'>Confirmar compra</button>
                </form>
            </div>
        </div>
  )
}

export default CheckoutModal