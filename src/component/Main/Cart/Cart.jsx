import styles from './Cart.module.scss'
import product01 from '../../../assets/images/product-1.jpg'
import product02 from '../../../assets/images/product-2.jpg'
//  ---------------------------------------------------------
const cartData = [
  {
    id: '1',
    name: '破壞補丁修身牛仔褲',
    img: product01,
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '刷色直筒牛仔褲',
    img: product02,
    price: 200,
    quantity: 1
  }
]
const ProductListItem = ({ icons, item }) => {
  return (
    <div className={`${styles.productContainer} col col-12`} data-count='0' data-price={item.price}>
      <img className={styles.imgContainer} src={item.img} />
      <div className={styles.productInfo}>
        <div className={styles.productName}>{item.name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <svg className={`${styles.productAction} minus`}>
              <use xlinkHref={`${icons}#svg-icon-minus`} />
            </svg>
            <span className={styles.productCount}>1</span>
            <svg className={`${styles.productAction} plus`}>
              <use xlinkHref={`${icons}#svg-icon-plus`} />
            </svg>
          </div>
        </div>
        <div className={styles.price}>{item.price}</div>
      </div>
    </div>
  )
}

const Cart = ({ icons }) => {
  return (
    <>
      <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <section className={`${styles.productList} col col-12`} data-total-price='0'>
          {cartData.map((item) => (
            <ProductListItem item={item} icons={icons} key={item.id} />
          ))}
        </section>
        {/* --------- 結帳  -------- */}
        <section className={`${styles.cartInfo} ${styles.shipping} col col-12`}>
          <div className={styles.text}>運費</div>
          <div className={styles.price}>免費</div>
        </section>
        <section className={`${styles.cartInfo} ${styles.total} col col-12`}>
          <div className={styles.text}>小計</div>
          <div className={styles.price}>$300</div>
        </section>
      </section>
    </>
  )
}

export default Cart
