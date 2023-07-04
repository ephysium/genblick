export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded dark:bg-primary border-primary dark:border-primary text-primary shadow-sm focus:ring-primary dark:focus:ring-primary dark:focus:ring-primary ' +
                className
            }
        />
    );
}
