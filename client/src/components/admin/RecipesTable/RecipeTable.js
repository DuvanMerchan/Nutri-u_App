import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import EnhancedTableToolbar from '../TableHelpers/EnhancedTableToolbar';
import EnhancedTableHead from '../TableHelpers/EnhancedTableHead';
import { getComparator, stableSort} from '../TableHelpers/TableHelpers'
import { NavBar } from '../../utils/nav/nav';   
import { getRecipes } from '../../../redux/actions/adminAction';
import { useDispatch, useSelector } from 'react-redux';
// import { getUsers } from '../../redux/actions/adminAction';
//import ResponsiveAppBar from '../admin_NavBar';

export const RecipeTable = () => {

const dispatch = useDispatch()

const {recipesList} = useSelector((store) => store.admin)


    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [userPerPage, setuserPerPage] = React.useState(15);


    React.useEffect(()=>{
      dispatch(getRecipes())
    },[])
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = recipesList.map((n) => n.banned);
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
      page > 0 ? Math.max(0, (1 + page) * userPerPage - recipesList.length) : 0;
  
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
                rowCount={recipesList.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                   user.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(recipesList, getComparator(order, orderBy))
                  .slice(page * userPerPage, page * userPerPage + userPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
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
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.healthScore}</TableCell>
                        <TableCell align="left">{row.createdInDB.toString()}</TableCell>
                        <TableCell align="left">{row.banned.toString()}</TableCell>
                        <TableCell align="left">{row.userId}</TableCell>
  
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
            userPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={recipesList.length}
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


