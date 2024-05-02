import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

import courseBg from "../assets/images/bg.jpg";

const courseList = [
  { id: 1, name: "Chemistry", code: "CHEM1001 ", compProgress: "30%" },
  { id: 2, name: "Chemistry Lab", code: "CHEM1002 ", compProgress: "20%" },
  {
    id: 3,
    name: "Programming with Python",
    code: "CHEM1003 ",
    compProgress: "50%",
  },
];

function Courses() {
  return (
    <>
      <Container maxWidth="lg">
        <h3>Courses</h3>
        <Grid container spacing={2}>
          {courseList.map((course, index) => (
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }} key={index}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={courseBg}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {course.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.code}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {course.compProgress}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
export default Courses;
