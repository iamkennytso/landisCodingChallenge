import React, { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import * as styles from './CardPage.module.scss'

const CardPage = ({data, handleClientClick}) => {
  const [page, setPage] = useState(1)
  const pagedData = data.slice(page * 12, (page + 1) * 12)
  const maxPage = Math.floor(data.length / 12);

  return <div className={styles.CardPage}>
    <div className={styles.CardContainer}>
      {pagedData.map(card => <Card key={card.id} {...card} onClick={() => handleClientClick(card)}/>)}
    </div>
    <div className={styles.buttonRow}>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</Button>
      <Button onClick={() => setPage(page + 1)} disabled={page === maxPage}>Next</Button>
    </div>
  </div>
}

export default CardPage