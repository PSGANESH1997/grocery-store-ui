import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CountDown = () => {
  const [time, setTime] = useState({ hours: 10, minutes: 56, seconds: 21 });

  useEffect(() => {
    const interval = setInterval(() => {
      const { hours, minutes, seconds } = time;
      if (seconds > 0) setTime({ ...time, seconds: seconds - 1 });
      else if (minutes > 0)
        setTime({ hours, minutes: minutes - 1, seconds: 59 });
      else if (hours > 0)
        setTime({ hours: hours - 1, minutes: 59, seconds: 59 });
      else clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <Box
      display="flex"
      alignItems="center"
      my={2}
      sx={{
        backgroundColor: "#ee490e",
        padding: 1,
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: 1,
        marginLeft: 5,
      }}
    >
      <AccessTimeIcon />
      <Typography variant="h8" ml={1}>
        Expires in: {`${time.hours}:${time.minutes}:${time.seconds}`}
      </Typography>
    </Box>
  );
};

export default CountDown;
