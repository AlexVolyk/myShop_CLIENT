import styled from 'styled-components';


const StyledMenuAccardion = styled.div<{ open: boolean, position?: string, right?: boolean, marginTop?: number }>`
max-height: ${props => props.open ? '100%' : 0};
margin-top: ${props => props.marginTop && props.marginTop + 'px'};
    position: ${props => props.position ? props.position : 'static'};
    ${props => props.right && 'right: 0'};
    overflow: hidden;
    transition-duration: 1s;
    transition-property: max-height;
`;

const MenuAccardion = (props: any) => {
    return (
        <StyledMenuAccardion {...props} />
    )
}

export default MenuAccardion;