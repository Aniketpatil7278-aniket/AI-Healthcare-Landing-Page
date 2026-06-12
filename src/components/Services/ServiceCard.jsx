import { Card, CardContent, Typography } from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ServiceCard = ({ service }) => {
  const iconMap = {
    videocam: <VideocamIcon fontSize="large" />,
    calendar_month: <CalendarMonthIcon fontSize="large" />,
    monitor_heart: <MonitorHeartIcon fontSize="large" />,
    folder_shared: <FolderSharedIcon fontSize="large" />,
    smart_toy: <SmartToyIcon fontSize="large" />,
  };

  return (
    <Card
      elevation={3}
      className="h-full rounded-3xl hover:shadow-xl transition-all duration-300"
    >
      <CardContent className="text-center p-8">
        {/* <div className="text-blue-600 mb-4">{service.icon}</div> */}
        <div className="text-blue-600 mb-4">{iconMap[service.icon]}</div>

        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {service.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
