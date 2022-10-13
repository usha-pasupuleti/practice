import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@mui/material/";

import { Students } from "./Info";

const Student = () => {
  const letters = /[a-zA-Z]/g;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const params = useParams();
  const [userid, SetUserId] = useState(params.userId);
  const [StudentData, SetStudentData] = useState("");
  
  useEffect(() => {
    for (let i = 0; i < Students.length; i++) {
      if (userid == Students[i].id) {
        SetStudentData(Students[i]);
      }
    }
  }, [userid]);

  return (
    <>
      {userid.length == 4 ? (
        letters.test(userid) || specialChars.test(userid) ? (
          <>
            <Typography>UserId only Contain Digits !</Typography>
          </>
        ) : StudentData === "" ? (
          <>
            <Typography>Student Record Not Found</Typography>
          </>
        ) : (
          <Card sx={{ maxWidth: 400, height: 400, textAlign: "center" }}>
            <CardHeader
              title="Student Details"
              subheader="Specific Student Details"
            />
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
        )
      ) : (
        <>
          <Typography>Student Id length Must Be Equal To 4 !</Typography>
        </>
      )}
    </>
  );
};

export default Student;
