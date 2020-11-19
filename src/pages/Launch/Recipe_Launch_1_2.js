import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import '../../Recipe.css'
import Steppers from '../../Scripts/CustomizedSteppers'
import { makeStyles } from "@material-ui/core";
import DelayLink from 'react-delay-link';
import Steppers3 from "../../Scripts/CustomizedSteppers3";




const  useStyle = makeStyles((theme)  => ({
    container: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridGap: theme.spacing(2),
        maxWidth: "70%" }
}));

function Recipe_Launch_1_2(props) {
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
            <div className="Pr"><AnimatePresence>{isShow && (<motion.div  className="StepperBox" initial={defaultState} exit={defaultState} animate={{scale: 1, opacity: 1 }}><Steppers3/></motion.div>)}</AnimatePresence></div>
            <div className="RecImg" style={ImageBack1}></div>
            <div className="Container">
                <div className='nameBox'>
                    <div className="NameText">2 Этап</div>
                    <div className="underText"></div>
                </div>
                <div className="TextBox">
                    Выполняйте действия и отмечайте checkboxes!
                    <div className="TextBox">
                        Время приготовления: {props.coocking_time} минут
                    </div> </div>
                <div class="IngredientsBox">
                    <div className="ingr">Чек-лист</div>
                    <div className="IngrGrid">
                        <div className={classes.container}>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="1" className="checkbox" /><label htmlFor="1" className="nPr"> {props.step_1}</label>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="2" className="checkbox" /><label htmlFor="2" className="nPr"> {props.step_2}</label>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="3" className="checkbox" /><label htmlFor="3" className="nPr"> {props.step_3}</label>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="4" className="checkbox" /><label htmlFor="4" className="nPr"> {props.step_4}</label>
                            </div>
                            <div style={{ gridColumnEnd: "span 6" }}>
                                <input type="checkbox" id="5" className="checkbox" /><label htmlFor="5" className="nPr"> {props.step_5}</label>
                            </div>
                            <div style={{gridColumnEnd: "span 6"}}>
                                <input type="checkbox" id="6" className="checkbox"/><label htmlFor="6" className="nPr"> {props.step_6}</label>
                            </div>
                            <div style={{gridColumnEnd: "span 6"}}>
                                <input type="checkbox" id="7" className="checkbox"/><label htmlFor="7" className="nPr"> {props.step_7}</label>
                            </div>
                            <div style={{gridColumnEnd: "span 6"}}>
                                <input type="checkbox" id="8" className="checkbox"/><label htmlFor="8" className="nPr"> {props.step_8}</label>
                            </div>
                        </div>

                    </div>

                </div>

                <DelayLink delay={2020} to="../../" replace={false}><div className="Button" onClick={() => {setIsShow(true); setTimeout(() => {setIsShow(false);},1500)}}> Старт </div></DelayLink>

            </div>
        </div>
    );

}

export default Recipe_Launch_1_2;
