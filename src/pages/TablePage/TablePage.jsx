import React from "react";
import Table from "../../components/Table/Table";
import { NO_DATA_MESSAGE, TABLE_HEADERS } from "../../constants/tableConstants";

const TablePage = ({data}) => <div>
  <Table headers={TABLE_HEADERS}
    data={data}
    noDataMessage={NO_DATA_MESSAGE}
  />
</div>

export default TablePage