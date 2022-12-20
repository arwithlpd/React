import { Card, CardContent, Typography } from '@mui/material';

export default function Stats({ count }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Total Count: {count}
        </Typography>
      </CardContent>
    </Card>
  );
}
