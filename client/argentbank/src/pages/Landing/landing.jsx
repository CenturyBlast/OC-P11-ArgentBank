import chatIcon from '../../data/icon-chat.webp';
import moneyIcon from '../../data/icon-money.webp';
import securityIcon from '../../data/icon-security.webp';
import Hero from '../../components/Hero/hero';

export default function Landing() {
    return (
        <main>
            <Hero />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <div className="feature_item">
                    <img
                        src={chatIcon}
                        alt="Chat Icon"
                        className="feature_icon"
                    />
                    <h3 className="feature_item-title">You are our #1 priority</h3>
                    <p>
                        Need to talk to a representative? You can get in touch through our
                        24/7 chat or through a phone call in less than 5 minutes.
                    </p>
                </div>
                <div className="feature_item">
                    <img
                        src={moneyIcon}
                        alt="Banknote Icon"
                        className="feature_icon"
                    />
                    <h3 className="feature_item-title">More savings means higher rates</h3>
                    <p>
                        The more you save with us, the higher your interest rate will be!
                    </p>
                </div>
                <div className="feature_item">
                    <img
                        src={securityIcon}
                        alt="Shield Icon"
                        className="feature_icon"
                    />
                    <h3 className="feature_item-title">Security you can trust</h3>
                    <p>
                        We use top of the line encryption to make sure your data and money
                        is always safe.
                    </p>
                </div>
            </section>
        </main>
    );
}