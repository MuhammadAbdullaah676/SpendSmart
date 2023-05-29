
import React,{useContext} from 'react';


const Budget = () => {
	const {budget}=useContext();
	return (
		<div className='alert alert-secondary'>
			Budget: RS {budget}
		</div>
	);
};

export default Budget;