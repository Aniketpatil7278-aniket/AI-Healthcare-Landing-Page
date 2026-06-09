import { Card, CardContent } from "@mui/material";
const ServiceCard =({item}) =>{
    return(
        <Card>
            <CardContent>
                <img src={item.icon} alt="" className="w-14 mb-4" />

                <h3 className="font-bold text-xl">{item.name}</h3>

                <p>{item.description}</p> 

            </CardContent>

        </Card>
    );
};
export default ServiceCard;