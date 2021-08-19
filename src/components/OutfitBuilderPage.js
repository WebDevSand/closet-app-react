import React from "react";
import { Slide, CircularProgress, Paper, Typography } from "@material-ui/core";
import useFetch from "../hooks/useFetch";

const OutfitBuilder = () => {
  const { data, loading, error } = useFetch();
  return (
    <>
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Paper className="margin10 compCenter">
          <Typography variant="h3" component="h1">
            Here's some random inspiration!
          </Typography>
          <Typography variant="h6" component="h1">
            Eventually you'll be able to build an outfit here...
          </Typography>
          {loading && <CircularProgress />}
          {data && <img src={data.urls.small}></img>}
        </Paper>
      </Slide>
    </>
  );
};

export default OutfitBuilder;
