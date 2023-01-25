const Badge = (props) => {

    const { amount } = props;

    // Amount < 250 -- green color
    // 250 < Amount < 1000 -- orange color
    // Amount > 1000 -- red color

    const getClassName = (amount) => {
        if (amount < 250) return "badge text-bg-success";
        else if (amount > 1000) return "badge text-bg-danger";
        else return "badge text-bg-warning"
    }

    return (
        <span className={getClassName(amount)}>${amount}</span>
    )
}

export default Badge;