
import { useDispatch } from "react-redux";
import { useMemo } from "react";

import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title = "", body,date, id, imageUrls = [] }) => {

  const dispatch = useDispatch();

  const onClickNote = () => {
  dispatch(setActiveNote({ title, body,date,imageUrls, id }))
  }

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + "..." : title;
  }, [title]);
  const newBody = useMemo(() => {
    return body.length > 17 ? title.substring(0, 17) + "..." : body;
  }, [body]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
