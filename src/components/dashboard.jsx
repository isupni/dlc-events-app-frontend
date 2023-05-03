import {
  Alert,
  Button,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import { getAllevents, cleanMsgAndErr } from "../actions/eventActions";
import { eventReducer, initStateEvent } from "../reducers/eventReducers";

import EventReport from "./eventReport";
import { TransitionGroup } from "react-transition-group";
import AddCircle from "@mui/icons-material/AddCircle";
import Delay from "./delay";
import { Box } from "@mui/system";
import AddOrModifyEventForm from "./addOrModifyEventForm";

export const EventContext = React.createContext();

const Dashboard = () => {
  const [eventState, eventDispatch] = useReducer(eventReducer, initStateEvent);
  const [openAddOrModEvForm, setOpenAddOrModEvForm] = useState(false);
  const [updateEvent, setUpdateEvent] = useState(null);

  useEffect(() => {
    console.log("GET ALL EVENT");
    const getEvents = async () => {
      await getAllevents(eventDispatch);
    };
    getEvents();
  }, []);

  const loadingSkeleton = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((e) => (
        <Skeleton
          variant="text"
          animation="wave"
          width="94%"
          sx={{ fontSize: "4rem" }}
        />
      ))}
    </Box>
  );

  const eventList = eventState.events ? (
    eventState.events.map((ev, i) => (
      <Delay key={ev.id} delay={i * 200}>
        <EventReport
          event={ev}
          setOpenAddEvForm={setOpenAddOrModEvForm}
          setEdit={setUpdateEvent}
        />
      </Delay>
    ))
  ) : (
    <p>No events in the specified data source</p>
  );

  return (
    <Box>
      <EventContext.Provider
        value={{ state: eventState, dispatch: eventDispatch }}
      >
        <AddOrModifyEventForm
          open={openAddOrModEvForm}
          setOpen={setOpenAddOrModEvForm}
          edit={updateEvent}
          setEdit={setUpdateEvent}
        />

        <Button
          variant="contained"
          size="large"
          startIcon={<AddCircle />}
          onClick={() => setOpenAddOrModEvForm(true)}
          sx={{
            marginLeft: "80%",
            marginTop: "-100px",
            backgroundColor: "#a4a4a6",
            ":hover": {
              backgroundColor: "#dbdbdb",
            },
          }}
        >
          Add New Event
        </Button>

        <Stack>
          {eventState.loading ? (
            loadingSkeleton
          ) : eventState.events.length > 0 ? (
            <TransitionGroup>{eventList}</TransitionGroup>
          ) : (
            <Typography fontStyle="italic" variant="h4">
              No events to display ...
            </Typography>
          )}
        </Stack>
        <Snackbar
          open={!!(eventState && (eventState.msg || eventState.error))}
          autoHideDuration={5000}
          onClose={() => cleanMsgAndErr(eventDispatch)}
        >
          <Alert
            severity={eventState.error ? "error" : "info"}
            sx={{ width: "100%" }}
          >
            {eventState.error
              ? `Error status ${eventState.error.status} - ${eventState.error.title}`
              : eventState.msg}
          </Alert>
        </Snackbar>
      </EventContext.Provider>
    </Box>
  );
};

export default Dashboard;
