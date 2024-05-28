
const Trigger = ({label, onClick}: {label: String, onClick: () => void}) => {
    return (<div className="trigger" tabIndex={0} onClick={onClick}>
        <span className="selection">{label}</span>
    </div>)
}

export default Trigger;