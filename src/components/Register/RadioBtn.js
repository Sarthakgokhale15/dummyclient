import Form from 'react-bootstrap/Form';

function RadioBtn(props) {
  return (
    <Form.Group>
        <div key={`default-${props.type}`} className="mb-3">
          <Form.Check 
            name={props.name}
            type={props.type}
            id={`default-${props.type}`}
            label={`${props.label}`}
            inline
          />
        </div>
    
    </Form.Group>
  );
}

export default RadioBtn;