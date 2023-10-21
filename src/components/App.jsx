import { Container } from './App.styled';
import { Header } from './Header/Header';
import { Field } from './Field/Field';
import Footer from './Footer/Footer';

export const App = () => {
  // const { setTimeGeme } = useApp();
  // const isFirstRender = useRef(true);

  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     console.log('time');

  //     isFirstRender.current = false;
  //     return;
  //   }
  // }, []);

  return (
    <Container>
      <Header />
      <Field />
      <Footer />
    </Container>
  );
};
