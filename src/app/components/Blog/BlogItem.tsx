import Image from "next/image";
import Link from "next/link";

interface Props {
    id: number;
    title: string;
    subtitle: string;
    content:string;
    image:string;
}

export default function BlogItem(props:any){
    return (
        <div className="col-lg-4 m-15px-tb">
            <div className="blog-grid">
                <div className="blog-grid-img">
                    <Link href="#">
                        <Image src="/static/images/blog/blog-1.jpg" 
                        width="350" height="263" title="" alt="blog image"/>
                    </Link>
                </div>
                <div className="blog-gird-info">
                    <div className="b-meta">
                        <span className="date">02 Mar</span>
                        <span className="meta">Design</span>
                    </div>
                    <h5><a href="@/components/Blog/BLog#">Make your Marketing website</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    {/* <div className="btn-grid">
                        <Link className="m-btn-link" href="#">Read More</Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
