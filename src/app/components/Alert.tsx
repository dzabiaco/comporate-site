
export default function Alert(props){
    return (
        <div className={`alert ${props.type} alert-dismissible fade show d-flex align-items-center w-100`} role="alert">
                {/*alert-success alert-danger */}
                {/*<strong>Well done! </strong> Your message has been successfully sent.*/}
                <strong>{props.title} </strong> {props.text}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    );
}