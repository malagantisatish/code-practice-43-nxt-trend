// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPriceOfCartItems = () =>
        cartList.reduce((total, item) => total + item.price * item.quantity, 0)
      const countOfCartList = cartList.length
      return (
        <div className="price-count-container">
          <div className="total-price-list">
            <h1 className="total-price">
              Order Total
              <span className="price-text">
                :{` Rs ${totalPriceOfCartItems()}/-`}
              </span>
            </h1>

            <p className="items-count">{`${countOfCartList} Items in cart`}</p>

            <button type="button" className="check-out-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
