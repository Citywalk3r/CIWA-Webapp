import React from 'react'
import classes from './Home.module.scss'

const Home = () =>{
    return (
        <section className={classes.SectionHome}>
            <div className={classes.Details}>
                <h1 className={`${classes.WelcomeText} ${classes.WelcomeText__Title}`}>CIWA</h1>
                <h2 className={`${classes.WelcomeText} ${classes.WelcomeText__TitleSecondary}`}>Crop Irrigation Web Agent</h2>

                <p className={`${classes.WelcomeText} ${classes.WelcomeText__DevelopedBy}`}>
                    developed by
                </p>
                <p className={`${classes.WelcomeText} ${classes.WelcomeText__Name}`}>
                    Minas Pantelidakis
                </p>
            </div>
       
            
        </section>
    )
}

export default Home