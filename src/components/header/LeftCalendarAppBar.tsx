
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

export default function LeftCalendarAppBar() {
  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{py: '0.75rem', marginTop: '1rem'}}>
        <Toolbar>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Stack direction='row' alignItems='center'>
            <Box>
              <Typography variant="body1" fontWeight="bold" fontSize='0.8rem'>
                Thomas Gepsan
              </Typography>
              <Typography variant="body2" fontSize='0.7rem'>Super Admin</Typography>
            </Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar alt="Remy Sharp" src="./images/image-avatar.png" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
