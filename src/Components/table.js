import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useState } from "react";
import { TableRows, options } from "./tableRows";

const CreateInitalRow = (name, Invariable, Devariable, frequency) => {
  return {
    AlertName: name,
    IndependentVariable: Invariable,
    DependentVariable: Devariable,
    Frequency: frequency,
  };
};

const row1 = CreateInitalRow(
  "Alert1",
  [options[0], options[1]],
  options[0],
  20
);
const row2 = CreateInitalRow(
  "Alert2",
  [options[0], options[2]],
  options[1],
  40
);
const row3 = CreateInitalRow("", [], "", "");
const TableComponent = () => {
  const [tableRows, setTableRows] = useState([row1, row2, row3]);

  const addRowData = () => {
    const RowData = {
      AlertName: "",
      IndependentVariable: "",
      DependentVariable: "",
      Frequency: "",
    };
    setTableRows([...tableRows, RowData]);
  };

  const deleteRow = (index) => {
    const RowData = [...tableRows];
    RowData.splice(index, 1);
    setTableRows(RowData);
  };

  const handleChange = (index, event) => {
    console.log(index, event.target.name, event.target.value);
    const { name, value } = event.target;
    const RowData = [...tableRows];
    RowData[index][name] = value;
    setTableRows(RowData);
  };
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <AddCircleOutlineRoundedIcon
              sx={{ "&:hover": { cursor: "pointer" }, color: "green" }}
              onClick={() => {
                addRowData();
              }}
            />
          </TableCell>
          <TableCell>Alert Configuration</TableCell>
          <TableCell>Independent variable</TableCell>
          <TableCell>Dependent variable</TableCell>
          <TableCell>Frequency</TableCell>
          <TableCell>Save</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRows
          rows={tableRows}
          handlechange={handleChange}
          onDelete={deleteRow}
        />
      </TableBody>
    </Table>
  );
};

export default TableComponent;
