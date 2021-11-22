import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Dialog from "../../components/Dialog/Dialog";
import * as styles from './ClientModal.module.scss'


const ClientModal = ({modalMode, handleDialogClose, selectedClient = {}, handleDelete, handleModalSubmit}) => {
  useEffect(() => {
    if (selectedClient) {
      const {
        picture, 
        name_first, 
        name_last, 
        employer,
        phone,
        email, 
        address, 
        balance, 
        credit
      } = selectedClient
      setPicture(picture)
      setName_first(name_first)
      setName_last(name_last)
      setEmployer(employer)
      setPhone(phone)
      setEmail(email)
      setAddress(address)
      setBalance(balance)
      setCredit(credit)
    }
  }, [selectedClient])

  const [picture, setPicture] = useState('')
  const [name_first, setName_first] = useState('')
  const [name_last, setName_last] = useState('')
  const [employer, setEmployer] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [balance, setBalance] = useState('')
  const [credit, setCredit] = useState('')

  //TODO: validate inputs
  return <Dialog open={!!modalMode} onClose={() => handleDialogClose()}>
    <div className={styles.clientInfo}>
      Picture URL <input value={picture} onChange={e => setPicture(e.target.value)}/>
      First Name <input value={name_first} onChange={e => setName_first(e.target.value)}/>
      Last Name <input value={name_last} onChange={e => setName_last(e.target.value)}/>
      Employer <input value={employer} onChange={e => setEmployer(e.target.value)}/>
      Phone Number <input value={phone} onChange={e => setPhone(e.target.value)}/>
      Email <input value={email} onChange={e => setEmail(e.target.value)}/>
      Address <input value={address} onChange={e => setAddress(e.target.value)}/>
      Balance <input value={balance} onChange={e => setBalance(e.target.value)}/>
      Credit <input value={credit} onChange={e => setCredit(e.target.value)}/>
      <div className={styles.buttonRow}>
        {modalMode === 'EDIT' && <Button onClick={() => handleDelete(selectedClient.id)}>Delete</Button>}
        <Button onClick={() => handleModalSubmit({picture, name_first, name_last, employer, phone, email, address, balance, credit})}>
          {modalMode === 'ADD' ? 'Add' : 'Save'}
        </Button>
      </div>
    </div>
  </Dialog>

}

export default ClientModal