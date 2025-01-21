

export default function Benefits(){
    return (
        <section className="section bg-gray">
      <div className="container">
        <div className="row gap-y">

          <div className="col-lg-4">
            <div className="card card-body border text-center">
              <p className="my-5">
                {/* <i class="icon-layers lead-8 text-lighter"></i> */}
                <i className="fa-solid fa-layer-group lead-8 text-lighter"></i>
              </p>
              <h5>Dashboard</h5>
              <p>Simplify time-tracking with our just-a-few-clicks time management feature, available on web and mobile.</p>
              {/* <p><a className="small-3 fw-600" href="#">Read more 
                <i className="fa fa-angle-right small-5 pl-1"></i>
              </a></p> */}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-body border text-center">
              <p className="my-5">
                {/* <i class="icon-chat lead-8 text-lighter"></i> */}
                <i className="fa-regular fa-envelope lead-8 text-lighter"></i>
              </p>
              <h5>Direct Messages</h5>
              <p>Send messages directly to another and any person or to a small group of people for more focused conversations.</p>
              {/* <p><a className="small-3 fw-600" href="#">Read more <i className="fa fa-angle-right small-5 pl-1"></i></a></p> */}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card card-body border text-center">
              <p className="my-5">
                {/* <i class="icon-mic lead-8 text-lighter"></i> */}
                <i className="fas fa-phone lead-8 text-lighter"></i>
              </p>
              <h5>ENGAGE EMPLOYEES</h5>
              <p>From onboarding to work anniversaries, engage employees with Shoutouts, Kudos posts, and Clubs.</p>
              {/* <p><a className="small-3 fw-600" href="#">Read more <i className="fa fa-angle-right small-5 pl-1"></i></a></p> */}
            </div>
          </div>

        </div>
      </div>
    </section>
    );
}