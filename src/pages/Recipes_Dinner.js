import '../App.css';
import React from 'react';
import {Grid} from "@material-ui/core"

import {Link} from "react-router-dom";


function Recipes_Dinner(props) {
    let imageItem1 = {
        backgroundImage: "url(" + props.photo_circle_1 + ")"
    };
    let imageItem2 = {
        backgroundImage: "url(" + props.photo_circle_2 + ")"
    };
    return (
            <div>
                <h1 className="headerText">
                    Книга Вкуса
                </h1>
                <div className="content">

                    <div className="ItemCon">
                        <Grid container spacing={8}>
                            <Grid item xs={12} sm={4}>
                                <Link to="./Dinner/Recipe_Dinner_1">
                                    <div className="ItemCircle" style={imageItem1}>
                                        <div className="ItemName">
                                            {props.name2}
                                        </div>
                                    </div>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Link to ="./Dinner/Recipe_Dinner_2">
                                    <div className="ItemCircle" style={imageItem2}>
                                        <div className="ItemName">
                                            {props.name2}
                                        </div>
                                    </div>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>

                </div>
            </div>

    )};

export default Recipes_Dinner;
