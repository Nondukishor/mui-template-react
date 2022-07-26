import styled from "@emotion/styled";
import theme from "../../theme";

const backgroundColor = (props) => {
    switch (props.variant) {
        case "contained":
            return theme.palette.common[props.color]
        case 'outlined':
        case 'text':
            return theme.palette.common.white
        case 'disabled':
            return '#eee'
        default:
            return '#fff'
    
    }
}
const borderColor = (props) => {
    switch (props.variant) {
        case "contained":
            return theme.palette.common[props.color]
        case 'outlined':
            return theme.palette.common[props.color]
        case 'text':
            return '#fff'
        case 'disabled':
            return '#eee'
        default:
            return '#eee'
    
    }
}


const textColor = (props) => {
    switch (props.variant) {
        case "contained":
            return props=>props.color==='light' ? '#000' : '#fff'
        case 'outlined':
            return props=>props.color==='light' ? '#000' : theme.palette.common[props.color]
        case 'text':
            return props => theme.palette.common.primary
        case 'disabled':
            return '#eee'
        default:
            return props=>props.color==='light' ? '#000' : '#fff'
    
    }
}



const Button = styled.button`
 background: ${backgroundColor};
 color: ${textColor};
 padding: 0.5rem 0.5rem;
 min-width: 6rem;
 border-radius: 0.2rem;
 border: 1px solid ${borderColor};
`


export default Button