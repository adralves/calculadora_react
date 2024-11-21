import Button from "./components/Button";
import Input from "./components/Input";
import { Container,Content, Row, Column} from "./styles";
import { useState } from "react";


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleEquals = () => {
    debugger
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0'){

      switch(operation){
        case '+':
          handleSum();
        case '-':
          handleSub();
        case '*':
          handleMult();
        case '/':
          handleDiv();
      }
    }
  }

  const handleDiv = () => {
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setOperation('/');
      handleOnClear();
    } else {
      let total = Number(firstNumber) / Number(currentNumber) ;
      setCurrentNumber(String(total));
    }
  }

  const handleSum = () => {
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setOperation('+');
      handleOnClear();
    } else {
      let total = Number(firstNumber) + Number(currentNumber) ;
      setCurrentNumber(String(total));
    }
  }

  const handleSub = () => {
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setOperation('-');
      handleOnClear();
    } else {
      let total = Number(firstNumber) - Number(currentNumber) ;
      setCurrentNumber(String(total));
    }
  }

  const handleMult = () => {
    console.log("01🚀 ~ handleMult ~ firstNumber:", firstNumber)
    if(firstNumber ==='0'){
      setFirstNumber(currentNumber);
      setOperation('*');
      handleOnClear();
    } else {
      console.log("02 🚀 ~ handleMult ~ currentNumber:", currentNumber)
      console.log("03 🚀 ~ handleMult ~ firstNumber:", firstNumber)
      let total = Number(firstNumber) * Number(currentNumber) ;
      console.log("04🚀 ~ handleMult ~ total:", total)
      setCurrentNumber(String(total));
    }
  }  

  const handleOnClear = () => {
    setCurrentNumber('0');
//    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev ==='0' ? '' : prev}${num}`)
  }

  return (
         <Container>
          <Content>
            <Input value={currentNumber} />
            <Row>
              <Button label='C' onClick={handleOnClear}/>
              <Button label='/'onClick={handleDiv}/>
              <Button label='0' onClick={()=> handleAddNumber('0')}/>
              <Button label='X' onClick={handleMult}/>
            </Row>
            <Row>
              <Button label='7' onClick={() => handleAddNumber('7')}/>
              <Button label='8' onClick={() => handleAddNumber('8')}/> 
              <Button label='9' onClick={() => handleAddNumber('9')}/>
              <Button label='-' onClick={handleSub}/>
            </Row>
            <Row>
              <Button label='4' onClick={() => handleAddNumber('4')}/>
              <Button label='5' onClick={() => handleAddNumber('5')}/>
              <Button label='6' onClick={() => handleAddNumber('6')}/>
              <Button label='+' onClick={handleSum}/>
            </Row>
            <Row>
              <Button label='1' onClick={() => handleAddNumber('1')}/>
              <Button label='2' onClick={() => handleAddNumber('2')}/>
              <Button label='3' onClick={() => handleAddNumber('3')}/>
              <Button label="=" onClick={handleEquals}/>
            </Row>
          </Content>
        </Container>
  );
}

export default App;
