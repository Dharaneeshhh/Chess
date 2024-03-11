import React from 'react';
import PropTypes from 'prop-types';

const Textfield = ({ type, name }) => {
    return (
        <div>
            <input type={type} name={name} />
        </div>
    );
};

Textfields.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Textfield;











// import { Input } from "@material-tailwind/react";
 
// export function InputValidations() {
//   return (
//     <div className="flex w-72 flex-col items-end gap-6">
//       <Input label="Input Error" error />
//       <Input label="Input Success" success />
//     </div>
//   );
// }
