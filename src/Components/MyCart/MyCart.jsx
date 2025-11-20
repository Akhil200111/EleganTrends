import { useSelector } from 'react-redux'
import Products from '../../Data/Products.js'
import './MyCart.scss'
import { HashLink } from 'react-router-hash-link'
import { useDispatch } from 'react-redux'
import { incrementCartCount, decrementCartCount } from '../../Redux/cartReducer.js'
import PopUp from '../PopUp/PopUp.jsx'
import { useState } from 'react'


const MyCart = () => {
    const dispatch = useDispatch();

    const [popupPage, setPopPage] = useState(false);
    const [removeItem, setRemoveItem] = useState(null)

    // console.log('PopUpPage==',popupPage );

    const { cartItem, cartCount } = useSelector((state) => state.Cart)
    // console.log('CartItems',cartItem);
    const cart = cartItem.map(item => {
        const product = Products.find(prod => prod.id === item.id)
        // console.log("Product Status", product);
        return {
            ...product,
            count: item.count
        }
    })

    // console.log("Cart==", cart);

    const totalActualPrice = cart.reduce((x, y) => x + y.price * y.count, 0);
    const totalOfferPrice = cart.reduce((x, y) => x + y.offerPrice * y.count, 0);

    const onRemove = (item) => {
        
            setPopPage(true);
            setRemoveItem(item)
    }

    //  console.log("Remove Item ==", removeItem);
    // console.log("Cart==", cart)
    if (cartCount == 0) {
        return (
            <div className="emptycart">
                <h2>Your Cart Is Empty</h2>
                <HashLink smooth to='/#products' className='button'>
                    Purchase Now
                </HashLink>
            </div>
        )
    }
    return (
        <div className='cartpage'>
            <h2>Your Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>ProductName</th>
                        <th>Quantity</th>
                        <th>ActualPrice</th>
                        <th>OfferPrice</th>
                        <th>Remove❌</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.image[0]}
                                alt="" /></td>
                            <td>{item.name}</td>
                            <td className='count'>
                                <div className="btns">
                                    <button onClick={() =>
                                        dispatch(decrementCartCount(item.id))}
                                    >-</button>
                                    <p>{item.count}</p>
                                    <button onClick={() => dispatch(incrementCartCount(item.id))}>+</button>
                                </div>
                            </td>
                            <td>₹ {item.price * item.count}</td>
                            <td>₹ {item.offerPrice * item.count}</td>
                            <td onClick={() => onRemove(item.id)}>Remove❌</td>
                        </tr>
                    ))}

                    <tr>
                        <td colSpan="3"></td>
                        <td>Total Actual Price: ₹ {totalActualPrice}</td>
                        <td>Total Offer Price: ₹ {totalOfferPrice}</td>
                        <td>You Saved: ₹ {totalActualPrice - totalOfferPrice} </td>
                    </tr>

                    <tr>
                        <td colSpan="4"></td>
                        <td><button>Add Coupon</button></td>
                        <td><button>Place Order</button></td>
                        
                    </tr>
                </tbody>
            </table>
            {popupPage && <PopUp close= {() => setPopPage(false)} removeitem={removeItem}/>}
        </div>
    )
}

export default MyCart