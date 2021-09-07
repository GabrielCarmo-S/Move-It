import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer} >
            <img src="https://avatars.githubusercontent.com/u/70289493?v=4" alt="Gabriel Carmo" />
            <div>
                <strong>Gabriel Carmo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}