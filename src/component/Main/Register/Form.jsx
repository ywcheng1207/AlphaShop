import { AddressPhase, CreditPhase, ShippingPhase } from './FormPhase'
import styles from './Form.module.scss'

const Form = ({ step, onShippingOption }) => {
  return (
    <>
      <section className={`${styles.formContainer}`}>
        <div className={styles.address} dataphase={step}>
          <AddressPhase />
        </div>
        <div className={styles.shipping} dataphase={step}>
          <ShippingPhase onShippingOption={onShippingOption} />
        </div>
        <div className={styles.creddit} dataphase={step}>
          <CreditPhase />
        </div>
      </section>
    </>
  )
}

export default Form
