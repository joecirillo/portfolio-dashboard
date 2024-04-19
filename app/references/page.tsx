import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center text-4xl pt-36 mb-10">
      References
      <div className="relative w-full mt-6 flex flex-col items-center"></div>
      <Link
        href={
          "https://www.vanguard.co.uk/content/dam/intl/europe/documents/en/value-versus-growth-stocks-uk-en-pro.pdf"
        }
        className="text-center m-8"
      >
        <div>Vanguard</div>
      </Link>
      <p className="text-lg ml-36 mr-36">
        Value stocks have been traditionally seen as the gold standard, but
        growth stocks have outperformed value stocks by 7.6%. We would like to
        take a deeper dive into growth oriented portfolios because of this.
      </p>{" "}
      <Link
        href={
          "https://www.wsj.com/articles/growth-stocks-are-trumping-value-once-again-212fe9be"
        }
        className="text-center m-8 ml-36 mr-36"
      >
        <div>Wall Street Journal</div>
      </Link>
      <p className="text-lg">
        More evidence of growth stocks beating value stocks. We would like to
        see if the trend reverses.
      </p>
    </div>
  );
};

export default page;
