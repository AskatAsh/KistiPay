import AppStore from "@/components/icons/AppStore";
import GooglePlay from "@/components/icons/GooglePlay";

const PersonalHeroSection = () => {
    return (
        <section className="bg-[linear-gradient(270deg,rgba(186,89,77,0.08)_0%,rgba(33,190,201,0.2)_100%)] pt-25 flex items-center overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row lg:items-center gap-10">

                    {/* Hero Content */}
                    <div className="py-10 lg:py-28 max-w-135 w-full">
                        <h1 className="text-[2.5rem] md:text-[3.75rem] lg:text-[5rem] font-bold leading-[1.1] text-neutral-900 max-w-200 mb-4">
                            Shop now. <br className="hidden lg:block" />
                            Pay later with KistiPay.
                        </h1>

                        <p className="text-base md:text-lg text-neutral-600 leading-7 max-w-[670px] mb-8">
                            Split your purchases into simple installments and manage
                            everything in one place.
                        </p>

                        {/* App Buttons */}
                        <div className="flex items-center gap-4">
                            <AppStore />
                            <GooglePlay />
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="h-[424px] md:h-[624px] w-full self-end flex items-end justify-end bg-size-[auto_424px] md:bg-size-[auto_624px]"
                        style={{
                            backgroundImage: "url('/assets/images/hero-personal.png')",
                            backgroundPosition: "30% 0%",
                            backgroundRepeat: "no-repeat"
                        }}>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PersonalHeroSection;