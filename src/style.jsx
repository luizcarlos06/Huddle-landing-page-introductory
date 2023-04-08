import styled from "styled-components";

export const PrincipalContainer = styled.div `
    height: 100vh;
    background-color: #684BB1;
`;

export const RiscoFundo = styled.div `
    position: absolute;
    top: 524.4px;
`;

export const RiscoFundo2 = styled.div `

`;

export const ImageLogo = styled.div `
    position: absolute;
    img{
        height: 54px;
        margin-left: 50px;
        margin-top: 30px;
    }
`;

export const Container = styled.div `
    display: flex;
`;

export const Telas = styled.div `

    img{
        height: 500px;
        position:absolute;
        top: 240px;
        left: 190px;
    }
`;

export const Textos = styled.div`
    z-index: 1;
    color: white;
    position: absolute;
    top: 250px;
    right: 190px;
    h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        line-height: 60px;
    }
    p{  
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        width: 600px;
        margin-top: 20px;
    }
    button {
        margin-top: 40px;
        background: #FFFFFF;
        box-shadow: 2px 4px 9px 3px rgba(0, 0, 0, 0.258633);
        border-radius: 28px;
        height: 56px;
        width: 200px;
        border: none;
        border-radius: 28px;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #684BB1;
        cursor: pointer;
        &:hover {
            background: #E880E8;
            color: white;
            transition: 0.6s;
            box-shadow: 2px 4px 9px 3px rgba(0, 0, 0, 0.258633);
        }
        &:active {
            background: #ec3fec;
            color: white;
            transition: 0.6s;
            box-shadow: 2px 4px 9px 3px rgba(0, 0, 0, 0.258633);
        }
    }
`;

export const T1 = styled.div `
    z-index: -1;

    img {
        height: 100px   ;
        position: absolute;
        top: 70px;
        right: 120px;
    }
`;

export const T2 = styled.div `
    z-index: -1;

    img {
        height: 70px;
        position: absolute;
        top: 30px;
        right: 800px;
    }
`;

export const T3 = styled.div `
    z-index: -1;

    img {
        height: 70px;
        position: absolute;
        top: 200px;
        left: 780px;
    }
`;

export const T4 = styled.div `
    z-index: -1;

    img {
        height: 40px;
        position: absolute;
        top: 720px;
        right: 100px;
    }
`;

export const T5 = styled.div `
    z-index: -1;

    img {
        height: 70px;
        position: absolute;
        top: 760px;
        right: 530px;
    }
`;

export const X = styled.div `
    z-index: -1;

    img {
        height: 50px;
        position: absolute;
        top: 870px;
        left: 50px;
    }
`;

