'use strict';

import React, { Component } from 'react';
import {
  Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
  from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { Link } from 'react-router';

class TableGenerator extends Component {
  constructor () {
    super();

  }

  render () {
    const { indicators, data, router } = this.props;
    return (
      <Table
        multiSelectable={true}
        enableSelectAll={true}
      >
        <TableHeader>
          <TableRow>
            {indicators.map((indicator, index) => (
              <TableHeaderColumn key={index} tooltip={indicator}>{indicator}</TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} selected={row.selected}>
              <TableRowColumn>{row.id}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.role}</TableRowColumn>
              <TableRowColumn>{row.status === 0 ? 'Inativo' : 'Ativo'}</TableRowColumn>
              <TableRowColumn>
                <Link to={`/${router}/form/${row.id}`}>
                  <FloatingActionButton
                    zDepth={0}
                    backgroundColor={'#E76049'}
                    mini={true}>
                    <ContentCreate />
                  </FloatingActionButton>
                </Link>
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {indicators.map((footerName, index) => (
              <TableRowColumn key={index}>{footerName}</TableRowColumn>
            ))}
          </TableRow>
        </TableFooter>
      </Table>
    );
  }
}

export default TableGenerator;