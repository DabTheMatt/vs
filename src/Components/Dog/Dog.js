import { useState, useRef, useEffect } from "react";

export default function Dog(props) {


    return (
        <div className={`dog ${props.selectedStyle}`} onClick={()=>props.select(props.index)}>
            
        </div>
    );
  }