import React from 'react'
import classes from './home.module.css'
import cafePic from '../../assets/test/cafePic.jpeg'

import { MdOutlineQrCodeScanner } from "react-icons/md"
import SearchBarComponent from '../searchBar'

function HomeComponent() {
    return (
        <div className={classes.majorContainer}>
            <SearchBarComponent />
            <div className={classes.cardHolder}>
                <div className={classes.card}>
                    <div className={classes.cardImgHolder}>
                        <img src={cafePic} />
                    </div>
                    <div className={classes.detailsHolder}>
                        <h2>Cafe Coffee Day</h2>
                        <div>
                            <p>Maraimalai Nagar, Tamil Nadu</p>
                            <p className={classes.caption} >10:00am - 9:00pm</p>
                        </div>
                        <span className={classes.miniDetails}>
                            <div className={classes.tagN}>
                                N
                            </div>
                            <div className={classes.tagV}>
                                V
                            </div>
                            <div className={classes.tagM}>
                                menu
                            </div>
                        </span>
                    </div>
                    <div className={classes.BookingsHolder}>
                        <div className={classes.inviteHolder}>
                            <MdOutlineQrCodeScanner />
                            <p>Order together</p>
                        </div>
                        <div className={classes.preOrderHolder}>
                            <button className={classes.btn}>Pre-Order</button>
                        </div>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardImgHolder}>
                        <img src={cafePic} />
                    </div>
                    <div className={classes.detailsHolder}>
                        <h2>Cafe Coffee Day</h2>
                        <div>
                            <p>Maraimalai Nagar, Tamil Nadu</p>
                            <p className={classes.caption} >10:00am - 9:00pm</p>
                        </div>
                        <span className={classes.miniDetails}>
                            <div className={classes.tagN}>
                                N
                            </div>
                            <div className={classes.tagV}>
                                V
                            </div>
                            <div className={classes.tagM}>
                                menu
                            </div>
                        </span>
                    </div>
                    <div className={classes.BookingsHolder}>
                        <div className={classes.inviteHolder}>
                            <MdOutlineQrCodeScanner />
                            <p>Order together</p>
                        </div>
                        <div className={classes.preOrderHolder}>
                            <button className={classes.btn}>Pre-Order</button>
                        </div>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardImgHolder}>
                        <img src={cafePic} />
                    </div>
                    <div className={classes.detailsHolder}>
                        <h2>Cafe Coffee Day</h2>
                        <div>
                            <p>Maraimalai Nagar, Tamil Nadu</p>
                            <p className={classes.caption} >10:00am - 9:00pm</p>
                        </div>
                        <span className={classes.miniDetails}>
                            <div className={classes.tagN}>
                                N
                            </div>
                            <div className={classes.tagV}>
                                V
                            </div>
                            <div className={classes.tagM}>
                                menu
                            </div>
                        </span>
                    </div>
                    <div className={classes.BookingsHolder}>
                        <div className={classes.inviteHolder}>
                            <MdOutlineQrCodeScanner />
                            <p>Order together</p>
                        </div>
                        <div className={classes.preOrderHolder}>
                            <button className={classes.btn}>Pre-Order</button>
                        </div>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.cardImgHolder}>
                        <img src={cafePic} />
                    </div>
                    <div className={classes.detailsHolder}>
                        <h2>Cafe Coffee Day</h2>
                        <div>
                            <p>Maraimalai Nagar, Tamil Nadu</p>
                            <p className={classes.caption} >10:00am - 9:00pm</p>
                        </div>
                        <span className={classes.miniDetails}>
                            <div className={classes.tagN}>
                                N
                            </div>
                            <div className={classes.tagV}>
                                V
                            </div>
                            <div className={classes.tagM}>
                                menu
                            </div>
                        </span>
                    </div>
                    <div className={classes.BookingsHolder}>
                        <div className={classes.inviteHolder}>
                            <MdOutlineQrCodeScanner />
                            <p>Order together</p>
                        </div>
                        <div className={classes.preOrderHolder}>
                            <button className={classes.btn}>Pre-Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent
