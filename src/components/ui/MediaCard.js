import React from 'react';
import {withStyles, createStyleSheet} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import reptileImage from '../../assets/images/plan.jpg';
import '../../assets/css/ui/mediacard.scss';

const MediaCard = ({content, free}) =>
    (
        <Card className='media-card'>
            <CardMedia>
                <img src={reptileImage} alt="Contemplative Reptile"/>
            </CardMedia>
            <CardContent>
                <Typography type="headline" component="h2">
                    Lizard
                </Typography>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button compact primary>升级</Button>
            </CardActions>
        </Card>
    );
export default MediaCard;