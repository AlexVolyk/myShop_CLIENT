import styled from 'styled-components';


const StyledCategoriesTriangle = styled.div<{open: boolean, color?: string}>`
    display: block;
    align-self: center;
    transform: rotate(${props => props.open ? '-180deg' : '0deg'});
    transition-propery: transform(rotate);
    transition-duration: 1s;
    
    & > svg {
        color: ${props => props.color ? props.color : 'black'};
        vertical-align:middle;
    }
`;

const CategoriesTriangle = (props: any) => {
    return (
        <StyledCategoriesTriangle {...props} />
    )
}

export default CategoriesTriangle;