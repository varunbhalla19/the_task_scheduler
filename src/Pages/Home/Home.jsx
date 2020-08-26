import React from "react";

import styled from "styled-components";

const Home = styled.div`
  flex-grow: 1;
`;

const Today = styled.div`
    height : 550px ;
    // width : 800px ;
    margin : 2rem  ;
    background : snow ;
    border-radius : 3rem
`

export default () => <Home>
    <Today></Today>
</Home>;
