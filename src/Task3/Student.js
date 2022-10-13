
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@mui/material/";

import { Students } from "./studentInfo";

export default function Student() {

    const letters = /[a-zA-Z]/g;
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const params = useParams();
  const [stdid, setStdid] = useState(params.stdid);
  const [StudentData, SetStudentData] = useState({});

  useEffect(() => {
    for (var i = 0; i < Students.length; i++) {
      if (stdid == Students[i].id) {
        SetStudentData(Students[i]);
      }
    }
  }, [stdid]);
  return (

    <div>

        {stdid.length == 4 ? (
        letters.test(stdid) || specialChars.test(stdid) ? (
          <div>
            <Typography>StdId only Contain Digits !</Typography>
          </div>
        ) : StudentData === "" ? (
          <div>
            <Typography>Student Record Not Found</Typography>
          </div>
        ) : (
          <Card sx={{ maxWidth: 545, height: 600, textAlign: "center" }}>
            <CardHeader
              title="Student Details"
              subheader="Specific Student Details"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 50 }}
              >
                ID : {StudentData.id}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 50 }}
              >
                Name : {StudentData.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 50 }}
              >
                Marks : {StudentData.marks}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 50 }}
              >
                Place : {StudentData.place}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 50 }}
              >
                Class : {StudentData.class}
              </Typography>
            </CardContent>
          </Card>
        )
      ) : (
        <>
          <Typography>Student Id length Must Be Equal To 4 !</Typography>
        </>
      )}
</div>
  );
}
