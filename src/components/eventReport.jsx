import React, { useContext } from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slide from "@mui/material/Slide";
import { severityMapping } from "../utils/severityMapping";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { Stack } from "@mui/material";
import { EventContext } from "./dashboard";
import { deleteEvent } from "../actions/eventActions";

const EventReport = ({ event, setOpenAddEvForm, setEdit }) => {
  const severityMap = severityMapping(event.severity);

  const { _, dispatch } = useContext(EventContext);

  const handleEdit = (e) => {
    setEdit(event);
    setOpenAddEvForm(true);
  };

  const handleDelete = (e) => {
    deleteEvent(dispatch, event.id);
  };

  return (
    <Slide
      direction="right"
      in={true}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 600 }}
      easing={{ enter: " cubic-bezier(0.34, 1.56, 0.64, 1)", exit: "linear" }}
    >
      <MuiAccordion
        disableGutters
        sx={{
          backgroundColor: severityMap.color,
          margin: "0.5% 3%",
        }}
      >
        <MuiAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`event-${event.id}panel-content`}
          id={`event-${event.id}panel-header`}
        >
          {severityMap.iconjsx}
          <Typography
            variant="h4"
            fontWeight="bold"
            width="33%"
            textAlign="start"
            paddingLeft="25px"
          >
            {event.title}
          </Typography>
          <Typography variant="h5" width="33%">
            {event.place}
          </Typography>
          <Typography textAlign="end" width="30%" fontWeight="bold">
            {event.dateTime.split("T").join(" ")}
          </Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails
          sx={{
            paddingBottom: 0.2,
          }}
        >
          <Typography textAlign="left" fontWeight="bold">
            Severity: {event.severity}
          </Typography>
          <Typography textAlign="left" fontWeight="bold">
            Description:
          </Typography>
          <Typography padding="0 10%">{event.description}</Typography>
          <Typography textAlign="end"> &#x2022; {event.author}</Typography>
          <Stack direction="row">
            <Tooltip title="Update Event" onClick={(e) => handleEdit(e)}>
              <IconButton aria-label="update">
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete Event" onClick={(e) => handleDelete(e)}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </MuiAccordionDetails>
      </MuiAccordion>
    </Slide>
  );
};

export default EventReport;
