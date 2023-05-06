import Script from "next/script";

const measurementId = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />

      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
