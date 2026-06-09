import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = ({ data }) => {
  if (!data) return null;

  return (
    <AppBar position="sticky" color="inherit" elevation={2}>
      <Toolbar className="max-w-7xl mx-auto w-full flex justify-between">
        {/* Logo */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#1976d2",
          }}
        >
          {data.logo}
        </Typography>

        {/* Navigation Menu */}
        <div className="flex items-center gap-8">
          {data.menuItems?.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "10px",
            px: 3,
          }}
        >
          {data.ctaButtonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
