import { Grid, makeStyles, Typography, Avatar } from "@material-ui/core";
import { career } from "../data.json";

const useStyles = makeStyles((theme) => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    alignSelf: "center",
    justifySelf: "center",
  },
  avatar: {
    height: theme.spacing(8),
    width: theme.spacing(8),
    padding: theme.spacing(2),
  },
}));

export default function CareerGoals() {
  const classes = useStyles();

  return (
    <Grid
      direction="row"
      container
      justify="center"
      alignItems="center"
      className={classes.cont}
    >
      <Grid item xs={12} lg={6}>
        <Typography variant="h2" gutterBottom component="p">
          Career Summary & Goals
        </Typography>
        <Typography variant="h5" gutterBottom component="p">
          {career.summary}
        </Typography>
        <Typography variant="h5" gutterBottom component="p">
          {career.goal}
        </Typography>
      </Grid>
    </Grid>
  );
}
