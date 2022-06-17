import { useState, useEffect, useRef } from "react";
import classes from './AccordionItem.module.css';

const AccordionItem = ({
    showPanelContent,
    fontWeightBold,
    item,
    index,
    activateTab,
    isActive,
}) => {

    // set the panel height state to 0

    const [height, setHeight] = useState("0px");

    const content = useRef(null);

    useEffect(() => {
        setHeight(height = content.current.scrollHeight) 
    });

    return (
        <div 
            className={classes.panel} 
            key={item.index}
            role='tabpanel'
        >
            <dt>
                <div
                    aria-controls={`panel${index + 1}_label`}
                    className={fontWeightBold ? classes.panel_label_bold : classes.panel_label}
                    onClick={ activateTab }
                >
                    {item.label}
                </div>
            </dt>
            <dd
                ref={content}
                className={classes.panel_inner}
                style={showPanelContent ? { height: `${height}px` } : { height: '0px' }}
                aria-hidden={ !isActive }
            >
                <div
                    id={`panel${index + 1}_content`}
                    className={classes.panel_content}
                    style={showPanelContent ? {opacity: '1'} : {opacity: '0'}} 
                >
                    {item.content}
                </div>
            </dd>
        </div>
    )
};

export default AccordionItem;