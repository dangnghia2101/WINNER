import styled from "styled-components"

export const Container = styled.div`
    padding: 0px 50px 0px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000000
`

export const ContainerImage = styled.div`
    padding: 50px 50px 5px 50px;
    flex-directtion: column;
    align-items: center;
    justify-content: center;
    display: flex;

`


export const TopWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const TopWrapperLeft = styled.div`
    align-items: center;
    justify-content: center
`

export const Logo = styled.img`
    width: 90px;
    height: 90px;
    margin: 20px;
    object-fit: cover;
    text-align: center;
    border-radius: 70px;
`

export const Name = styled.div`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: white

`
export const Text = styled.div`
    font-size: 12px;
    text-align: center;
    color: white;
`

export const TopWrapperRight = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-left: 7px;
    &:hover {
        background-color: black;
        color: white;
        transition: all 0.1s ease;
        cursor: pointer;
    }
`

export const BottomWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 30px;
`

export const BottomWrapperLeft = styled.div`
    justify-self: flex-start;
    font-size: 16px;
`

export const BottomWrapperCenter = styled.div`
    margin: 0px 20px;
    border-top: 2px solid black;
    width: 1040px;
`
export const BottomWrapperRight = styled.div`
    justify-self: flex-end;
    font-size: 14px;
`

export const BottomWrapperRightTop = styled.div`
    font-weight: bold;
`

export const LineFooter = styled.div`   
    border-top: 10px solid;
    border-image-slice: 1;

    width: 100%;
    border-image-source: linear-gradient(
		to right,
		#ff3bff,
		#ecbfbf,
		#ff3bff,    
		#5c24ff,
		#d94fd5
	);


`

