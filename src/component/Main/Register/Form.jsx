import { AddressPhase, CreditPhase, ShippingPhase } from './FormPhase'
import styles from './Form.module.scss'
import { useContext } from 'react'
import { MainContext } from 'context/MainContext'

const Form = () => {
  const { step } = useContext(MainContext)
  return (
    <>
      <section className={`${styles.formContainer}`}>
        <div className={styles.address} dataphase={step}>
          <AddressPhase />
        </div>
        <div className={styles.shipping} dataphase={step}>
          <ShippingPhase />
        </div>
        <div className={styles.creddit} dataphase={step}>
          <CreditPhase />
        </div>
      </section>
    </>
  )
}

export default Form
