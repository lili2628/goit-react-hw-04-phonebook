import styled from '@emotion/styled';

export const ListItem = styled.li`
display: flex;
justify-content: space-between;

&:not(:last-child) {
     margin-bottom: 10px;
}
`;

export const InfoContainer = styled.div`
display: flex;
margin: 0;
`;

export const InfoItemContainer = styled.div`
    width: 150px;
    position: relative;
`;

export const Data = styled.p`
    display: block;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    align-items: str;

    width: 100%;
`;

export const DeleteBtn = styled.button`
    font-family: inherit;
    font-size: 100%;

    font-family: inherit;
    font-size: 12px;
    font-weight: bold;

    cursor: pointer;
    padding: 8px 14px;
    width: 120px;

    border: 1px solid #cecece;
    background: #f6f6f6;
    box-shadow: inset 0px 20px 20px #ffffff;
    border-radius: 8px;

    &:hover {
        box-shadow: inset 0px -20px 20px #ffffff;
    }

    &:focus {
        outline: none;
    }

    &:active {
        margin-top: 1px;
        margin-bottom: -1px;
        zoom: 1;
    }
`;