const BtnSecondary = ({text, iconRight, iconLeft, iconOnly}) => {
    return ( 
        <>
        <button className="btn-secondary-default">{iconLeft} {text} {iconRight} {iconOnly}  </button>
        </>
     );
}
 
export default BtnSecondary;