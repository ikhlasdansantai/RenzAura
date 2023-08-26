import { Link } from "react-router-dom";
import { useState } from "react";

interface BetaMessageProp {
  onClick: (newState: boolean) => void;
}

export default function BetaMessage({ onClick }: BetaMessageProp): JSX.Element {
  const [msgShow, setMsgShow] = useState(false);
  const handleMsgShow = () => {
    setMsgShow(!msgShow);
  };

  const handleStateChange = () => {
    onClick(true);
  };

  return (
    <div id="dropdown-cta" className={`${msgShow ? "hidden" : "block"} p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"`} role="alert">
      <div className="flex items-center mb-3">
        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">Beta</span>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
          data-dismiss-target="#dropdown-cta"
          onClick={handleMsgShow}
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
      <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
        Wesbite ini masih dalam tahap pengembangan, jika ada kritik atau saran, kalian bisa kirim ke link di bawah ini, feedback kalian dibutuhkan untuk improvisasi website kami.
      </p>
      <Link to={"/kritikdansaran"} onClick={() => handleStateChange()} className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
        Kirim Kritik Dan Saran
      </Link>
    </div>
  );
}
