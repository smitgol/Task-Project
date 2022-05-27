import TableComponent from "../Components/table";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <Container sx={{ width: "100%", maxWidth: 500, mx: "auto" }}>
      <Typography
        variant="h4"
        component="div"
        sx={{ my: 5, textAlign: "center" }}
      >
        Alert Table
      </Typography>
      <TableComponent />
    </Container>
  );
}
