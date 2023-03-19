const Label = ({label,show}) => {
    return<>
        <section>{ show ? <>{label}</>: 'No hay texto, o esta oculto'}</section>
    </>
};

export default Label;