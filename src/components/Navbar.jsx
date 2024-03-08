import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-around"
      px='20px'
      sx={{ gap: { sm: "122px", xs: "40px"},mt:{sm:'32px',xs:'20px'},justifyContent:'none' }}
    >
      <Link to={"/"}>
        <img
          src={Logo}
          alt="img"
          style={{ width: "48px", height: "48px", margin: "0px 20px" }}
        />
      </Link>
      <Stack
        direction={"row"}
        gap="40px"
        fontSize={"24px"}
        alignItems="flex-end"
      >
        <Link
          to={"/"}
          sx={{"&:hover":{borderBottom: "3px solid #FF2625"}}}
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          sx={{"&:hover":{borderBottom: "3px solid #FF2625"}}}
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
        <Button variant="outlined"style={{border:"1px solid #3A1212",marginLeft:"50rem"}}>
        <Link 
          to={"/login"}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            fontSize:'1.1rem',
            fontWeight:'500',
          }}
        >
          Login
        </Link>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
