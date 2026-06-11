const Loader = ({ text = 'Cargando...' }) => (
    <div className="loader-container">
        <div className="spinner"></div>
        <p>{text}</p>
    </div>
)

export default Loader