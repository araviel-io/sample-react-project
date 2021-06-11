import React from 'react';
import  Button from '../components/common/Button'
import Container from '../components/common/Container'

function Alert() {
    alert("click from App.js")
   }

function RestoreWalletPage(props) {
    return (
        <Container
        containerTitle='Restore wallet'
        containerContent='Paste mnemonic'
        containerBottom={<Button handleClick={Alert} btnText="Restore" />}>
      </Container>
    );
   }

export default RestoreWalletPage;