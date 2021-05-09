import React, {useState, useEffect, useRef} from 'react';
import {Accordion, Card} from 'react-bootstrap';
import Aos from 'aos';
import axios from 'axios';
import Footer from '../Layout/Footer';
import Navbar from '../Layout/Navbar';

import {CustomToggle, CustomToggle2} from '../components/Toggle';

const FAQ = () => {
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategorieLoading] = useState(false);
  const [categoryError, setCategoryError] = useState({});

  useEffect(() => {
    Aos.init({duration: 2000});

    setCategorieLoading(true);

    const getFaqData = async () => {
      try {
        const res = await axios.get(
          'https://parapay.herokuapp.com/api/v1/faq/categories'
        );

        setCategories(res.data.categories);

        setCategorieLoading(false);
      } catch (error) {
        setCategoryError(error);
      }
    };

    getFaqData();
  }, []);

  const [questions, setQuestions] = useState([]);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [questionError, setQuestionError] = useState({});

  const getFaqQuestions = async (key) => {
    setQuestionLoading(true);

    try {
      const res = await axios.get(
        `https://parapay.herokuapp.com/api/v1/faq/${key}/questions`
      );

      setQuestions(res.data.faqs);

      setQuestionLoading(false);
    } catch (error) {
      const msg = error.response.data.error;

      setQuestionError(msg);
    }
  };

  return (
    <div>
      <Navbar />
      <section className='faq'>
        <div className='container text-center'>
          <div className='heading-and-image'>
            <img src='./img/H1image.svg' alt='' className='img-fluid' />
            <h1>Frequently Asked Questions</h1>
          </div>

          <div className='input-group'>
            <input type='text' className='form-control' />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button'>
                Search
              </button>
            </div>
          </div>

          <h2>Let's Talk</h2>
        </div>
      </section>

      <section className='questions'>
        <div className='container'>
          {categoryLoading ? (
            <div className='container text-center'>
              <img
                src='./img/loader/loader.gif'
                alt=''
                className='img-fluid outer-image'
              />
            </div>
          ) : (
            categories.map((category) => (
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Card.Header
                    onClick={(e) => getFaqQuestions(category._id)}
                    className='accordian-root-card-header'
                  >
                    <CustomToggle eventKey={category._id}>
                      <div className='title-grid'>
                        <div>{category.title}</div>
                        <div className='icon'>
                          <i class='fas fa-chevron-down'></i>
                        </div>
                      </div>
                    </CustomToggle>
                  </Card.Header>

                  {questionLoading ? (
                    <Accordion.Collapse eventKey={category._id}>
                      <Card.Body>
                        <Accordion defaultActiveKey='0'>
                          <Card>
                            <Card.Header>
                              <CustomToggle2 eventKey='1'>
                                <div className='container text-center'>
                                  <img
                                    src='./img/loader/loader.gif'
                                    alt=''
                                    className='img-fluid inner-image'
                                  />
                                </div>
                              </CustomToggle2>
                            </Card.Header>
                            <Accordion.Collapse eventKey='1'>
                              <Card.Body></Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Card.Body>
                    </Accordion.Collapse>
                  ) : (
                    questions.map(($question) => (
                      <Accordion.Collapse eventKey={category._id}>
                        <Card.Body>
                          <Accordion defaultActiveKey='0'>
                            <Card>
                              <Card.Header>
                                <CustomToggle2 eventKey={$question._id}>
                                  <div className='title-grid'>
                                    <div>{$question.question}</div>
                                    <div className='icon'>
                                      <i class='fas fa-chevron-down'></i>
                                    </div>
                                  </div>
                                </CustomToggle2>
                              </Card.Header>
                              <Accordion.Collapse eventKey={$question._id}>
                                <Card.Body>{$question.answer}</Card.Body>
                              </Accordion.Collapse>
                            </Card>
                          </Accordion>
                        </Card.Body>
                      </Accordion.Collapse>
                    ))
                  )}
                </Card>
              </Accordion>
            ))
          )}
        </div>
      </section>

      <section className='still-have'>
        <div className='container'>
          <h2>Still have any question?</h2>
          <p className='heading-paragraph'>
            If you still have any question, please contact our customer care
            support, we are always here to assist you.
          </p>

          <div className='still-have-cards' data-aos='fade-up'>
            <div className='mycard-secondary'>
              <img src='./img/icons/callicon.svg' alt='' />
              <h5>Call</h5>
              <p>
                Our customer care agents are always available to recieve your
                calls from Monday to Friday, 8am - 6pm
              </p>
            </div>
            <div className='mycard-primary' data-aos='fade-up'>
              <img src='./img/icons/chaticon.svg' alt='' />
              <h5>Chat</h5>
              <p>
                Our customer care agents are always available to chat with you
                live 24hrs, everyday
              </p>
            </div>
            <div className='mycard-secondary' data-aos='fade-up'>
              <img src='./img/icons/messageicon.svg' alt='' />
              <h5>Message</h5>
              <p>
                Send us a message on any of our platforms and we’ll get back to
                you as soon as possible
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
