import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Home from '@mui/icons-material/Home';
import Category from '@mui/icons-material/Category';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Nature from '@mui/icons-material/Nature';
import Trending from '@mui/icons-material/TrendingUp';

export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%', maxHeight: '100%'}} style={{ marginLeft: 10}}>
      <MenuList>

        <MenuItem>
          <ListItemIcon>
            <Home fontSize="small" />
          </ListItemIcon>
          <ListItemText> Home </ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Category fontSize="small" />
          </ListItemIcon>
          <ListItemText> Category </ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <ThumbUp fontSize="small" />
          </ListItemIcon>
          <ListItemText> Liked </ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Nature fontSize="small" />
          </ListItemIcon>
          <ListItemText> Eco-Preference </ListItemText>
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <Trending fontSize="small" />
          </ListItemIcon>
          <ListItemText> Trending </ListItemText>
        </MenuItem>

      </MenuList>
    </Paper>
  );
}
