import React from 'react'
import styles from './style'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components/Module'

const App = () => (
  <div className='w-full overflow-hidden bg-primary'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={` ${styles.flexStart} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Hero
          disco="20%"
          month="Month"
          account="Account"
          discfor="Discount For"
          subtitle="The Next"
          title="Generation"
          paragraph="Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees."
        />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business
          para="With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market."
        />
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <CTA/>
        <Footer/>
      </div>
    </div>
  </div>
)


export default App