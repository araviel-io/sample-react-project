import React from 'react';
import  Button from '../components/common/Button'
import Container from '../components/common/Container'

function Alert() {
    alert("click from App.js")
   }

function CreateWalletPage(props) {
    return (
        <Container
        containerTitle='Create new Wallet'
        containerContent='hungry sign invite enlist taxi decade whisper life animal provide swallow angle issue tool almost purchase cruise palace bulk soft elite castle jar valley'
        containerBottom={<Button handleClick={Alert} btnText="Continue" />}>
      </Container>
    );
   }

export default CreateWalletPage;