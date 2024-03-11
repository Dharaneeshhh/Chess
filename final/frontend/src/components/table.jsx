import React, { useEffect, useState } from 'react';
import { Table, Button } from 'rsuite';
import { mockUsers } from '../components/mock';
import CustomSidenav from '../components/custom_sidenav';
import '../assets/css/userroles.css'

const { Column, HeaderCell, Cell } = Table;

const Det_tab = () => {
  const [data, setData]=useState([]);
  useEffect(()=> {
    const response = mockUsers();
    setData(response)
  }, [])

  return (
    <div>
      <Table
        height={400}
        data={data}
        onRowClick={rowData => {
          console.log(rowData);
        }}
        >
        <Column width={150}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={150}>
          <HeaderCell>Role</HeaderCell>
          <Cell dataKey="role" />
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={80} fixed="right">
          <HeaderCell></HeaderCell>

          <Cell style={{ padding: '6px' }}>
            {rowData => (
              <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
                Edit
              </Button>
            )}
          </Cell>
        </Column>
      </Table>
      </div>
  );
};

export default Det_tab;

