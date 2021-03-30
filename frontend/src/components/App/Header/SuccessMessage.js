import React, {useState} from 'react'
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
   margin: '20';
   height: '50';
`;

const SuccessMessage = () => {

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

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
        top:'40%',
        left:'40%'
    }

    const style2 = {
        width:'100%',
        height:'fit-content', 
        zIndex:'100', 
        position:'absolute',
        borderRadius:'1px',
        top:'40%',
        color: 'white',
        fontWeight:'200',
        fontSize:'larger',
        fontFamily:'Roboto',
        textAlign:'center',
        padding:'5px',
        borderRadius:'5px'
        
    }

    setTimeout(() => {
        setLoading(false)
    }, 1500)

    return (
        <div style={style}>
            <div style={style1}>
            <FadeLoader color={color} loading={loading} css={override} size={150} />
            </div>
            {!loading && <div style={{...style2, background:'rgb(255, 140, 0)'}}>
                Signed up successfully. <br /> Redirecting to your account.
            </div>}
        </div>
    )
}

export default SuccessMessage
