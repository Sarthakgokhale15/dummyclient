import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css'
function BasicExample(props) {
  return (
    <div className='FaqCard'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header  className='faqHeader'><p>{props.data[props.slideNo][0].title1}</p></Accordion.Header>
        <Accordion.Body className='description'>
          {props.data[props.slideNo][0].Description1.split('\n').map(i => {
    				  return <p>{i}</p>
				  })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className='faqHeader'><p>{props.data[props.slideNo][1].title1}</p></Accordion.Header>
        <Accordion.Body className='description'>
          {props.data[props.slideNo][1].Description1.split('\n').map(i => {
                return <p>{i}</p>
            })}
        </Accordion.Body>
      </Accordion.Item>
      {props.slideNo===0?
      <Accordion.Item eventKey="2">
        <Accordion.Header className='faqHeader'><p>{props.data[props.slideNo][2].title1}</p></Accordion.Header>
        <Accordion.Body>
            {/* {props.data[props.slideNo][1].Description1} */}
           <img src='https://ik.imagekit.io/suprkid/Event_Details_1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677841177973'/> 
        </Accordion.Body>
      </Accordion.Item>:<div></div>}
      <Accordion.Item eventKey="3">
        <Accordion.Header className='faqHeader'><p>{props.data[props.slideNo][3].title1}</p></Accordion.Header>
        <Accordion.Body className='description'>
          {props.data[props.slideNo][3].Description1.split('\n').map(i => {
                return <p>{i}</p>
            })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header className='faqHeader'><p>{props.data[props.slideNo][4].title1}</p></Accordion.Header>
        <Accordion.Body className='description'>
          {props.data[props.slideNo][4].Description1.split('\n').map(i => {
                return <p>{i}</p>
            })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header className='faqHeader'><p>{props.data[props.slideNo][5].title1}</p></Accordion.Header>
        <Accordion.Body className='description'>
          {props.data[props.slideNo][5].Description1.split('\n').map(i => {
                return <p>{i}</p>
            })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header className='faqHeader'><p>{props.data[props.slideNo][6].title1}</p></Accordion.Header>
        <Accordion.Body className='description'>
          {props.data[props.slideNo][6].Description1.split('\n').map(i => {
                return <p>{i}</p>;
            })}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header className='faqHeader'><p>{props.data[props.slideNo][7].title1}</p></Accordion.Header>
        <Accordion.Body className='description'>
        {props.data[props.slideNo][7].Description1.split('\n').map(i => {
                return <p>{i}</p>;
            })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default BasicExample;