import React from 'react';

import { InputPicker } from 'rsuite';

const data = [
  'Eugenia',
  'Bryan',
  'Linda',
  'Nancy',
  'Lloyd',
  'Alice',
  'Julia',
  'Albert',
  'Louisa',
  'Lester',
  'Lola',
  'Lydia',
  'Hal',
  'Hannah',
  'Harriet',
  'Hattie',
  'Hazel',
  'Hilda',
  'Yogesh',
  'Ajay'
].map(item => ({ label: item, value: item }));
const Picker = () => {
    return (
        <div>
    
    <InputPicker data={data} style={{ width: 224 }} />
  
            
        </div>
    );
};

export default Picker;