

import { Card, CardContent, Typography, Chip, Avatar } from "@mui/material";
const DoctorCard=({doctor})=>{
    return (
      <Card
        elevation={3}
        className="h-full rounded-3xl hover:transition-all duration-300"
      >
        <CardContent className="flex flex-col items-center text-center p-8">
          <Avatar
            src={doctor.image}
            alt={doctor.name}
            sx={{
              width: 120,
              height: 120,
              mb: 2,
            }}
          />

          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {doctor.name}
          </Typography>

          <Typography color="primary" fontWeight="bold" className="pb-1">
            {doctor.specialization}
          </Typography>

          <Typography variant="body1" color="text.secondary" className="mt-2">
            Experience:{doctor.experience}
          </Typography>

          <Chip
            label={doctor.availability}
            color={doctor.availability === "Available" ? "success" : "warning"}
            className="mt-4"
          />
        </CardContent>
      </Card>
    );
};
export default DoctorCard;
