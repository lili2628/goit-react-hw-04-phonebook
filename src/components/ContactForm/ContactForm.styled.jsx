import styled from '@emotion/styled';

export const Form = styled.form`
    width: 100%;
    border: 2px solid #cecece;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #4c1130;

    padding-top: 20px;
    padding-bottom: 20px;
`;

export const FormData = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
`;

export const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: center;
`;

export const FormInput = styled.input`
    font-family: inherit;
       
    width: 200px;
    padding: 6px;
    margin: 0;
    
    font-size: 12px;
    
    border: 1px solid #cecece;
    background: #F6F6f6;
    border-radius: 4px;
`;

export const AddBtn = styled.button`
    display: block;
    cursor: pointer;
    padding: 8px 14px;
    width: 120px;
    margin-left: auto;
    margin-right: auto;

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