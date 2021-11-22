import React, { useState, useEffect} from 'react'
import CardPage from './pages/CardPage'
import { CARD_PAGE, TABLE_PAGE } from './constants/routerConstants';
import { getInitialData, addNewClient, deleteClient, editClient } from './scripts/firebase';
import Button from './components/Button';
import * as styles from './App.module.scss'
import TablePage from './pages/TablePage';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ClientModal from './pages/ClientModal';

const App = () => {
  const [data, setData] = useState([])
  const [tableData, setTableData] = useState([])
  const [routerState, setRouterState] = useState(CARD_PAGE)
  const [modalMode, setModalMode] = useState('')
  const [selectedClient, setSelectedClient] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (selectedClient) {
      setModalMode('EDIT')
    } else {
      setModalMode('')
    }
  }, [selectedClient])

  const fetchData = async () => {
    const dataResponse = await getInitialData()
    const newTableData = []
    const newData = Object.keys(dataResponse).map((data) => {
      const obj = {...dataResponse[data]}
      const {id, name_first, name_last, phone, email, balance, credit, employer, address} = dataResponse[data]
      const [streetAddress, city, state, zip] = address.split(',')
      obj.streetAddress = streetAddress
      obj.city = city
      obj.state = state
      obj.zip = zip
      newTableData.push([name_first, name_last, phone, email, balance, credit, employer, streetAddress, city, state, zip])
      return obj
    })
    setData(newData)
    setTableData(newTableData)
  }

  const handleClientClick = (client) => {
    setSelectedClient(client)
  }

  const handleDialogClose = () => setModalMode('')

  const handleModalSubmit = async data => {
    if (modalMode === 'ADD') {
      await addNewClient(data)
    }
    if (modalMode === 'EDIT') {
      console.log('hit')
      console.log(data)
      await editClient(data, selectedClient.id)
    }
    fetchData()
  }

  const handleDelete = async (id) => {
    await deleteClient(id)
    fetchData()
  }
  

  if (!data.length) {
    return <LoadingSpinner />
  }

  return (
    <>
      <ClientModal modalMode={modalMode} handleDialogClose={handleDialogClose} selectedClient={selectedClient} handleModalSubmit={handleModalSubmit} handleDelete={handleDelete}/>
      <div className="App">
        <div className={styles.buttonRow}>
          <Button onClick={() => setRouterState(CARD_PAGE)}>Cards</Button>
          <Button onClick={() => setModalMode('ADD')}>Add</Button>
          <Button onClick={() => setRouterState(TABLE_PAGE)}>Table</Button>
        </div>
        {routerState === CARD_PAGE && <CardPage data={data} handleClientClick={handleClientClick} />}
        {routerState === TABLE_PAGE && <TablePage data={tableData} />}
      </div>
    </>
  );
}

export default App;
