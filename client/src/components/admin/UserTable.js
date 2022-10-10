import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import pruebaUsers from './User'; //importar User de la DB
import { headCellsUser } from './headCellsUser';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import EnhancedTableHead from './EnhancedTableHead';
import { getComparator, stableSort} from './TableHelpers'
import { NavBar } from '../utils/nav/nav';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUsers } from '../../redux/actions/adminAction';

export const UserTable = () => {

  const getAllUsers = /*async*/() => {  //PASAR A ASYNC AWAIT CUANDO MIGRE AL PF
    try {
        let userData = /*await*/pruebaUsers.map(e => {
            return {
                id: e.id,
                username: e.username,
                email: e.email,
                password: e.password,
                banned: e.banned,
                admin: e.admin,
                premium: e.premium,
                nutricionist: e.nutricionist,
                free: e.free,
                logged: e.logged,
            }
        })
        return userData
    } catch (error) {
        console.log(error)
    }
}


const user = getAllUsers();

  //  const dispatch = useDispatch()

  //  const {user} = useSelector((store) => store.admin)

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [userPerPage, setuserPerPage] = React.useState(5);


    // React.useEffect(()=>{
    //   dispatch(getUsers())
    // },[])
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = user.map((n) => n.banned);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, name) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeuserPerPage = (event) => {
      setuserPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = (event) => {
      setDense(event.target.checked);
    };
  
    const isSelected = (name) => selected.indexOf(name) !== -1;
  
    // Avoid a layout jump when reaching the last page with empty user.
    const emptyuser =
      page > 0 ? Math.max(0, (1 + page) * userPerPage - user.length) : 0;
  
    return (<>
      <NavBar />
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <EnhancedTableToolbar numSelected={selected.length} />  {/*ACA TENGO QUE VER COMO LE PASO EL ID PARA BANEARLO*/}
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={user.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   user.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(user, getComparator(order, orderBy))
                  .slice(page * userPerPage, page * userPerPage + userPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.username);
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.username)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.username}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.id}
                        </TableCell>
                        <TableCell align="left">{row.username}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.password}</TableCell>
                        <TableCell align="left">{row.banned.toString()}</TableCell>
                        <TableCell align="left">{row.admin.toString()}</TableCell>
                        <TableCell align="left">{row.premium.toString()}</TableCell>
                        <TableCell align="left">{row.nutricionist.toString()}</TableCell>
                        <TableCell align="left">{row.free.toString()}</TableCell>
                        <TableCell align="left">{row.logged.toString()}</TableCell>
  
                      </TableRow>
                    );
                  })}
                {emptyuser > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyuser,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            userPerPageOptions={[5, 10, 25]}
            component="div"
            count={user.length}
            userPerPage={userPerPage}
            page={page}
            onPageChange={handleChangePage}
            onuserPerPageChange={handleChangeuserPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        />
      </Box></>
    );
}


