import { Accordion, Card, Button } from "react-bootstrap";
import data from "../../public/faqs.json";

const AccordionBro = () => {
  return (
    <div className="wrapper">
      <Accordion className="wrapper">
        {data.map((question, i) => {
          return (
            <Card className="cardo">
              <Card.Header className="header">
                <Accordion.Toggle
                  as={Card.Header}
                  variant="link"
                  eventKey={i + 1}
                >
                  {question.question}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={i + 1}>
                <Card.Body>{question.answer}</Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
      <style jsx>{`
        .wrapper {
          width: 440px;
          //   padding: 1em;
          color: blue;
          //   height: 400px;
        }
        .cardo {
          color: blue;
        }
      `}</style>
    </div>
  );
};
export default AccordionBro;
