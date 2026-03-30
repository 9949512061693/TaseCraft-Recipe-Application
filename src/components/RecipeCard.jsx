import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));

export default function RecipeReviewCard({ product, updateFavoriteStatus }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card sx={{ maxWidth: 345, borderRadius: 5, position: 'relative', transition: 'box-shadow 0.3s ease', ":hover": { boxShadow: '0px 10px 16px rgba(46, 158, 218, 0.95)' } }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {product.name[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={product.name}

            />
            <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => updateFavoriteStatus(product.id)}>
                    <FavoriteIcon sx={{ color: product.isFavorite ? 'red' : 'gray' }} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography sx={{ color: '#1F2937', fontSize: 18, fontWeight: 'bold' }}>Ingredients:</Typography>
                    <Typography sx={{ marginBottom: 1, fontSize: 15, color: '#4B5563', paddingLeft: 2 }}>
                        {product.ingredients.map((eachIng, index) => (
                            <li key={index}>{eachIng}</li>
                        ))}
                    </Typography>
                    <Typography sx={{ color: '#2563EB', fontWeight: 600, fontSize: 18 }} >Instructions: </Typography>
                    <Typography sx={{ marginBottom: 1, color: '#4B5563', paddingLeft: 2, fontSize: 16 }}>
                        {product.instructions.map((eachInstr, index) => (
                            <li key={index}>{eachInstr} </li>
                        ))}
                    </Typography>
                    <Typography>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
