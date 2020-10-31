import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import Container from '../components/Container';
import Hero from '../components/project/Hero';
import image from '../images/me.jpg';
const AboutPageEl = styled.div`
height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
width: 50%;
margin-left: 25%;
p {
  font-size: 20px;
}
.hero {
  height: auto;;
  margin-bottom: 50px;
}

`;

const AboutPage = () => {
  const pageTitle = (
    <h1>
      <span>About</span>
      <span>Me</span>
    </h1>
  );
  return (
    <>

      <AboutPageEl>
        <Hero title={pageTitle} />
        <Container>
          <div className="">
            <p>Habitasse, curabitur omnis convallis scelerisque aliqua possimus, totam varius maecenas pretium iusto. Cum quibusdam ea pariatur faucibus habitant animi? Sint voluptates iaculis, lectus rerum esse varius cum iaculis! Totam proident? Consequuntur ipsa eiusmod quo metus praesent ipsam minim morbi autem, nostrum est voluptatibus accusamus, consequatur tellus arcu mollit, cillum pede excepteur aliquid, expedita lorem ultrices venenatis facilisi potenti, eligendi quam cursus possimus maxime nesciunt aliqua inceptos. Laborum aliquip mollitia qui. Malesuada porttitor molestie delectus varius. Pellentesque facilisis voluptate nisl eu, id cumque in pellentesque. Primis nostrud bibendum aute luctus sodales, velit ea ultrices euismod! Aliquid congue, nulla arcu quo facilisi.</p>
          </div>

        </Container>
      </AboutPageEl>
    </>
  )
}

export default AboutPage;