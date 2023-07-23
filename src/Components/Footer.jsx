import { Container, Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
      component="footer"
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}Oxford Group of Institutions ©2023<br />
        <Link
          color="inherit"
          href="https://github.com/theabserver?tab=repositories"
        >
        Created by Theabserver in {" "}
        {new Date().getFullYear()}
        {"."}
        </Link>
      </Typography>
      {/* <Container maxWidth="sm">
      </Container> */}
    </Box>
  );
}
