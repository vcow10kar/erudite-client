import styles from './contestPage.module.css';


const ContestInfo = ({info}) => {
    return (
        <div className={styles.contestInfo}>
            <h3>{info.title}</h3>
            <p>{info.type}</p>
            <p>{info.batchNo}</p>
            <p>{info.deadline.split('T')[0].split('-').reverse().join('-')}</p>
            <div className = {styles.contestTags}>
                {info.tags.map((el, id) => {
                    return <span key = {`tags-${id}-${el}`}>{el}</span>
                })}
            </div>
        </div>
    )
}

export default ContestInfo;