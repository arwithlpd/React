import { Card, CardActions, CardContent, Typography } from '@mui/material';
import ButtonCom from './ButtonCom';
import Count from './Count';

export default function Counter({ id, count, increment, decrement }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          <Count count={count} />
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonCom handler={() => increment(id)}>+ increment</ButtonCom>
        <ButtonCom handler={() => decrement(id)}>- decrement</ButtonCom>
      </CardActions>
    </Card>
  );
}
