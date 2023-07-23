import React, { useState } from "react";
import Box from "@mui/material/Box";
import MiniDrawer from "../Components/Sidebar";
import { styled } from "@mui/material/styles";
import Footer from "../Components/Footer";
import { Students } from "./Students";
import { Dashboard } from "./Dashboard";
import { Faculty } from "./Faculty";
import { Messages } from "./Messages";
import { BrowserRouter as Route } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export const Home = () => {
  const [currentComponent, setCurrentComponent] = useState('dashboard')
  // change state from child by passing in a callback as props that updates state in parent
  const setComponent = (component) => {
    setCurrentComponent(component)
  }
  const renderComponent = () => {
    switch(currentComponent){
      case 'dashboard': return <Dashboard />
      case 'students': return <Students />
      case 'messages': return <Messages />
      case 'faculty': return <Faculty />
      default: return <Dashboard />
    }
  }
  return (
    <>
      <MiniDrawer navCB={setComponent} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 , pl: 12, pt:11, minHeight: `calc(100vh - 136px)`}}>
        {renderComponent()}
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
      <Footer />
    </>
  );
};
