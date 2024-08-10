import './style.css';
import { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';

function All() {
    const [mydata, setData] = useState([]);

    const apiGet = () => {
        fetch("https://inshortsapi.vercel.app/news?category=all")
            .then((response) => response.json())
            .then((json) => {
                setData(json.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        apiGet();
        const interval = setInterval(apiGet, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        
        <Container fluid className='container'>
            {mydata.map((value, index) => (
                <Card key={index} className='custom-card'>
                    <div className='card-img-wrapper'>
                        <Card.Img variant="top" src={value.imageUrl} />
                    </div>
                    <Card.Body className='card-body'>
                        <Card.Title>{value.title}</Card.Title>
                        <Card.Text>{value.content}</Card.Text>
                        <Card.Link href={value.readMoreUrl} target='_blank' className='link'>Read more...</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
    
}

export default All;
