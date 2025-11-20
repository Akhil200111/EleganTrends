import './PopUp.scss'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/cartReducer.js';
import toast from 'react-hot-toast'

const PopUp = ({close,removeitem}) => {
  const dispatch = useDispatch();
  
  
 
  const removeCart = () => {
     try {
          dispatch(removeFromCart(removeitem));
          close();
          toast.success(`Removed From The Cart`,{style:{ background: 'lightblue'}})
         } catch (error) {
            toast.error("Failed to  Remove Item From Cart")
         }
  }
  return (
    <div className='popup'>
      <div className="box">
        <p>Do You Want to Remove From Cart</p>
        <div className='btns'>
          <button onClick={removeCart}>Confirm</button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
