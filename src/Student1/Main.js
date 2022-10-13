import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Card, CardHeader, CardContent } from "@mui/material";
import { useRef } from "react";
import { Students } from "../Task3/studentInfo";
import Studentdetails from "../Task3/Studentdetails";
const Main = () => {
  const [StudentData, SetStudentData] = useState("");
  const [id, SetId] = useState("");
  const [Show, SetShow] = useState(false);
  const inputRef = useRef();
  const [hi, sethi] = useState(true);
  useEffect(() => {
    for (let i = 0; i < Students.length; i++) {
      if (id == Students[i].id) {
        SetStudentData(Students[i]);
        SetShow(true);
        break;
      } else {
        SetStudentData("");
        SetShow(false);
      }
    }
  }, [id]);

  return (
    <>
      <Box
        sx={{
          width: "80%",
          height: 600,
          border: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
            marginLeft: "25%",
          }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              document.getElementById("all").style.display = "block";
              document.getElementById("special").style.display = "none";
            }}
          >
            AllStudents
          </Button>

          <TextField
            id="outlined-name"
            label="Enter Id"
            onChange={(e) => {
              SetId(e.target.value);
            }}
          />
          <Button
            variant="outlined"
            onClick={() => {
              if (StudentData) {
                SetShow(true);
                document.getElementById("special").style.display = "block";
                document.getElementById("all").style.display = "none";
              } else {
                SetShow(false);
                document.getElementById("special").style.display = "block";
                document.getElementById("all").style.display = "none";
              }
            }}
          >
            GetData
          </Button>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 2,
            borderColor: "red",
            marginTop: 3,
            marginLeft: 15,
          }}
        >
          <Box
            id="all"
            sx={{
              width: "100%",
              height: "100%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              display: "none",
            }}
          >
            <Studentdetails />
          </Box>
          <Box
            id="special"
            sx={{
              width: "60%",
              height: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              display: "none",
            }}
          >
            {Show ? (
              <Card sx={{ width: "100%", height: "100%", textAlign: "center" }}>
                <CardHeader title="Student Details" />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 30 }}
                  >
                    ID : {StudentData.id}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 30 }}
                  >
                    Name : {StudentData.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 30 }}
                  >
                    Marks : {StudentData.marks}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 30 }}
                  >
                    Place : {StudentData.place}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: 30 }}
                  >
                    Branch : {StudentData.branch}
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              "No Records Found !"
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Main;
