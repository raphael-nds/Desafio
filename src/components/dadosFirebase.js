import { Card, CardActions, CardContent, Collapse, IconButton, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import {React, useState} from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    marginTop: '10px',
    marginBottom: '10px',
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

 export default function DadosFirebase({dadosCard, onDelete}) {
    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    return (
      
              <Card className={classes.root}>

                <CardContent >
                
                          <Typography variant="body2" style={{color: "black"}}  component="p" align="center">
                           <h4>Cep: {dadosCard.cep} </h4>
                          </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <IconButton aria-label="favoritar">
                      <FavoriteIcon style={{color: "black"}} />
                    </IconButton>
                    <IconButton aria-label="deletar">
                      <DeleteIcon  onClick={onDelete} style={{color: "black"}} />
                    </IconButton>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="mais"
                    >
                      <ExpandMoreIcon style={{color: "black"}}  />
                    </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent align="left">
                      <Typography variant="body1">
                        Rua:  {dadosCard.logradouro}
                      </Typography>

                      <Typography variant="body1">
                          Cidade: {dadosCard.localidade}
                      </Typography>

                      <Typography variant="body1">
                          Número: {dadosCard.numero}
                      </Typography>

                      <Typography variant="body1">
                        Bairro:  {dadosCard.bairro}
                      </Typography>

                     <Typography variant="body1">
                          Estado: {dadosCard.uf}
                     </Typography>

                  </CardContent>
                </Collapse>
              </Card>
        );
}    

