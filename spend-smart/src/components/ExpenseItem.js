import React from 'react';


const ExpenseItem = (props) => {
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<div className='badge badge-primary badge-pill mr-3'>
					RS{props.cost}
				</div>
				
			</div>
		</li>
	);
};

export default ExpenseItem;