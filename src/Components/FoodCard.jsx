import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Img from './CorouselComponent/img1.jpg'
 
const FoodCard = () => {
    const name = "Orion"
    const description = "A Project undergone Netlink Software Private Limited whose is being led by Manager "
    return(
        <Card sx={{color: "white", background: "linear-gradient(100deg, #41565cff, #3b5c69ff, #516367ff, #606364ff)",
                }}>
            <CardMedia src={Img} sx={{ height: 140 }} />
            <CardContent>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" >{description}</Typography>
            </CardContent>
        </Card>
    );
};
 
export default FoodCard;
