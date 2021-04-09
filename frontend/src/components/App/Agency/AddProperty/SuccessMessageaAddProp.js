import React, {useState} from 'react'
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
   margin: '20';
   height: '50';
`;

const SuccessMessageaAddProp = ({login}) => {

    const style = {
        width:'100%',
        height:'100%', 
        zIndex:'100', 
        position:'absolute',
        background:'rgb(0, 191, 255, 0.7)',
        borderRadius:'1px'
    }

    const style1 = {
        width:'20%',
        height:'20%', 
        zIndex:'100', 
        position:'absolute',
        borderRadius:'1px',
        top: '40%',
        left: login ? '44%' : '48%'
    }




    return (
        <div style={style}>
            <div style={style1}>
            <FadeLoader color="#ffffff" loading={true} css={override} size={150} />
            </div>
        </div>
    )
}

export default SuccessMessageaAddProp
