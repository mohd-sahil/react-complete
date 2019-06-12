import React from 'react'

const withclass = (props) => {
           <div 
           className={props.classes} />
           {props.children}
           
}

export default withClass