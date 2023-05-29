
import ExpenseItem from './ExpenseItem';


const ExpenseList = () => {
    const expenses = [
		{ id: 12, name: 'shopping', cost: 1000 },
		{ id: 13, name: 'holiday', cost: 900 },
		{ id: 14, name: 'car service', cost: 100 },
		{ id :15, name:'SkinCare',cost:1000 }
	];

    return (
		<ul className='list-group'>
			{expenses.map((expense,index) => (
				<ExpenseItem  key={index} id={expense.id} name={expense.name} cost={expense.cost} />
			))}
		</ul>
    )
}

export default ExpenseList




