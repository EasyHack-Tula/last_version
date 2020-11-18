import React, { useState } from 'react';
import '../../Recipe.css'
import { makeStyles } from "@material-ui/core";
import DelayLink from 'react-delay-link';






const  useStyle = makeStyles((theme)  => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: theme.spacing(2),
        maxWidth: "70%" }
}));

function Recipe_Dinner_2(props) {
    const classes = useStyle();
    const [isShow, setIsShow] = useState(false);

    const defaultState = {
        scale: 0.7,
        opacity: 0

    };



    let ImageBack1 = {
        backgroundImage: "url(" + props.photo_recipe_dinner_first_1 + ")"
    };
    return (



        <div>
            <div className="RecImg" style={ImageBack1}></div>
            <div className="Container">
                <div className='nameBox'>
                    <div className="NameText">{props.name}</div>
                    <div className="underText"></div>
                </div>
                <div className="TextBox">
                    {props.about}
                </div>
                <div class="IngredientsBox">
                    <div className="ingr">Ингредиенты</div>
                    <div className="IngrGrid">
                        <div className={classes.container}>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_1}</div>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_2}</div>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_3}</div>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_4}</div>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_5}</div>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_6}</div>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_7}</div>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_8}</div>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <div className="Bold"> • </div><div className="nPr"> {props.ingredients_9}</div>
                            </div>
                        </div>

                    </div>

                </div>

                <DelayLink delay={2001} to="./Recipe_Dinner_2_1" replace={false}><div className="Button" onClick={() => {setIsShow(true); setTimeout(() => {setIsShow(false);},1500)}}> Старт </div></DelayLink>

            </div>
        </div>
    );

}

export default Recipe_Dinner_2
