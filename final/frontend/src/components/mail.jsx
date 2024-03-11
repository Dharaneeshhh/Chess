import React from 'react';
import { AutoComplete } from 'rsuite';

const suffixes = ['@gmail.com', '@yahoo.com', '@hotmail.com', '@skcet.ac.in'];
const Mail = () => {
        const [data, setData] = React.useState([]);

        const handleChange = value => {
          const at = value.match(/@[\S]*/);
          const nextData = at
            ? suffixes
                .filter(item => item.indexOf(at[0]) >= 0)
                .map(item => {
                    return `${value}${item.replace(at[0], '')}`;
                })
            : suffixes.map(item => `${value}${item}`);
      
          setData(nextData);
        };
      
        return (
          <AutoComplete data={data} placeholder="Email" onChange={handleChange} style={{ width: "500px" }} />
        );
    
};

export default Mail;