import './OrdenForm.css';
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { addDoc, collection, getDocs, Timestamp, query, where, documentId, writeBatch} from 'firebase/firestore'
import { db } from "../../utils/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrdenForm = () => {

    const linkToMain = (idCompra) => (
        <div>
            <Link to='/' className="link_tostify">El pedido se agregó con éxito, el ID de su compra es:{idCompra}</Link>
        </div>
    );

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [email2, setEmail2] = useState("");
    const [phone, setPhone] = useState("");

    const { cart, getTotal, clearCart} = useContext(CartContext)
    const total = getTotal()

    const submitInfo = async () => {
        try{
            if(name === "" || email === "" || phone === ""){
                toast.error("No puedes realizar la compra porque falta información.", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } else {
                if (email !== email2){
                    toast.error("El e-mail no es el mismo, por favor ingrese el correo electrónico correctamente", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                } else {
                    if( cart.length > 0 ) {
                        const phoneNumber = parseInt(phone)
                        const dbRef = collection(db, 'products')
                        const ordersRef = collection(db,"orders")
                        const cartIds = cart.map(product => product.id)
                        const noStock = []
                        const myBatch = writeBatch(db)
                        const clientInfo = { 
                            client: {
                                name: name,
                                email: email,
                                phone: phoneNumber
                            },
                            items: cart,
                            total,
                            date: Timestamp.fromDate(new Date())
                        }
                
                        const productsadded = await getDocs(query(dbRef, where(documentId(), 'in', cartIds)))
                        const { docs } = productsadded
                        docs.forEach(prod => {
                            const data = prod.data()
                            const dataBaseStock = data.stock

                            const products = cart.find(doc => doc.id === prod.id)
                            const prodQuantity = products?.quantity

                            if(dataBaseStock >= prodQuantity){
                            myBatch.update(prod.ref, {stock: dataBaseStock - prodQuantity})
                            } else {
                            noStock.push({id: prod.id, ...data})
                            }
                        })

                        if(noStock.length === 0){
                            const addOrder = await addDoc(ordersRef, clientInfo)
                            const idCompra = addOrder.id
                            myBatch.commit()
                            toast.success(linkToMain(idCompra), {
                                position: "top-center",
                                autoClose: false,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            })
                            setName("")
                            setEmail("")
                            setEmail2("")
                            setPhone("")
                            clearCart()
                        }else{
                            toast.error("No se pudo generar la compra ya que hay un producto sin stock", {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                        }
                    } else {
                        toast.error("No se pudo generar la compra ya que el carrito está vacío", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                } 
            }
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h1 className="tittle_formulary">Termina tu compra!</h1>
            <div className="formulario">
                <form>
                    <div className="formulario">
                        <label for="name" className="subTittle_formulary">Nombre</label>
                        <input type="text" id="name" className="formulario_input" required="text" value={name} onInput={(evt) => setName(evt.target.value)}/>
                    </div>
                    <div className="formulario">
                        <label for="email" className="subTittle_formulary">E-mail</label>
                        <input type="email" id="email" className="formulario_input" required="email" value={email} onInput={(evt) => setEmail(evt.target.value)}/>
                    </div>
                    <div className="formulario">
                        <label for="email2" className="subTittle_formulary">Confirmar E-mail</label>
                        <input type="email" id="email2" className="formulario_input" required="email" value={email2} onInput={(evt) => setEmail2(evt.target.value)}/>
                    </div>
                    <div className="formulario">
                        <label for="phone" className="subTittle_formulary">Telefono</label>
                        <input type="phone" id="phone" className="formulario_input" required="tel" value={phone}  onInput={(evt) => setPhone(evt.target.value)}/>
                    </div>
                    <div>
                        <input className="button_detalle" type="button" value="Submit" onClick={submitInfo}/>
                        <ToastContainer />
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default OrdenForm;