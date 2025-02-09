import { useTranslations } from "next-intl";

export default function Subscribe(){
  const t = useTranslations("newsSubscription");
    return (
        <section className="section py-10" style={{ backgroundImage: 'url(../../static/assets/img/bg/4.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-xl-6 mx-auto">
            <div className="section-dialog bg-primary text-white shadow-6">
              <h4>{t('header')}</h4>
              <br /><br />
              <p className="text-right small pr-5">{t('subscribeText')}</p>
              <form className="input-glass input-round">
                <div className="input-group">
                  <input type="text" name="EMAIL" className="form-control"
                   placeholder={t('emailPlaceholder')}/>
                  <span className="input-group-append">
                    <button className="btn btn-glass btn-light" type="button">{t('buttonText')}
                      {/* <i class="ti-arrow-right fs-9 ml-2"></i> */}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}