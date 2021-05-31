import format from 'date-fns/format';
import ptbr from 'date-fns/locale/pt-BR'

import styles from './style.module.scss';

export function Header(){
    const currentDate = format(new Date(), 'EEEEEE, d MMMM',{
        locale: ptbr,
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr" />
            <p>O melhor para você ouvir sempre!</p>
            <span>{currentDate}</span>
        </header>
    );
}