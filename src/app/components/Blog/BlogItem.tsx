import Image from "next/image";

export default function BlogItem(){
    return (
        <div className="col-lg-4 m-15px-tb">
            <div className="blog-grid">
                <div className="blog-grid-img">
                    <a href="@/components/Blog/BLog#">
                        <Image src="/static/images/blog/blog-1.jpg" width="350" height="263" title="" alt="blog image"/>
                    </a>
                </div>
                <div className="blog-gird-info">
                    <div className="b-meta">
                        <span className="date">02 Mar</span>
                        <span className="meta">Design</span>
                    </div>
                    <h5><a href="@/components/Blog/BLog#">Make your Marketing website</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="btn-grid">
                        <a className="m-btn-link" href="@/components/Blog/BLog#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
