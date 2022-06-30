import React from 'react';

const Greetings = (props) => {
  const language = (lang) => {
    switch (lang) {
      case 'de':
        return 'Hallo';

      case 'es':
        return 'Hola';

      case 'fr':
        return 'Bonjour';

      default:
        return 'Hello';
    }
  };

  return (
    <div className="greeting">
      <p>
        {language(props.lang)}
        {props.children}
      </p>
    </div>
  );
};

export default Greetings;
