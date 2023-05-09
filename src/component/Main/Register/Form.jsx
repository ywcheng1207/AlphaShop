import { AddressPhase, CreditPhase, ShippingPhase } from './FormPhase'
import styles from './Form.module.scss'

const Form = ({ step, onShippingOption, formRef }) => {
  return (
    <>
      <section className={`${styles.formContainer}`}>
        <div className={styles.address} dataphase={step}>
          <AddressPhase formRef={formRef} />
        </div>
        <div className={styles.shipping} dataphase={step}>
          <ShippingPhase onShippingOption={onShippingOption} />
        </div>
        <div className={styles.creddit} dataphase={step}>
          <CreditPhase formRef={formRef} />
        </div>
      </section>
    </>
  )
}

export default Form
