 import { Avatar, Card, CardContent, Typography, Rating } from "@mui/material";
 
 const TestimonialsCard = ({ testimonial }) => {
   return (
     <Card
       elevation={3}
       className="h-full rounded-4xl hover: shadow-xl transition-all duration-300 "
     >
       <CardContent className="p-6">
         <Avatar
           sx={{
             width: 60,
             height: 60,
             margin: "0 auto",
             marginBottom: "16px",
             backgroundColor:"blueviolet"
           }}
         >
           {testimonial.name.charAt(0)}
         </Avatar>

         <Typography
           variant="body1"
           color="textSecondary"
           className="italicn text-center mb-3"
         >
           {testimonial.review}
         </Typography>

         <div className="flex justify-center mb-4">
           <Rating value={testimonial.rating} readOnly></Rating>
         </div>

         <Typography variant="h6" fontWeight="bold" align="center">
            {testimonial.name}
         </Typography>
       </CardContent>
     </Card>
   );
 };
 export default TestimonialsCard;