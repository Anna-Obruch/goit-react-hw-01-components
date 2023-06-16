import PropTypes from 'prop-types';
import {TransactionTable, TableThead, TableTbody, TableTh,TableTr} from './TransactionHistory.module'
export const TransactionHistory = ({ transactions }) => {
    return (
      <TransactionTable>
        <TableThead>
          <TableTr>
            <TableTh>Type</TableTh>
            <TableTh>Amount</TableTh>
            <TableTh>Currency</TableTh>
          </TableTr>
        </TableThead>
  
        <TableTbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TableTr key={id}>
              <TableTh>{type}</TableTh>
              <TableTh>{amount}</TableTh>
              <TableTh>{currency}</TableTh>
            </TableTr>
          ))}
        </TableTbody>
      </TransactionTable>
    );
  };
  TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape(
        {
          type: PropTypes.string,
          amount: PropTypes.string,
          currency: PropTypes.string
        }
    )) 
}