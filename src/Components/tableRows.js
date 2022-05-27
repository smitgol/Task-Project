import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Button from "@mui/material/Button";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const animatedComponents = makeAnimated();
const options = [
  { value: "MF Torque(Avg.)", label: "MF Torque(Avg.)" },
  { value: "MF Speed(Avg.)", label: "MF Speed(Avg.)" },
  { value: "MF Rate(Avg.)", label: "MF Rate(Avg.)" },
];

const TableRows = ({ rows, handlechange, onDelete }) => {
  const renderRows = () => {
    return rows.map((row, index) => {
      const { AlertName, IndependentVariable, DependentVariable, Frequency } =
        row;

      return (
        <TableRow key={index}>
          <TableCell>
            <CancelOutlinedIcon
              sx={{ "&:hover": { cursor: "pointer" }, color: "red" }}
              onClick={() => {
                onDelete(index);
              }}
            />
          </TableCell>
          <TableCell>
            <TextField
              id="outlined-basic"
              label="Alert Name"
              variant="outlined"
              size="small"
              sx={{ width: 130 }}
              value={AlertName}
              name="AlertName"
              onChange={(event) => {
                handlechange(index, event);
              }}
            />
          </TableCell>
          <TableCell sx={{ width: 300 }}>
            {IndependentVariable.length > 0 ? (
              <Select
                options={options}
                components={animatedComponents}
                isMulti
                value={IndependentVariable}
              />
            ) : (
              <Select
                options={options}
                components={animatedComponents}
                isMulti
              />
            )}
          </TableCell>
          <TableCell sx={{ width: 250 }}>
            {DependentVariable != "" ? (
              <Select
                options={options}
                components={animatedComponents}
                value={DependentVariable}
              />
            ) : (
              <Select options={options} components={animatedComponents} />
            ) }
          </TableCell>
          <TableCell>
            <TextField
              id="outlined-basic"
              label=""
              variant="outlined"
              size="small"
              sx={{ width: 60 }}
              value={Frequency}
              name="Frequency"
              onChange={(event) => {
                handlechange(index, event);
              }}
            />
          </TableCell>
          <TableCell>
            <Button variant="outlined" color="error" sx={{ borderRadius: 10 }}>
              Save
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  };
  return <>{renderRows()}</>;
};

export { TableRows, options };
