import { useTranslations } from "next-intl";

export default function HomeSection(){
    const t = useTranslations("Home");
    return (
        <header id="home" className="header" style={{ backgroundImage: 'linear-gradient(150deg, #fdfbfb 0%, #eee 100%)' }}>
      <div className="container">
        <div className="row align-items-center h-100">

          <div className="col-lg-5">
            <h1 className="display-4"><strong>Comporate</strong>;<br />{t('header')}</h1>
            <p className="lead mt-5">{t('subHeader')}</p>

            <hr className="w-10 ml-0 my-7" />

            <p className="gap-xy">
              <a className="btn btn-lg btn-round btn-primary mw-200"
               href="#section-pricing">
                {t('getStartedBtn')}
                </a>
              <a className="btn btn-lg btn-round btn-outline-primary mw-200"
               href="#section-features">
                {t('featuresBtn')}
                </a>
            </p>
          </div>

          <div className="col-lg-6 ml-auto">
            <div className="video-wrapper ratio-16x9 rounded shadow-6 mt-8 mt-lg-0">
              <div className="poster" style={{ backgroundImage: 'url(./static/assets/img/preview/shot-1.png)' }}></div>
              {/* <button className="btn btn-circle btn-lg btn-info"><i className="fa fa-play"></i></button> */}
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/M5S_JBRjd1s?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe> */}
            </div>
          </div>

        </div>
      </div>
    </header>
    );
}