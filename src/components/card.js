import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DeleteIcon from '@material-ui/icons/Delete';
import { ContainerCard } from '../styled/styled-card';
import fireDb from '../firebase'




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '90%',
    margin: 'auto',
  },
 
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    margin: '0',
  },
  
}));

export default function RecipeReviewCard({recuperarEndLocFirebase}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

/*
  let [dadosEnde, setDadosEnde] = useState({});
  const [currentId, setCurrentId] = useState("");
*/

/*
  useEffect(() => {
   fireDb.child("endereco").on("value", (dbPhoto) => {
     if(dbPhoto.val() != null){
       setDadosEnde({
         ...dbPhoto.val(),
       });
     } else {
     }
   });
  }, []);
*/
  
  return (
    <ContainerCard>

      <Card className="card">

        <div className="cepAdicionado">
          <span>CEP (xxxxx-xxx)</span>
        </div>

        <CardActions disableSpacing>
          <IconButton  aria-label="Localização">
            <LocationOnIcon style={{color: "black"}} onClick={() => console.log("localizazarMap")}/>
          </IconButton>
          
          <IconButton aria-label="Adicionar aos favoritos">
            <FavoriteIcon style={{color: "black"}} onClick={() => console.log("favoritarLoc")}/>
          </IconButton>

          <IconButton aria-label="Remover" >
            <DeleteIcon style={{color: "black"}} 
            onClick={() => console.log("deletarLoc")} />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Mostrar">
            <ExpandMoreIcon style={{color: "black"}} />
          </IconButton>
        </CardActions>


        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
            <Typography paragraph variante="h5" align="center">

            </Typography>
            
          </CardContent>
       </Collapse>
      </Card>

    </ContainerCard>
  );
}