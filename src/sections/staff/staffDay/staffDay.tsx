import StaffCard from '@/components/individual/staff/card/card'
import styles from './staffDay.module.scss'

//data
import {staffRoles} from "./staffDay.data.js"

export default function StaffDay(){
    return(
        <section className={styles.staffDay}>
            <div className="container">
                <div className={styles.staffDayWrapper}>
                    <div className={styles.header}>
                        <h1>Our Staff On Sale Day</h1>
                        <p>Team Dynamics and Strategies for Success</p>
                    </div>
                    <div className={styles.staffDayCardWrapper}>
                    {
                        staffRoles.map((roles, index)=>{
                            return(
                                <StaffCard 
                                key={index}
                                icon={roles.icon}
                                title={roles.title}
                                desc={roles.desc}
                                color={roles.color}
                                />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}