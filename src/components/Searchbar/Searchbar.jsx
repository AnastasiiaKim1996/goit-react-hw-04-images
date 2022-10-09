// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// export class Searchbar extends Component {
//   state = {
//     imgName: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     // при сабміті форми викл метод з Арр і передаємо йому значення стейту imgName//

//     this.props.tags(this.state.imgName);
//     this.setState({ imgName: '' });
//   };

//   handleChangeImg = e => {
//     this.setState({ imgName: e.currentTarget.value.toLowerCase() });
//   };

//   render() {
//     return (
//       <header className={CSS.searchbar}>
//         <form className={CSS.form} onSubmit={this.handleSubmit}>
//           <button type="submit" className={CSS.button}>
//             <span className={CSS.buttonLabel}>Search</span>
//           </button>

//           <input
//             className={CSS.input}
//             type="text"
//             id={nanoid()}
//             placeholder="Search images and photos"
//             value={this.state.imgName} // записуємо значення до стейту //
//             onChange={this.handleChangeImg}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </form>
//       </header>
//     );
//   }
// }
