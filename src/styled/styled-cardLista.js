import styled from  'styled-components'

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    margin: auto;
    color: white;


    table{
        border-collapse: collapse;
        width: 100%;
        margin: auto;

        td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            display: flex;
        flex-wrap: wrap;
        }
    }
    
    
`;