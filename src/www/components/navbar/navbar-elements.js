import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    position: relative;
    top: 0; // cứng ở 1 chỗ 
    box-shadow: 0px 5px 8px -9px #04C4D9;
    background-color: rgba(17, 17, 17, 0.5);
    backdrop-filter: blur(20px) saturate(180%);
`;


export const LogoWrapper = styled.div`
    align-items: center;
    margin-left: 30px;
    display: flex;
`;

export const Logo = styled.img`
    height: 30px;
    cursor: pointer;
`;

export const Name = styled.p`
    margin: 3px 0px 0px 10px;
    font-weight: bold;
    font-size: 23px;
    color: white
`;

export const InputSearch = styled.input`
    background: #1b1a21;
    border-radius: 10px;
    border: none;
    padding: 7px 19px 7px 15px;
    font-family: var(--font-family);
    outline: none;
    color: whitesmoke;
    flex: 0.3;
    display: flex;
    margin-right: 1rem;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    border: 3px solid #eaedef;
    margin-right: 15px;
    padding: 5px 5px;
    border-radius: 10px;
    box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const SearchInput = styled.input`
    width: 100%;
    padding-left: 5px;
    outline: none;
`;

export const OptionWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const WalletAddress = styled.div`
    border-radius: 15px;
    padding: 2px 10px;
    font-size: 17px;
    margin-bottom: 8px;
    width: 110px;
    color: white;
    text-align: center;
    background-image: linear-gradient(
        to right,
        #ff3bff 0%,
        #ecbfbf 20%,
        #ff3bff 50%,
        #5c24ff 80%,
        #d94fd5
    );
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    flex: 1;
    list-style-type: none;
    margin-top: 10px;
`;

export const MenuItem = styled.li`
    font-size: 17px;
    margin-right: 35px;
    cursor: pointer;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
`;

export const Option = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
`;

export const Balance = styled.div`
    display: flex;
    align-items: center;
    border: 3px solid black;
    border-radius: 20px;
    padding: 2px 10px;
    margin-bottom: 8px;
`;

export const BalanceNumber = styled.div`
    font-size: 17px;
    margin-right: 10px;
`;

export const IcpLogo = styled.img`
    height: 30px;
`;

export const OptionItem = styled.div`
    margin-right: 35px;
    cursor: pointer;
    
    .connect-button {
        padding: 7px 13px;
        font-size: 14px;
        background-image: linear-gradient(
            to right,
            #ff3bff 0%,
            #ecbfbf 20%,
            #ff3bff 50%,
            #5c24ff 80%,
            #d94fd5
        );
        color: white;
    }

`;

export const ConnectBtnSt = styled.div`
    height: 30px;
    .connect-button {
        padding: 7px 13px;
        font-size: 14px;
        color: white;
    }
    color: white

`;




