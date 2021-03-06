import React, { useState } from 'react';
import { IconButton } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";

interface Props {
    top: number,
    left: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            position: "absolute",
            // top: `calc(50% - 35px)`,
            // left: `calc(50% - 35px)`,
            width: "70px",
            height: "70px",
            display: "flex",
            cursor: "pointer",
            zIndex: 4,
            color: "white",
            backgroundColor: "#FF8400",
            borderStyle: "solid",
            borderWidth: "0.2em",
            borderColor: "#FFC421",
            "&:hover": {
                backgroundColor: "#FF8400"
            }
        },
    })
);

export default ((props) => {
    const classes = useStyles();

    return (
        <IconButton
            aria-label="food"
            className={classes.button}
            style={{ top: `calc(50% + ${props.top}px)`, left: `calc(50% + ${props.left}px)` }}
            onClick={() => console.log('Clicked!')}
        >
            <RestaurantIcon fontSize="large" />
        </IconButton>

    )
}) as React.FC<Props>;
