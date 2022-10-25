import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ImSearch } from 'react-icons/im';
import {
  Form,
  Wrapper,
  Input,
  Btn,
  Title,
  Blue,
  Red,
  Yellow,
  Green,
} from 'components/Searchbar/Searchbar.styled.jsx';

export const Searchbar = ({ searchValue }) => {
  const [imgName, setImgName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // при сабміті форми викл метод з Арр і передаємо йому значення стейту imgName//

    searchValue(imgName);
    setImgName('');
  };

  const handleChangeImg = e => {
    setImgName(e.currentTarget.value.toLowerCase());
  };

  return (
    <header>
      <Form onSubmit={handleSubmit}>
        <a
          href="https://anastasiiakim1996.github.io/goit-react-hw-03-image-finder/"
          title=""
        >
          <Title>
            Image <Blue>S</Blue>
            <Red>e</Red>
            <Yellow>a</Yellow>
            <Blue>r</Blue>
            <Green>c</Green>
            <Red>h</Red>
          </Title>
        </a>

        <Wrapper>
          <Input
            type="text"
            id={nanoid()}
            placeholder="Search images and photos"
            value={imgName} // записуємо значення до стейту //
            onChange={handleChangeImg}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Btn type="submit" className={CSS.button}>
            <ImSearch />
          </Btn>
        </Wrapper>
      </Form>
    </header>
  );
};

// export class Searchbar extends Component {
//   state = {
//     imgName: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     // при сабміті форми викл метод з Арр і передаємо йому значення стейту imgName//

//     this.props.searchValue(this.state.imgName);
//     this.setState({ imgName: '' });
//   };

//   handleChangeImg = e => {
//     this.setState({ imgName: e.currentTarget.value.toLowerCase() });
//   };

//   render() {
//     return (
//       <header>
//         <Form onSubmit={this.handleSubmit}>
//           <a
//             href="https://anastasiiakim1996.github.io/goit-react-hw-03-image-finder/"
//             title=""
//           >
//             <Title>
//               Image <Blue>S</Blue>
//               <Red>e</Red>
//               <Yellow>a</Yellow>
//               <Blue>r</Blue>
//               <Green>c</Green>
//               <Red>h</Red>
//             </Title>
//           </a>

//           <Wrapper>
//             <Input
//               type="text"
//               id={nanoid()}
//               placeholder="Search images and photos"
//               value={this.state.imgName} // записуємо значення до стейту //
//               onChange={this.handleChangeImg}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//             <Btn type="submit" className={CSS.button}>
//               <ImSearch />
//             </Btn>
//           </Wrapper>
//         </Form>
//       </header>
//     );
//   }
// }

Searchbar.propTypes = {
  searchValue: PropTypes.func.isRequired,
};
