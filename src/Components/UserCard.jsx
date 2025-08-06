import { Avatar, Card, CardContent, Typography } from "@mui/material";
import Img from './user.jpg'
 
const UserCard = () => {
  return (
    <Card sx={{ mt: 8, width: 350, height: "auto", 
      background: "linear-gradient(100deg, #424a4bff, #3e5153ff, #356c6cff, #737977ff)",
      color: "white"
    }}>
      <CardContent>
        <Avatar src={Img} sx={{ width: 80, height: 80, mb: 2}} />
        <Typography variant="h6" >Rajneesh Singh</Typography>
        <Typography variant="body2" >Role: Admin</Typography>
        <Typography variant="body2" >Profession: Software Engineering</Typography>
        <Typography variant="body2" >Description: Enthusiastic Backend Developer</Typography>
      </CardContent>
    </Card>
  );
};
 
export default UserCard;