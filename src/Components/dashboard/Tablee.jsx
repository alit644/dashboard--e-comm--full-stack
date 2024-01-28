/* eslint-disable react/prop-types */
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DeleteForeverOutlined, EditOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import PaginatedItems from "../paginate/Paginate";

export default function Tablee(props) {
  const currentUser = props.currentUser || { name: "" };
  // eslint-disable-next-line react/prop-types
  const headerShow = props.header.map((item, i) => {
    return (
      <TableCell key={i} align="center">
        {item.name}
      </TableCell>
    );
  });



  // eslint-disable-next-line react/prop-types
  const dataShow = props.data.map((item, i) => (
    <TableRow
      key={i}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>{item.id}</TableCell>
      {props.header.map((item2, index) => {
        return (
          <TableCell key={index} align="center" component="th" scope="row">
            {item2.key === "image" ? (
              <img src={`${item[item2.key]}`} width={"80ox"} height={"50px"} />
            ) : item2.key === "images" ? (
              <Stack direction={"row"} gap={1}>
                {item[item2.key].map((img, k) => (
                  <img
                    key={k}
                    src={img.image}
                    alt="images2"
                    height={"40px"}
                    width={"60px"}
                  />
                ))}
              </Stack>
            ) : item[item2.key] === "1995" ? (
              "Admin"
            ) : item[item2.key] === "2001" ? (
              "User"
            ) : item[item2.key] === "1999" ? (
              "Product Manger"
            ) : item[item2.key] === "1996" ? (
              "Writer"
            ) : (
              item[item2.key]
            )}
            {currentUser && item[item2.key] === currentUser.name && " (You)"}
          </TableCell>
        );
      })}

      <TableCell align="right">
        <Link to={`${item.id}`}>
          <EditOutlined
            className="edit"
            sx={{ color: "#8582b16c", cursor: "pointer" }}
          />
        </Link>
        {currentUser.name !== item.name && (
          <DeleteForeverOutlined
            className="del"
            sx={{ color: "#ff0000c2", cursor: "pointer" }}
            // eslint-disable-next-line react/prop-types
            onClick={() => props.delete(item.id)}
          />
        )}
      </TableCell>
    </TableRow>
  ));

  return (
    <>
      <TableContainer sx={{ mt: 4 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#8582b16c" }}>
              <TableCell align="left">Id</TableCell>
              {headerShow}
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {props.lodaing ? (
              <TableCell
                sx={{ display: "flex", alignItems: "center", gap: 2, ml: 3 }}
                align="center"
              >
                Lodaing ...{" "}
                <CircularProgress color="secondary" size={"1.6rem"} />
              </TableCell>
            ) : (
              dataShow
            )}
            {/* {dataShow} */}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction={'row'} gap={2} alignItems={'center'} justifyContent={'end'}>
      <FormControl size="small" sx={{width:'80px'}}>
          <InputLabel  id="demo-simple-select-label">Limit</InputLabel>
          <Select
            onChange={(e) => props.setLimit(e.target.value)}
            sx={{p:0, }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Limit"
          >
            <MenuItem value={`3`}>3</MenuItem>
            <MenuItem value={`5`}>5</MenuItem>
            <MenuItem value={`8`}>8</MenuItem>
            <MenuItem value={`10`}>10</MenuItem>
          </Select>
        </FormControl>

        <PaginatedItems
        itemsPerPage={props.limit}
        total={props.total}
        setPage={props.setPage}
      />

      </Stack>
    
    </>
  );
}
