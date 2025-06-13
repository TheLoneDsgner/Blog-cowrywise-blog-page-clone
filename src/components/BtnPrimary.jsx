const BtnPrimary = ({text, iconRight, iconLeft, iconOnly}) => {
    return ( 
        <>
        <button className="btn-primary-default">
            {iconLeft} {text} {iconRight} {iconOnly}  </button>
        </>
     );
}
 
export default BtnPrimary;