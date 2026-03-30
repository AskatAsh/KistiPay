import AppStore from "@/components/icons/AppStore";
import GooglePlay from "@/components/icons/GooglePlay";
import Image from "next/image";

// ─── Component ────────────────────────────────────────────────────────────────

export default function AppDownloadSection() {
    return (
        <section className="section-spacing">
            <div className="container">

                {/* Download Card */}
                <div
                    className="rounded-3xl px-8 py-16 sm:p-16 overflow-hidden bg-[#FCEFCF] bg-no-repeat bg-[url('/assets/images/download-app-bg-01.svg'),url('/assets/images/download-app-bg-02.svg'),url('/assets/images/download-app-bg-03.svg')] bg-position-[-90%_100%,50%_48%,50%_94%] md:bg-position-[75%_100%,89%_10%,89%_90%]"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                        {/* ── Left: Text + App Buttons ── */}
                        <div className="flex flex-col justify-center w-full lg:w-auto text-center lg:text-left">

                            {/* Heading */}
                            <h2
                                className="font-serif font-semibold text-neutral-05 leading-[1.1] mb-4
                  text-[1.875rem] sm:text-[3rem]"
                            >
                                Download KistiPay and start shopping smarter
                            </h2>

                            {/* Subtitle */}
                            <p className="font-sans font-normal text-neutral-03 text-lg sm:text-xl leading-relaxed mb-6">
                                Clarity, flexibility, and control — all in one app.
                            </p>

                            {/* App Store Buttons */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <AppStore />
                                <GooglePlay />
                            </div>
                        </div>

                        {/* ── Right: QR Code Card ── */}
                        <div className="shrink-0 mx-auto lg:mx-0">
                            <div
                                className="flex flex-col gap-4 bg-white rounded-3xl p-4"
                                style={{ width: "236px", height: "300px" }}
                            >
                                {/* QR Code */}
                                <div
                                    className="rounded-lg p-3 flex-1"
                                    style={{ border: "1px solid #F9C232" }}
                                >
                                    <Image
                                        src="/assets/icons/qr-code.svg"
                                        alt="QR Code to download KistiPay app"
                                        width={196}
                                        height={196}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* QR Label */}
                                <p className="font-sans text-base text-neutral-04 text-center leading-snug">
                                    Scan to{" "}
                                    <strong className="font-semibold">download</strong> the{" "}
                                    <strong className="font-semibold">KistiPay</strong> app
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}