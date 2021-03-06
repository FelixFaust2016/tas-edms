import moment from 'moment';

//get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = endDate ?  endDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            // console.log("running date")
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if (sortBy === "amount") {
            // console.log("running amount")
            return a.amount < b.amount ? 1 : -1
        }
    })
}
