import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ data }) => {
  const [open, setOpen] = useState(false);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        className="!bg-white !text-black border-b border-gray-200"
      >
        <Toolbar className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 md:px-6 py-2">
          {/* Logo */}
          <Typography
            variant="h5"
            className="!font-bold !text-blue-600 cursor-pointer"
          >
            {data.logo}
          </Typography>

          {/* Desktop Menu */}
          <Box className="hidden md:flex items-center gap-8">
            {data.menuItems?.map((item, index) => (
              <Typography
                key={index}
                className="cursor-pointer font-medium text-gray-700 hover:text-blue-600 transition-all duration-300"
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Desktop CTA */}
          <Box className="hidden md:block">
            <Button
              variant="contained"
              className="!rounded-xl !px-5 !py-2 !normal-case"
            >
              {data.ctaButtonText}
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton className="md:!hidden" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-72 h-full p-6">
          <div className="flex justify-between items-center mb-8">
            <Typography variant="h6" className="!font-bold !text-blue-600">
              {data.logo}
            </Typography>

            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <List>
            {data.menuItems?.map((item, index) => (
              <ListItem
                key={index}
                className="cursor-pointer rounded-lg hover:bg-gray-100"
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>

          <Button
            variant="contained"
            fullWidth
            className="!mt-6 !rounded-xl !normal-case"
          >
            {data.ctaButtonText}
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
