
const features = [
    {
        title: "Flexible installment payments",
        description:
            "Split any purchase into scheduled payments with a clear breakdown — no hidden charges, no surprises.",
    },
    {
        title: "Thousands of partner stores",
        description:
            "Shop from a growing network of trusted brands and retailers across Bangladesh, online and in-store.",
    },
    {
        title: "Total control in your hands",
        description:
            "Track your purchases, upcoming due dates, and spending limit — all from one clear, easy-to-use app.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="section-spacing">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 relative"
                        >
                            {/* Icon */}
                            <div className="mb-4">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.36335 33.2554C8.41877 33.2554 7.646 32.4671 7.646 31.5038C7.646 30.5403 8.41877 29.7518 9.36335 29.7518H11.5958C12.5404 29.7518 13.3132 30.5403 13.3132 31.5037C13.3132 32.4668 12.5403 33.2554 11.5958 33.2554H9.36335ZM35.5442 14.9333C33.9855 14.9333 32.4924 15.2177 31.1106 15.7375H18.3095C17.365 15.7375 16.5921 16.5258 16.5921 17.4892C16.5921 18.4526 17.3653 19.2409 18.3095 19.2409H21.6144C22.558 19.2409 23.3317 20.0291 23.3317 20.9927C23.3317 21.9561 22.5589 22.7447 21.6144 22.7447H10.6307C9.68612 22.7447 8.91335 23.533 8.91335 24.4962C8.91335 25.4597 9.68612 26.248 10.6307 26.248H17.9977C18.9423 26.248 19.7151 27.0363 19.7151 27.9999C19.7151 28.9634 18.9423 29.7517 17.9977 29.7517H16.7298C15.7855 29.7517 15.0124 30.54 15.0124 31.5035C15.0124 32.4669 15.7853 33.2552 16.7298 33.2552H22.8962C23.8399 33.2552 24.6136 34.0436 24.6136 35.007C24.6136 35.9704 23.8406 36.759 22.8962 36.759H19.8186C18.8741 36.759 18.1012 37.5473 18.1012 38.5105C18.1012 39.4741 18.8748 40.2625 19.8186 40.2625H31.1105C32.4922 40.7823 33.9853 41.0667 35.544 41.0667C42.6185 41.0667 48.3537 35.2165 48.3537 28C48.3538 20.7835 42.6186 14.9333 35.5442 14.9333ZM32.5782 24.9745C32.9327 24.6129 33.5128 24.6129 33.8673 24.9745L35.5022 26.6422L39.6099 21.8889C39.9415 21.5052 40.5204 21.4681 40.8965 21.8063C41.2726 22.1444 41.3091 22.7351 40.9776 23.1188L36.5506 28.2414C36.4436 28.7074 36.0336 29.0545 35.5442 29.0545C35.0774 29.0545 34.6829 28.7388 34.5546 28.3054L32.5782 26.2893C32.2237 25.9279 32.2237 25.3361 32.5782 24.9745ZM25.383 27.2541C25.7408 22.1096 29.7694 18.0002 34.8128 17.6353V19.7432H36.2754V17.6353C41.3187 18.0003 45.3475 22.1095 45.7054 27.254H43.6383V28.7459H45.705C45.3474 33.8906 41.3188 38.0002 36.2755 38.3652V36.2567H34.813V38.3646C29.7697 37.9997 25.741 33.8904 25.3832 28.7459H27.45V27.254L25.383 27.2541Z" fill="#F16522" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M35.5022 26.6422L33.8673 24.9745C33.5128 24.6129 32.9327 24.6129 32.5782 24.9745C32.2237 25.3361 32.2237 25.9279 32.5782 26.2893L34.5546 28.3054C34.6829 28.7388 35.0774 29.0545 35.5442 29.0545C36.0336 29.0545 36.4436 28.7074 36.5506 28.2414L40.9776 23.1188C41.3091 22.7351 41.2726 22.1444 40.8965 21.8063C40.5204 21.4681 39.9415 21.5052 39.6099 21.8889L35.5022 26.6422Z" fill="#05182C" />
                                </svg>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold leading-[1.3] text-neutral-900">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base leading-6 text-neutral-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;