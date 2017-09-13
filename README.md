### A Simple Contact Form in React and CSS Grid

Utilize React to create a simple sample company Contact Form. <br>
Implemented CSS Grid and got another shot with [styled-components](https://github.com/styled-components/styled-components) <br>

Note: This is a static form. The purposes were to play with CSS Grid and styled-components with React. 

Live Demo: [react-contact-forms.surge.sh](https://react-contact-forms.surge.sh)

File Structure Points: 
- At the root `App.js` returns 1 component: `<Main />`
- `<Main />` holds all relevant app components
- The directory `components` contains small styled components. 
- `views/Form` houses 2 components. Each components takes a somewhat different approach to styling their sub components. This was intentional to get a feel for which method is more intuitive. 

Styled-Component Techniques: 
- `components/Title.js` uses the "styled method" as seen in [styling any components](https://www.styled-components.com/docs/basics#styling-any-components) of the styled-components documentation. 
- `components/Container.js` & `views/Form/ContactForm.js`'s `<WrapperGrid>` used the [Adapting based on props](https://www.styled-components.com/docs/basics#adapting-based-on-props) of the styled-components documentation. 
- Media queries were also used 


![Imgur](https://i.imgur.com/J7YOgsg.png)
![Imgur](https://i.imgur.com/5Ji2zGQ.png)